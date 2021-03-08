const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://images-ext-2.discordapp.net/external/PSjWlicYiGVQZ_2vawyQYyknKljKg_kKiMUJipig-K0/https/media.discordapp.net/attachments/773921696209698816/785548994310570054/standard.gif', ''];
message.channel.send(new Discord.RichEmbed().setColor('#000001').setDescription(`**KASEO YARDIM MENÜSÜ

\`${client.ayarlar.prefix}kayıt-sistemi aç\`
**Kayıt Sistemini Açar**

\`${client.ayarlar.prefix}kayıt-kanal ayarla #kanal\`
**Kayıt Kanalını Ayarlarsınız**

\`${client.ayarlar.prefix}kayıt-rol ayarla @rol\`
**Kayıt Olduktan Sonra Verilecek Rol**


\`${client.ayarlar.prefix}kayıt-ol isim yaş\`
**Kayıt olurken verilecek isim yaş**

**`).setThumbnail(message.author.avatarURL || 'https://images-ext-2.discordapp.net/external/PSjWlicYiGVQZ_2vawyQYyknKljKg_kKiMUJipig-K0/https/media.discordapp.net/attachments/773921696209698816/785548994310570054/standard.gif').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['km'],
  permLevel: 0
}

exports.help = {
  name: 'kayıt-menüsü'
};