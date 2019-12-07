const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var banUser = message.guild.member(message.mentions.users.first() );


    if(!banUser) return message.channel.send("Deze speler is niet gevonden.");

    var reason =  arguments.join(" ").slice(22);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je hebt deze permission niet.");

    if(banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Hey je mag een mede staff niet bannen!");

    var ban = new discord.RichEmbed()
        .setDescription("ban")
        .setColor("ee0000")
        .addField("Geband door", message.author)
		.addField("Gebande User", banUser)
        .addField("Reden", reason);

    var banChannel = message.guild.channels.find(`name`, "💠staff-logs");
    if(!banChannel) return message.guild.send("Channel not found.");

    message.guild.member(banUser).ban(reason);

    banChannel.send(ban);

    return;

}

module.exports.help = {
    name: "ban",
    Description: "**Enkel voor staff** => Ban een speler."
}