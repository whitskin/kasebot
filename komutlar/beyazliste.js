const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let user = await client.fetchUser(args[0]);
   if (!args[0]) {
    let e = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription("Kara listeden kaldırmak istediğin kullanıcının ID'ini yaz!")
    message.channel.send(e)
    return;
  };
  
  db.delete(`karaliste_${user.id}`)
  
  let embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`${user.username}#${user.discriminator} adlı kullanıcı başarıyla kara listeden çıkartıldı!`)
    message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["beyazliste"],
  permLevel: 5,
    kategori: "sahip"
};

exports.help = {
  name: "beyaz-liste",
  description: "Belirtilen kullancıyı kara listeden çıkartır.",
  usage: "beyaz-liste <kullanıcı ID>"
};