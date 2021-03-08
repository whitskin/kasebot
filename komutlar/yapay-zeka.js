const Discord = require("discord.js")
const cleverbot = require("cleverbot-free")
exports.run = async (client, message, args) => {


    let soru = args.slice(0).join(" ")

    if(!soru) return message.reply(":x: Soru gir!")
	 if(message.author.id !== "788362639507062834") return;


    cleverbot("Kötü.",["Merhaba","Nasılsın","götünü skm"]).then(cevap => message.channel.send(cevap))
}

  

  exports.help = {
    name:"yapay-zeka",
    usage:"yapay-zeka",
    description:"Yapay zeka işte"
    }
    
    exports.conf = {
    aliases: ["yapay","zeka"],
    kategori:"eğlence"
    }