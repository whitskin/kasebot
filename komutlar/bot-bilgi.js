const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment");
require("moment-duration-format");
module.exports.run = async (bot, message) => {
  try {
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    //let shardi = bot.shard.id + 1;

    const duration = moment
      .duration(bot.uptime)
      .format("D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .addField(` <:bilgi:733667906721677323>Versiyon`, `0.1`, true)
      .addField(`<a:rahatsizeetmeyin:714173161427566592>  Aktiflik Süresi`, duration, true)
      .addField(`<a:kiz:714173166012071966> Sunucular`, bot.guilds.size.toLocaleString(), true)
      .addField(
        `:bust_in_silhouette:  Kullanıcılar`,
        bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),
        true
      )
      .addField(`:satellite:  Gecikme`, bot.ping + "ms", true)
      .addField(
        `:computer: Ram Kullanımı`,
        `%${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`,
        true
      )
      //addField(`Toplam Shard`, bot.shard.count, true)
      //.addField(`Bulunduğum Shard`, shardi, true)
      //.addField(`Genel Shard`, `${shardi}/${bot.shard.count}`, true)
      .addField(`:point_down_tone1: Destek Sunucusu`, `[Tıkla!](https://discord.gg/rk8GRCY)`,true)
      .addField(
        `:point_down_tone1: Botu Ekleyin`,
        `[Tıkla!](https://discord.com/oauth2/authorize?client_id=725314668570083388&scope=bot&permissions=8)`,
        
        true
        
      )
      .addField(`:point_down_tone1: Bota Oy Verin`, `[Yakında!](Yakında)`, true)
      .setFooter(bot.user.username, bot.user.avatarURL);
    message.channel.send(embed);
  } catch (err) {
    const ayarlar = require("../ayarlar.json");
    const embed = new Discord.RichEmbed()
      .setDescription(
        `Sanırım bir sorun var! Bunu yetkililere bildir!\nDestek Sunucusu: [Tıkla!](${ayarlar.sunucun})`
      )
      .setColor("RED")
      .setTimestamp();
    message.channel.send(embed);
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-info"],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "bot-bilgi",
  description: "bot-bilgi",
  usage: "bot-bilgi"
};