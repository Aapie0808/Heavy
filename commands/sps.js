const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    if(!arguments[0]) return message.channel.send("Doe !sps {steen/papier/schaar} ");

    var options = ["steen", "papier", "Schaar"];

    var result = options[Math.floor(Math.random() * options.length)];

    if(arguments[0] == "steen"){

        if(result == "papier"){

            message.channel.send(`Ik heb ${result} :notepad_spiral:, ik win.`);

        }else if(result == "schaar"){

            message.channel.send(`Ik heb ${result} :scissors:, jij wint.`);

        }else if(result == "steen"){

            message.channel.send(`Ik heb ${result} :moyai:, het gelijkspel.`);

        }

    }

    else if(arguments[0] == "schaar"){

        if(result == "steen"){

            message.channel.send(`Ik heb ${result} :moyai:, ik win.`);

        }else if(result == "papier"){

            message.channel.send(`Ik heb ${result} :notepad_spiral:, jij wint.`);

        }else if(result == "schaar"){

            message.channel.send(`Ik heb ${result} :scissors:, het gelijkspel.`);

        }

    }

    else if(arguments[0] == "papier"){

        if(result == "schaar"){

            message.channel.send(`Ik heb ${result} :scissors:, ik win.`);

        }else if(result == "steen"){

            message.channel.send(`Ik heb ${result} :moyai:, jij wint.`);

        }else if(result == "papier"){

            message.channel.send(`Ik heb ${result} :notepad_spiral:, het gelijkspel.`);

        }

    }

}

module.exports.help = {
    name: "sps",
    description: "speel steen, papier, schaar."
}