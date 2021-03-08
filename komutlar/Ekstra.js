const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://images-ext-2.discordapp.net/external/PSjWlicYiGVQZ_2vawyQYyknKljKg_kKiMUJipig-K0/https/media.discordapp.net/attachments/773921696209698816/785548994310570054/standard.gif', ''];
message.channel.send(new Discord.RichEmbed().setColor('#000001').setDescription(`**KASEO Ekstra MENÜSÜ

\`${client.ayarlar.prefix}ping\`
**Botun Pingini Ölçer**

\`${client.ayarlar.prefix}istatistik\`
**Botun İstatistik Bilgilerini Gösterir**

\`${client.ayarlar.prefix}davetoluştur\`
**Sunucunun Sınırsız Davet Linkini Oluşturur**

\`${client.ayarlar.prefix}sunucubilgi\`
**Sunucunun Bilgilerini Göster**

\`${client.ayarlar.prefix}kullanıcıbilgi\`
**Etiketlediniz Kişinin Bilgilerini Gösterir**

\`${client.ayarlar.prefix}emojibilgi\`
**Emoji Hakında Bilgi Verir**

\`${client.ayarlar.prefix}slowmode\`
**Üyelerin Yazmasını Kısıtlarsınız**

\`${client.ayarlar.prefix}green\`
**Size Güzel Bi Logo Oluşturur**

**\`${client.ayarlar.prefix}gold-yazı\`
**Size Gold Şeklinde Bi Logo Yapar**

\`${client.ayarlar.prefix}banneryazı\`
**Banner Yazı Yazarsınız**

**\`${client.ayarlar.prefix}afk\`
**Afk Moduna Geçiş Yaparsınız**

\`${client.ayarlar.prefix}çekiliş\`
**Sunucunuzda Çekiliş Başlatırsınız**

\`${client.ayarlar.prefix}emoji-aktar\`
**Botun Ekli Oldu Sunucudaki Emojileri Aktarırsınız**

\`${client.ayarlar.prefix}emojiler\`
**Sunucunuzda Ekli Olan Emojileri Gösterir**



**`).setThumbnail(message.author.avatarURL || 'https://images-ext-2.discordapp.net/external/PSjWlicYiGVQZ_2vawyQYyknKljKg_kKiMUJipig-K0/https/media.discordapp.net/attachments/773921696209698816/785548994310570054/standard.gif').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ek', 'eks'],
  permLevel: 0
}

exports.help = {
  name: 'ekstra'
};