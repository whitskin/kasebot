const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
 // if(message.author.id !== "788362639507062834") return;

  let user = args[0]

let users = await client.fetchUser(user);
  /*
    let kara = await db.fetch(`karaliste_${message.author.id}`).map(s => s.aktif)
  let sebeps = await db.fetch(`karaliste_${message.author.id}`).map(s => s.sebep)
  if (kara == "aktif") {
 return message.channel.send(`Hey Sen Bu Botun Karalistesine Alınmışsın. **Sebep: ${sebeps}**`)
    message.react("😡")
  }*/
  
 let sebep = args.slice(1).join()
  if (!user) return message.channel.send("Lütfen Karalisteye Alcağın Kişiyi Ve Sebebini Gir!")
  if(user === "788362639507062834") return message.channel.send("Kafan mı güzel kardeşim bu benim sahibim kara listeye alamassın.")
  let embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`**${users}** adlı kullanıcı başarıyla kara listeye alındı!`)
    message.channel.send({embed: embed})
//  const obj = {aktif: "aktif", sebep:sebep}
  db.set(`karaliste_${user}`, true)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blacklist", "kara-liste"],
  permLevel: 5,
    kategori: "yapımcı"
};

exports.help = {
  name: "kara-liste",
  description: "Belirtilen kullancıyı kara listeye alır!",
  usage: "karaliste <kullanıcı ID>"
};