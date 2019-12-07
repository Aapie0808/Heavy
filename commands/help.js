const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
bot.on('message', message => {
    var prefix = '!'
    var msg = message.content;

    if (msg === prefix + 'image') {
	message.channel.send('Help menu:',{
            files: [
                "./data/help_menu.PNG"
            ]
        });
    }
});



}
module.exports.help = {
    name: "help",
    description: "Hier is het help menu"
}