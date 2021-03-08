  const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "a!";

  if (!args[0]) {
    const embed = new Discord.RichEmbed()
      .setColor("GOLD")
      .setTitle("Rol Koruma sistemi!")
      .setDescription(
        "**Hatalı kullanım! örnek: k!rol-koruma aç #kanal @rol && kapat**"
      );

    message.channel.send(embed);
    return;
  }
  
   if(args[0] === "kapat") {
      db.delete(`rolKoruma_${message.guild.id}`)
     db.delete(`cezaRol_${message.guild.id}`)
     message.channel.send('Rol koruma kapatıldı')
     return
   }
  
  if(args[0] === "aç") {
    let channel = message.mentions.channels.first()
  if (!channel) {
      const uyari = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription('<a:no:679854277711233037> Lütfen bir kanal belirt.')
    return message.channel.send(uyari)
  }
  
  let role = message.mentions.roles.first()
  if(!role) {
  db.set(`rolKoruma_${message.guild.id}`,channel.id)
  if(!role) return message.reply('<a:no:679854277711233037> Ceza rolü için bir rol seçmelisin.');
  db.set(`cezaRol_${message.guild.id}`, role.id)
  }
  
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription('<a:okey:679854253501710383> Başarılı bir şekilde rol koruma log kanalı' + channel + ' olarak ayarlandı.\n<a:okey:679854253501710383> ' + role + ' Adlı rol ceza rolü olarak ayarlandı.')
  message.channel.send(embed)
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rol-k"],
  permLevel: 3,
  kategori: "sunucu"
};

exports.help = {
  name: "rol-koruma",
  description: "Rol koruma",
  usage: "rol-koruma"
}; 