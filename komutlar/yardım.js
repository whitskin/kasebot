const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://images-ext-2.discordapp.net/external/PSjWlicYiGVQZ_2vawyQYyknKljKg_kKiMUJipig-K0/https/media.discordapp.net/attachments/773921696209698816/785548994310570054/standard.gif', ''];
message.channel.send(new Discord.RichEmbed().setColor('#000001').setDescription(`**KASEO YARDIM MENÜSÜ

●▬▬▬▬▬▬๑Moderasyon๑▬▬▬▬▬●
<a:kaseoemojhi:797475840371064882> \`k!moderasyon\`Moderasyon Komutlarını Görebilirsiniz


●▬▬▬▬▬▬๑Eğlence๑▬▬▬▬▬●
<:alpha2:797494533041422406>  \`k!eğlence\` Eğlence Komutlarını Görebilirsiz


●▬▬▬▬▬▬๑Kayıt-menüsür๑▬▬▬▬▬●
<a:alpha:797494590785191976>  \`k!kayıt-menüsü\` Kayıt Sistemini Görebilirsiz


●▬▬▬▬▬▬๑Ekstra๑▬▬▬▬▬●
<:alpha7:797495456829407343>   \`k!ekstra\` Ekstra Komutları Görebilirsiniz


**`).setThumbnail(message.author.avatarURL || 'https://images-ext-2.discordapp.net/external/PSjWlicYiGVQZ_2vawyQYyknKljKg_kKiMUJipig-K0/https/media.discordapp.net/attachments/773921696209698816/785548994310570054/standard.gif').setImage(images.random()))
 
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['y', 'help'],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};