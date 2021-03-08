const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://images-ext-2.discordapp.net/external/PSjWlicYiGVQZ_2vawyQYyknKljKg_kKiMUJipig-K0/https/media.discordapp.net/attachments/773921696209698816/785548994310570054/standard.gif', ''];
message.channel.send(new Discord.RichEmbed().setColor('#000001').setDescription(`**KASEO Eğlence MENÜSÜ


**\`${client.ayarlar.prefix}avatar\`
Avatar Komutu İle Kişinin Avatarını Görebilirsiniz

**\`${client.ayarlar.prefix}havadurumu\`
Yazdınız Şehrin Hava Durumunu Gösterir

**\`${client.ayarlar.prefix}boks-makinesi\`
Bok Makinesine Yumruk Atarsınız

**\`${client.ayarlar.prefix}korona-ol\`
Korona Olursunuz

**\`${client.ayarlar.prefix}aşkölçer\`
Etiketlediniz Kişi İle 

**\`${client.ayarlar.prefix}wasted\`
Profil Fotonuza Wasted Yazar 

**\`${client.ayarlar.prefix}sa-as\`
Gelen Kişi Selam Verirse AleyKümselam Diye Yanıt Verir  



`).setThumbnail(message.author.avatarURL || 'https://images-ext-2.discordapp.net/external/PSjWlicYiGVQZ_2vawyQYyknKljKg_kKiMUJipig-K0/https/media.discordapp.net/attachments/773921696209698816/785548994310570054/standard.gif').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['eğ', 'eğlen'],
  permLevel: 0
}

exports.help = {
  name: 'eğlence'
};