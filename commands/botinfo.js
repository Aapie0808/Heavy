const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var botIcon = bot.user.displayAvatarUrl;

    var botEmbed = new discord.RichEmbed()
        .setTitle("BotInfo")
        .setThumbnail(botIcon)
        .setColor("#fd00ff")
        .addField("Naam", bot.user.username)
        .addField("Maker", `@🚀 || SpaceTomaat#2378`)
        .addField("Versie", `2.0.0`)
        .addField("ID", `597098264558305280`)
        .setFooter("Zaterdag 6 juli 2019 18:15:19");

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "botinfo",
    Description: "**Enkel voor staff** => Ban een speler."
}