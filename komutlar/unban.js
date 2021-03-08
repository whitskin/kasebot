const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("quick.db")
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **Uyarı** :warning:', '`unban` **adlı komutu özel mesajlarda kullanamazsın.** ')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
 // let reason = args.slice(1).join(' ');
//  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let k = client.users.get("user")
  let modlog = db.fetch(`mlog_${guild.id}`)
  //let modlog = guild.channels.find('name', 'log');
  if (!modlog) return message.reply('k!mod-log-ayarla #kanal ayarliyin');
  //if (reason.length < 1) return message.reply('**Ban kaldırma sebebini belirtmedin!**');
  if (!user) return message.reply('**Banı kaldırılacak kişinin** **__ID__** **numarasını yazmalısın.**').catch(console.error);
  message.guild.unban(user);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Ban kaldırma')
    .addField('Kullanıcının idi:', ` (${user})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
  //  .addField('Sebep', reason);
  return guild.channels.get(modlog).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2,
  kategori : "yetkili"
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin banını kaldırır.',
  usage: 'unban [kullanıcı] [sebep]'
};
