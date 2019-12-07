const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, arguments) => {

    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("**Enkel voor staff**.");

    var user = message.guild.member(message.mentions.users.first());

    if (!user) return message.channel.send("Geef een speler die bestaat op.");

    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Jij mag geen staff warnen!");

    var reason = arguments.join(" ").slice(22);

    if (!reason) return message.channel.send("Met welke reden?");

    if (!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var warnEmbed = new discord.RichEmbed()
        .setDescription("Warn")
        .setColor("#ff5c16")
        .addField("Gewarnde", user)
        .addField("Door", message.author)
        .addField("Reden", reason)
        .addField("Antal warns", warns[user.id].warns);

    var warnChannel = message.guild.channels.find(`name`, "💠staff-logs");
    if(!warnChannel) return message.guild.send("Channel not found.");

    warnChannel.send(warnEmbed);

    return message.channel.send(`${user} jij bent gewarnt met de reden **__${reason}__**`);

}

module.exports.help = {
    name: "warn",
    Description: "**Enkel voor staff** => warn een speler"
}