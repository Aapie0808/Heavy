module.exports.run = async (bot, message, args) => {
	var getal = Math.floor(Math.random() * Math.floor(100));
    return message.channel.send(`Hmm. Het getal is ${getal}. Wat een mooi getal.`);

};

module.exports.help = {
    name: "flip",
    description: "Geeft een random getal tussen 1-100!",
    perm: "user",
    category: "fun"
}