const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "k!";
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
      .setColor("BLUE");

    message.channel.send(embed);
    return;
  }
  if (!args[0]) {
    const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setTitle("Reklam-Engel sistemi!")
      .setDescription(
        `Hatalı kullanım! örnek: ${prefix}reklam-engel aç && kapat`
      );

    message.channel.send(embed);
    return;
  }
  let kufur = await db.fetch(`kufur_${message.guild.id}`);
  if (args[0] == "aç") {
    if (kufur) {
      const embed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setTitle("Reklam-Engel sistemi!")
        .setDescription("**Görünüşe göre reklam filtresi zaten aktif!**");

      message.channel.send(embed);
      return;
    } else {
      db.set(`kufur_${message.guild.id}`, "Açık");
      const embed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setTitle("Reklam-Engel sistemi!")
        .setDescription("Reklam filtresi başarıyla açıldı!");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`kufur_${message.guild.id}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setTitle("Reklam-Engel sistemi!")
      .setDescription("Reklam filtresi başarıyla kapandı!");

    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["reklamengel"],
  permLevel: 2,
  kategori: "sunucu"
};

exports.help = {
  name: "reklam-engel",
  description: "reklam engeli aktif edersiniz.",
  usage: "reklam-engel"
};