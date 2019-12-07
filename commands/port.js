const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

var portEmbed = new discord.RichEmbed()
    .setTitle("Portfolio")
    .setColor("#ffcc00")
    .addField("Paid-Logo", `<#592000549277401099>`)
    .addField("Logo", `<#591900489386557451>`)
    .addField("Banner", `<#591900536643518484>`)
    .addField("cartoon", `<#591971058991628288>`)
    .addField("Thumbnail", `<#592361763027025930>`)
    .addField("Overig", `<#592292105024700436>`);

    return message.channel.send(portEmbed);
}

module.exports.help = {
    name: "portfolio",
    description: "Verstuur een bericht.",
}