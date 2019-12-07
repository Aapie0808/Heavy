const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    if(!arguments[2]) return message.reply("Wat wil je me vragen?");
    let replies = ["Ja", "Nee", "Ik denk het", "Ik heb geen idee, zo slim ben ik niet", "Vraag het na", "Zoek het op", "Vraag het me later nog een keer"];

    let result = Math.floor((Math.random() * replies.length));
    let question = arguments.slice(1).join(" ");

    var ballEmbed = new discord.RichEmbed()
        .setColor("#ff9900")
        .addField("**__ANTWOORD__**", replies[result])
        .setFooter("Antwoord verzonden door: CoolHosting")

    return message.channel.send(ballEmbed)

}

module.exports.help = {
    name: "8ball",
    Description: "Krijg de info over de makers."
}