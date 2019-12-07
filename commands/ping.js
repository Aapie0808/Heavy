const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    message.channel.send("Pong: " + (Date.now() - message.createdTimestamp) + "ms");

}

module.exports.help = {
    name: "ping",
    Description: "krijg de bot ping"
}