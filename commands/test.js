const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {
        var bugEmbed = new discord.RichEmbed()
        .setDescription("bug")
        .setColor("ee0000")
        .addField("Gemeld door", message.author)
        .addField("Bug", bug);
        var owner = 384399354066239488

        var bug =  arguments.join(" ").slice(22);
     
        message.send(owner);
        message.send(bugEmbed)

        message.channel.send("De bug is verzonden");

    } 

module.exports.help = {
    name: "test",
    Description: "**Enkel voor staff** => Ban een speler."
}