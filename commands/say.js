const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.replay(" ");
let botmessage = arguments.join(" ");
message.delete().catch();

var  sayEmbed = new discord.RichEmbed()
    .setColor("#cffccf")
    .setDescription(botmessage);

return message.channel.send(botmessage);

}

module.exports.help = {
    name: "say",
    description: "Verstuur een bericht.",
    perm: "admin",
    sortcount:10,
    cata: "staff"
}