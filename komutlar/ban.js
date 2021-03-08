const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "+";
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription("```Ne yazık ki bu komutu kullanmaya yetkin yok.```")
      .setColor("#d3e90b");

    message.channel.send(embed);
    return;
  }

  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription("Lütfen sunucudan yasaklanacak kullanıcıyı etiketleyiniz!")
        .setColor("#d3e90b")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }

  const embed = new Discord.RichEmbed()
    .setColor("#d3e90b")
  .setImage("https://media3.giphy.com/media/Vh2c84FAPVyvvjZJNM/source.gif")
    .setDescription(`${u} adlı kullanıcının yasaklanmasını onaylıyor musunuz?`)
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem İptal Oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(
          `İşlem onaylandı! ${u} adlı kullanıcı sunucudan yasaklandı!`
        );
        

        message.guild.ban(u, 2);
      }
    });
  });
};

module.exports.conf = {
  aliases: [],
  permLevel: 3,
  enabled: true,
  guildOnly: true,
  kategori: "yetkili"
};

module.exports.help = {
  name: "ban",
  description: "ban",
  usage: "ban"
};