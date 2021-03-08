const Discord = require('discord.js');
const moment = require('moment')
//const ayarlar = require('../ayarlar.json');
const {stripIndents,oneLine}= require("common-tags")

exports.run = (client, message, params) => {
  var s = message.guild.fetchBans().then(bans => {
  let üyesayı = message.guild.memberCount;
  let botlar = message.guild.members.filter(m => m.user.bot).size;
  let kullanicilar = üyesayı - botlar;
  let boostbilgi = message.guild.premiumSubscriptionCount
  var verti = message.guild.verificationLevel;
   const vertific = ['Yok', 'Düşuk', 'Orta', 'Yüksek', 'En Yüksek'];
  let kur = {
            "01": "Ocak",
            "02": "Şubat",
            "03": "Mart",
            "04": "Nisan",
            "05": "Mayıs",
            "06": "Haziran",
            "07": "Temmuz",
            "08": "Ağustos",
            "09": "Eylül",
            "10": "Ekim",
            "11": "Kasım",
            "12": "Aralık"
    }
  const filterLevels = ["Yok","Rolü Olmayanlar için","Herkes için"]
  //ar s = message.guild.fetchBans().then(bans => {
  const arashim = new Discord.RichEmbed()
    .setColor("#a8d6f0")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField(" **❯** __Ana Bilgiler__", stripIndents`
    Sunucu Sahibi: **${message.guild.owner}(${message.guild.ownerID})**
    Sunucu ID: **${message.guild.id}**
    Sunucu Bölgesi **${message.guild.region}**
    Sunucu Kuruluş Tarihi: **${moment(message.guild.createdAt).format('DD')} ${kur[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY h:mm:ss')}**
    Sunucudaki Banlı kişi sayısı: **${bans.size}**
    Sunucu Filtre Seviyesi: **${filterLevels[message.guild.explicitContentFilter]}**
    Sunucu Doğrulama Seviyesi: **${vertific[message.guild.verificationLevel]}**

`)
    
    .addField(` **❯** __Üye Bilgileri__`, stripIndents`
   Toplam Kullanıcı Sayısı: **${üyesayı}** Kullanıcı
   Toplam Üye Sayısı: **${kullanicilar}** Üye
   Toplam Bot Sayısı: **${botlar}** Bot 
  `)
  .addField(` **❯** __Sunucu Bilgileri__`, stripIndents`

   Toplam Kategori Sayısı: **${message.guild.channels.filter(c => c.type === 'category').size}** Kategori
   Toplam Kanal Sayısı: **${message.guild.channels.size}** Kanal
   Toplam Rol Sayısı: **${message.guild.roles.size}** Rol
   Toplam Emoji Sayısı: **${message.guild.emojis.size}** Emoji
   Toplam Normal Emoji Sayısı : **${(message.guild.emojis.filter(e => e.animated === false).size)}**
   Toplam Gif Emoji Sayısı : **${(message.guild.emojis.filter(e => e.animated === true).size)}**
`)

  .addField(` **❯** __Takviye Bilgileri__`, stripIndents`
   Şuanki Takviye Sayısı: **${boostbilgi}** Takviye
   Şuanki Sunucu Seviyesi: **${message.guild.premiumTier}** Seviye
`)
  
    .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
    .setThumbnail(message.guild.iconURL);
    return message.channel.sendEmbed(arashim);
  }
                                         )
  }
                                         
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sb'],
  permLevel: 0,
  kategori: "sunucu"
};
exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};