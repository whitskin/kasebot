const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require('../ayarlar.json');


exports.run = (client, message) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    const istatistikozel = new Discord.RichEmbed()
    .setColor(0x36393F)
.setDescription(`${ client.user.username}`)
  .addField(` <a:Kral:768773130289152012> Bot Sahipleri <a:Kral:768773130289152012>`, `<@788362639507062834>`, true)
  .addField('<a:bulut:714173170978127882>Shard<a:bulut:714173170978127882>', '1/1', true)
    .addField("<a:yklen:714173167673016353>Bellek Kullanımı<a:yklen:714173167673016353>", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField("<a:anka:714173192620736522>Sunucu Sayısı<a:anka:714173192620736522>", `${client.guilds.size.toLocaleString()}`, true)
      .addField("<a:kural:714173182374051922> Kanal Sayısı<a:kural:714173182374051922>", `${client.channels.size.toLocaleString()}`, true)
  .addField("<a:online:714173220948934668>ToplamKullanıcıSayısı<a:online:714173220948934668>", `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField(`<a:seconds:714173161872293948>Ne Kadar Süredir Aktif<a:seconds:714173161872293948>`, `${duration}`, true)
  .addField("<a:kalp:725449501334306938>Ping<a:kalp:725449501334306938>", `${client.ping}`, true)
  .addField("<a:dc:714173188162191391>Discord.js Sürümü<a:dc:714173188162191391>", `${Discord.version}`, true)
  .addField(`<a:eki:714173156277092352> Destek Sunucum <a:eki:714173156277092352>`, `[Tıkla](https://discord.gg/rtVKCdC)`, true)
  message.channel.sendEmbed(istatistikozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'i', 'istatistikler', 'botbilgi', 'bilgi', 'hakkında', 'bot hakkında', 'bothakkında'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};