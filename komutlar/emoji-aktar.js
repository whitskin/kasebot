const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  if(!message.member.hasPermission('MANAGE_EMOJIS')) return message.reply('Bu komutu kullanabilmek için `Emojileri Yönet` iznine sahip olmalısın!');
  let alınacakSunucu = client.guilds.get(args[0]);
  if(!alınacakSunucu) return message.reply(`Botun belirtilen ID numarasına sahip bir sunucusu bulunamadı! \nEmojinin hangi sunucudan hangi sunucuya aktarılacağını ID ile belirtmelisin. \n**Örn:** \`${prefix}emoji-aktar [emojilerinAlınacağıSunucuID] [emojiAdı/tüm]\``);
  if(args[1] === "tüm") {
    if(alınacakSunucu.emojis.size < 2) return message.reply(`**${alınacakSunucu.name}** adlı sunucu 2'den emojiye sahip!`);
    if(!message.author.id === "708308517513199687") return

    try {
      await alınacakSunucu.emojis.forEach(x => message.guild.createEmoji(x.url, x.name));
      message.reply(`**${alınacakSunucu.name}** adlı sunucunun tüm emojilerini başarıyla bu sunucuya yükledim!`)
    } catch(err) { console.log(err) }
    return//codepack
  }
  if(!alınacakSunucu.emojis.find(a => a.name === args[1])) return message.reply(`Emojinin hangi sunucudan hangi sunucuya aktarılacağını ID ile belirtmelisin. \n**Örn:** \`${prefix}emoji-aktar [emojilerinAlınacağıSunucuID] [emojiAdı/tüm]\``);//codepack
  if(!message.guild.member(client.user).hasPermission('MANAGE_EMOJIS')) return message.reply('Botun bu sunucuda yeterli yetkisi yok!');//codepack
  let emoji = alınacakSunucu.emojis.find(a => a.name === args[1]);//codepack
  message.guild.createEmoji(emoji.url, emoji.name)  //codepack
};
//codepack
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emoji-aktar","ea","emojia","aktaremoji"],
  permLevel: 0,
  kategori: 'sunucu'
};

module.exports.help = {
  name: 'emoji-aktar',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'emoji-aktar'
};