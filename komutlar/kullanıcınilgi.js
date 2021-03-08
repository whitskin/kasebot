const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();

const botadi = "KASEO"

exports.run = async (bot, msg, args) => {
        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
  
        let user = msg.mentions.users.first() || msg.author;
  
        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL;
        userinfo.id = user.id;
        userinfo.od1 = msg.guild.members.get(user.id).user.presence.game || "Oynadığı bir oyun yok"
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `Rahatsız Etmeyin`)
        .replace("online", `Çevrimiçi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Çevrimdışı`)
        userinfo.bot = user.bot.toString()
        .replace("false", `Hayır`)
        .replace("true", `Evet`)
        userinfo.sonmesaj = user.lastMessage || "Son yazılan mesaj bulunamadı." || "Son yazılan mesaj gösterilemedi."
  
        userinfo.dctarih = moment.utc(msg.guild.members.get(user.id).user.createdAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
        userinfo.dctarihkatilma = moment.utc(msg.guild.members.get(user.id).joinedAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
  
        const uembed = new Discord.RichEmbed()
        .setAuthor(user.tag, userinfo.avatar)
        .setThumbnail(userinfo.avatar)
        .setTitle('<a:yildiz:725372727678206042>Kullanıcı<a:yildiz:725372727678206042>')
        .addField(`<a:tik3:714173188636016701>Şu anda oynadığı oyun<a:tik3:714173188636016701>`, userinfo.od1, false)
        .addField(`<a:rahatsizeetmeyin:714173161427566592>Durum<a:rahatsizeetmeyin:714173161427566592>`, userinfo.status, false)
        .setColor('03f2df')
        .addField(`<a:kural:714173182374051922>KatılımTarihi(Sunucu)<a:kural:714173182374051922> `, userinfo.dctarihkatilma, false)
        .addField(`<a:dc:714173188162191391>Katılım Tarihi (Discord)<a:dc:714173188162191391>`, userinfo.dctarih, false)
        .addField(`<a:evt2:714173223582957698>Kimlik<a:evt2:714173223582957698>`, userinfo.id, true)
        .addField(`<a:emoji_41:712908625718280222>Botmu<a:emoji_41:712908625718280222>`, userinfo.bot, true)
        .addField(`<a:anka:714173192620736522>Roller<a:anka:714173192620736522>`, `${msg.guild.members.get(user.id).roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') || "**Bu kullanıcıda hiçbir rol bulunmuyor**"}`, false)
        .addField(`<a:eki:714173156277092352>Son gönderdiği mesaj<a:eki:714173156277092352>`, userinfo.sonmesaj, false)
      
        .setFooter(`${botadi} Kullanıcı Bilgi Sistemi`)
        msg.channel.send(uembed)
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'kullanıcı-bilgi',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'kullanıcı-bilgi'
};