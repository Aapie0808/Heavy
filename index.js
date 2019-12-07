const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) =>{

    if(err)console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles <=0) {
        console.log("Files not found. Sorry");
        return;        
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`File ${f} is ready`);

        bot.commands.set(fileGet.help.name, fileGet);

    })

});


bot.on("ready", async () => {

    console.log(`${bot.user.username} is nu online en klaar voor gebruik.`);

    bot.user.setActivity(`HeavyMT`, { type: "WATCHING" });
	
	    bot.on("guildMemberAdd", member => {
        var role = member.guild.roles.find("name", "💠-Member"); 
        if (!role) return;
        member.addRole(role);
 
        const channel = member.guild.channels.find("name", "💠welcome");
        if (!channel) console.log("Kan het kanaal niet vinden.");
     
        var joinEmbed = new discord.RichEmbed()
            .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
            .setDescription(`Hoi ${member.user.username}, Welkom op **Cool Hosting** Discord Server.`)
            .setColor("#00FF00")
            .setTimestamp()
            .setFooter("Gebruiker gejoined.");
     
        channel.send(joinEmbed);
 

     
    });
    bot.on("guildMemberRemove", member => {
 
        const channel = member.guild.channels.find("name", "💠goodbye");
        if (!channel) console.log("Kan het kanaal niet vinden.");
     
        var leaveEmbed = new discord.RichEmbed()
            .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
            .setColor("#FF0000")
            .setTimestamp()
            .setFooter("Gebruiker Geleaved.");
     
        channel.send(leaveEmbed);
     
    });

});


bot.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    if(message.content.startsWith("!"));

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);


    var commands = bot.commands.get(command.slice(prefix.length));

    if(commands) commands.run(bot,message, arguments);


    
});

async function execute(message, serverQueue) {
	const args = message.content.split(' ');

	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('I need the permissions to join and speak in your voice channel!');
	}

	const songInfo = await ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.title,
		url: songInfo.video_url,
	};

	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};

		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			play(message.guild, queueContruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(`${song.title} has been added to the queue!`);
	}

}


bot.login(Botconfig.token);





