const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async(client, message, args) =>{
   if(!message.member.hasPermissions("ADMINISTRATOR")) return message.channel.send(
     new Discord.RichEmbed()
     .setColor('RED')
     .setTitle('Hata :x:')
     .setDescription('Bu kodu kullanabilmek için `YÖNETİCİ` yetkisine sahip olmalısın.')
 ).then(m => m.delete(15000))
  
let fakemake = await db.fetch(`fakerol_${message.guild.id}`) || await db.fetch(`fakekanal_${message.guild.id}`)
if(fakemake) return message.reply(`:x: Bu Sistem Zaten Aktif Durumda. Kapatmak için **${prefix}fake-hesap-ceza-kapat**`)

let fakerol = message.mentions.roles.first()
let fakekanal = message.mentions.channels.first()
if(!fakekanal || !fakerol) return message.reply(`Sistemi Ayarlamak İçin Kanal Rol Girmelisin..`)
  
db.set(`fakerol_${message.guild.id}`,fakerol.id) 
db.set(`fakekanal_${message.guild.id}`,fakekanal.id)

message.channel.send(`**20 Günden Önceki Hesap Açanlara <@&${fakerol.id}> Rolünü Vereceğim.**`)
};  
exports.conf = {
  enabled: false, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3 
};

exports.help = {
  name: 'fake-hesap-rol-kanal',
  description: 'Otorol Sistemi - Frenzy Code',
  usage: 'otorol rol kanal'
};