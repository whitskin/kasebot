const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://images-ext-2.discordapp.net/external/PSjWlicYiGVQZ_2vawyQYyknKljKg_kKiMUJipig-K0/https/media.discordapp.net/attachments/773921696209698816/785548994310570054/standard.gif', ''];
message.channel.send(new Discord.RichEmbed().setColor('#000001').setDescription(`**KASEO MODERASYON MENÜSÜ


\`${client.ayarlar.prefix}capslock-engelleme\`
**Sunucuda Büyük Harfle Yazmayı Engeler**


\`${client.ayarlar.prefix}Otorol\`
**Sunucunuza Giren Kişiye Oto Rol Vermenizi Sağlar**
 
 
\`${client.ayarlar.prefix}sayaç-ayarla\`
**Saycaç Sitemini Açmanıza Yardımcı Olur**


\`${client.ayarlar.prefix}unban\`
**Kişinin Banını Kaldırmanıza Yardımcı Olur**


\`${client.ayarlar.prefix}ban\`
**Sunucunuzdaki bi Üyeyi Banlamanıza Yardımcı Olur**


\`${client.ayarlar.prefix}kanal-Koruma\`
**Kanal Koruma Sistemi Bi Kanal Silinirse Tekrar Oluşturur**


\`${client.ayarlar.prefix} Rol-Koruma\`
**Sunucudaki Roleri Silen Kişileri Engeler Rol Silince Tekrar Oluşturur ve Sunucun Sahibine Özelden Bildirim Gönderir**


\`${client.ayarlar.prefix} hg-kanal-#kanal\`
**Sunucunuza Biri Girdinde Hoşgeldin Mesajı Atar**


\`${client.ayarlar.prefix} bb-kanal-#kanal\`
**Sunucunuzdan Çıkan Üyeye Görüşürüz Mesajı Atar**
 
 
\`${client.ayarlar.prefix} güvenlik-#kanal\`
**Güvenlik Sistemini Açmanıza Yardımcı Olur Gelen Üyelerin Güvenli Olup Olmadını Söyler**



\`${client.ayarlar.prefix} güvenlik-kapat\`
 ** Güvenlik Sistemini Kapatırsınız**


\`${client.ayarlar.prefix} küfür-engel aç\`
**Küfür Sistemini Açmış Bulunursunuz**


 \`${client.ayarlar.prefix} spam-koruması\`
 **Sunucunuzda Spam Atılırsa Engelemesini Sağlar**
 
 
\`${client.ayarlar.prefix} mod-log-ayarla\`
**Sunucunuzda Silinen Mesajları Atılan Üyelerin Logunu Bi Kanalda Gösterir**
  
  
  
\`${client.ayarlar.prefix} modlog-kanal kapat\`
**Modlog Kanalını Kapatmanıza Yarar**
   
   
\`${client.ayarlar.prefix} botrol #kanal\`
**Gelen Botlara Otomatik Rol Verir**
 
\`${client.ayarlar.prefix} ever-engel\`
**Everyone here izni olmayan Üyelerin Everyone here atmasını engeller**
  
  
\`${client.ayarlar.prefix} nuke\`
**Kanalı Siler Yeniden Oluşturur**
 
 
 
**`).setThumbnail(message.author.avatarURL || 'https://images-ext-2.discordapp.net/external/PSjWlicYiGVQZ_2vawyQYyknKljKg_kKiMUJipig-K0/https/media.discordapp.net/attachments/773921696209698816/785548994310570054/standard.gif').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['moder', 'mod'],
  permLevel: 0
}

exports.help = {
  name: 'moderasyon'
};