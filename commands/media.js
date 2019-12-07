const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var mediaEmbed = new discord.RichEmbed()
        .setTitle("Media")
        .setColor("#cc00ff")
        .addField("Website", `[Kik hier](https://www.duckhdesign.nl/soon)`);

    return message.channel.send(mediaEmbed);

}

module.exports.help = {
    name: "media",
    Description: "krijg de bot ping"
}