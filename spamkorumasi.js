const Discord = require("discord.js");
var MessageData = [];
module.exports = (client, msg) => {
  if (msg.channel.name === undefined){
  }else{
  if (MessageData[msg.author.id] === undefined) {
    MessageData[msg.author.id] = { MesssageNumber: 0, LastMessage: [] };
    setTimeout(() => {
      delete MessageData[msg.author.id];
    }, 4000);
  }
  MessageData[msg.author.id].MesssageNumber += 1;

  MessageData[msg.author.id].LastMessage.push(msg);


  if (MessageData[msg.author.id].MesssageNumber >= 5) {
    if (msg.deletable) msg.delete();
      const sendeddd = new Discord.RichEmbed()
        .setColor("ORANGE")
      .setAuthor("KASEO", client.user.AvatarURL)
        .setDescription(msg.author.tag + " **\`Spam Yapmayı Kes Yoksa Susturulursun!\`**");
      msg.channel.send(sendeddd).then(stopspam => {
        setTimeout(() => {
          stopspam.delete();
        }, 7000);
      });
    var isFine = false;
    MessageData[msg.author.id].LastMessage.forEach(msgg => {
      if (msg.channel.id == msgg.channel.id) {
        if (msg.content == msgg.content) {
          isFine = true;
        } else {
          isFine = false;
        }
      }
    });
    if (isFine) {

        const spambed = new Discord.RichEmbed()

          .setColor("ORANGE")
       .setAuthor("KASEO", client.user.AvatarURL)
        .setDescription(msg.author.tag + " **\`Sana Spam Yapmayı Kes Yoksa Susturulursun Demiştim!\`**");
        msg.channel.send(spambed);
        msg.channel.bulkDelete("10");
        msg.channel.overwritePermissions(msg.author.id, {
                SEND_MESSAGES: false
});
      }
    }
  if (MessageData[msg.author.id] >= 3) {
    if (msg.deletable) msg.delete();
     msg.channel.bulkDelete("15");
      const spambed = new Discord.RichEmbed()
        .setColor("ORANGE") 
      .setAuthor("KASEO", client.user.AvatarURL)
      .setDescription(msg.author.tag + " **\`Sana Spam Yapmayı Kes yoksa Susturulursun Demiştim!\`**");
      msg.channel.send(spambed);
      msg.channel.overwritePermissions(msg.author.id, {
                SEND_MESSAGES: false,
        
});
    }
  }
};