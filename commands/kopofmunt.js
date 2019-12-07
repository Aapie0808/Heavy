const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    let replies = ["Kop", "Munt"];

    let result = Math.floor((Math.random() * replies.length));

    var ballEmbed = new discord.RichEmbed()
        .setColor("#ff9900")
        .addField("**__Het is:__**", replies[result])
        .setFooter("Geflipt door: Blokk Community")

    return message.channel.send(ballEmbed)


}

module.exports.help = {
    name: "kopofmunt",
    description: "speel kop of munt."
}