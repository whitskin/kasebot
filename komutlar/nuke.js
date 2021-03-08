const Discord = require('discord.js');
const DBL = require("dblapi.js")
exports.run = async(client, message, args) => {

const dbl = new DBL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcyNTMxNDY2ODU3MDA4MzM4OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA4MTQ0MjYwfQ.R0M2U9NMjizXZc9x5JHlbCw7LKYsO2DEcEWlmStxjWQ", client)

const voted = await dbl.hasVoted(message.author.id);
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription("Bu Komutu Kullaman İçin Oy Vermen Lazım [Tıkla](https://top.gg/bot/725314668570083388/vote) Oy Verdikten Sonra Bekle Kontrol Ediliyo")
if(!voted) return message.channel.send(embed)

message.channel.clone().then(knl => {
   knl.setPosition(message.channel.position);
   message.channel.delete();
 }); 
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nuke","nuk","nk"],
  permLevel: 4
};

exports.help = {
    name: 'nuke',
  description: 'belirtilen kanalı siler tekrar oluşturu işte',
  usage: 'nuke'
};