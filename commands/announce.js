const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var kickKanaal = message.guild.channels.find(`name`, "📢mededelingen");

    if (!kickKanaal) return message.channel.send("Oeps! Dit kanaal is niet gevonden!");

        var mes = args.join(" ").slice(22);

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Oeps! Jij mag dit helemaal niet!");

        var banEmbed = new discord.RichEmbed()
            .setAuthor("Mededeling:", "https://images-ext-2.discordapp.net/external/X53NBfbsSeTeHtiZenbx0X9MJtRToPBKHQSlwcxUVOY/https/cdn.discordapp.com/icons/591646743104454692/72f609405352b6605ed0607e0daf99e0.jpg")
            .setColor("#ee0000")
            .setDescription(mes);

        kickKanaal.send(banEmbed);

        return message.channel.send("Bericht verstuurd!");
}

module.exports.help = {
    name: "melding",
    description: "Verstuur een bericht."
}