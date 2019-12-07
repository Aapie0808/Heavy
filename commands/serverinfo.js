const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var botIcon = bot.user.displayAvatarUrl;

    var serverEmbed = new discord.RichEmbed()
        .setTitle("serverInfo")
        .setThumbnail(botIcon)
        .setColor("#fc00ff")
        .addField("Naam", "DuckH Design")
        .addField("Eigenaars", `@Stkstaartje#1234 en @Oom_Dagobert#1675`)
        .addField("Members", message.guild.memberCount)
        .addField("Diensten", `Designs`)
        .setFooter("Vrijdag 21 juni 2019 17:12:55");

    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "serverinfo",
    Description: "**Enkel voor staff** => Ban een speler."
}