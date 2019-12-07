const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var kickUser = message.guild.member(message.mentions.users.first() );


    if(!kickUser) return message.channel.send("De speler kan niet gekickt worden als hij niet op de server zit.");

    var reason =  arguments.join(" ").slice(22);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Enkel voor staff**.");

    if(kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Hey jij mag geen mede staff kicken van de server!");

    var kick = new discord.RichEmbed()
        .setDescription("kick")
        .setColor("ee0000")
        .addField("Gekickte user:", kickUser)
        .addField("Gekickt door", message.author)
        .addField("Reden", reason);

    var kickChannel = message.guild.channels.find(`name`, "💠staff-logs");
    if(!kickChannel) return message.guild.send("Channel not found.");

    message.guild.member(kickUser).kick(reason);

    kickChannel.send(kick);

    return;

}

module.exports.help = {
    name: "kick",
    Description: "**Enkel voor staff** => kick een speler van de server."
}