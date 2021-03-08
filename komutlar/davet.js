const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`<a:eki:714173156277092352>Botu Ekle! <a:eki:714173156277092352>`, `[Tıkla!](https://discord.com/oauth2/authorize?client_id=725314668570083388&scope=bot&permissions=8)`, true)
.setFooter(client.user.username, client.user.avatarURL)

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["d"],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "davet",
  description: "davet",
  usage: "davet"
};
