module.exports = async (client,db) => {
  try {
  console.log(1)
    const Discord = require("discord.js")

client.on('channelDelete', async channel => {
  const c = channel.guild.channels.get(db.fetch(`mlog_${channel.guild.id}`));
  if (!c) return;
    let embed = new Discord.RichEmbed()
                    .addField(`Kanal silindi`, ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\n��� ID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)

    c.send(embed)
});

client.on('emojiCreate', emoji => {
  const c = emoji.guild.channels.get(db.fetch(`mlog_${emoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.RichEmbed()
                    .addField(`Emoji oluşturuldu`, ` İsmi: \`${emoji.name}\`\n GIF?: **${emoji.animated}**\n► ID: ${emoji.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${emoji.client.user.username}#${emoji.client.user.discriminator}`, emoji.client.user.avatarURL)

    c.send(embed)
    });
client.on('emojiDelete', emoji => {
  const c = emoji.guild.channels.get(db.fetch(`mlog_${emoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.RichEmbed()
                    .addField(`Emoji silindi`, ` İsmi: \`${emoji.name}\`\n GIF? : **${emoji.animated}**\n► ID: ${emoji.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${emoji.client.user.username}#${emoji.client.user.discriminator}`, emoji.client.user.avatarURL)

    c.send(embed)
    });
client.on('emojiUpdate', (oldEmoji, newEmoji) => {
  const c = newEmoji.guild.channels.get(db.fetch(`mlog_${newEmoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.RichEmbed()
                    .addField(`Emoji güncellendi`, ` Eski ismi: \`${oldEmoji.name}\`\n Yeni ismi: \`${newEmoji.name}\`\n► ID: ${oldEmoji.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${newEmoji.client.user.username}#${newEmoji.client.user.discriminator}`, newEmoji.client.user.avatarURL)

    c.send(embed)
    });

client.on('guildBanAdd', async (guild, user) => {    
    const channel = guild.channels.get(db.fetch(`mlog_${guild.id}`));
  if (!channel) return;
  
  const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())

    let embed = new Discord.RichEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
                    .addField(`Kullanıcı banlandı`, ` İsmi: \`${user.username}\`\n ID: **${user.id}**\n Sebep: **${entry.reason || 'Belirtmedi'}**\n Banlayan: **${entry.executor.username}#${entry.executor.discriminator}**`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${entry.executor.username}#${entry.executor.discriminator} tarafından`, entry.executor.avatarURL)

    channel.send(embed)
});

client.on('guildBanRemove', async (guild, user) => {    
    const channel = guild.channels.get(db.fetch(`mlog_${guild.id}`));
  if (!channel) return;
  
  const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())

    let embed = new Discord.RichEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
                    .addField(`Kullanıcının banı açıldı`, ` İsmi: \`${user.username}\`\n ID: **${user.id}**\n Banı Kaldıran: **${entry.executor.username}#${entry.executor.discriminator}**`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${entry.executor.username}#${entry.executor.discriminator} tarafından`, entry.executor.avatarURL)

    channel.send(embed)
});
client.on('messageDelete', async message => {    
  if(message.author.bot) return

    const channel = message.guild.channels.get(db.fetch(`mlog_${message.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.RichEmbed()
                    .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
                    .addField(`Mesaj silindi`,  `Mesaj: \`${message.content}\`\n Kanal: **${message.channel.name}**\n► ID: ${message.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${message.client.user.username}#${message.client.user.discriminator}`, message.client.user.avatarURL)

    channel.send(embed)
});

client.on('messageUpdate', async (oldMessage, newMessage) => {    
      if(oldMessage.author.bot) return;
    if(oldMessage.content == newMessage.content) return;

    const channel = oldMessage.guild.channels.get(db.fetch(`mlog_${oldMessage.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.RichEmbed()
                    .setAuthor(`${oldMessage.author.username}#${oldMessage.author.discriminator}`, oldMessage.author.avatarURL)
                    .addField(`Mesaj güncellendi`, ` Eski mesaj: \`${oldMessage.content}\`\n Yeni mesaj: \`${newMessage.content}\`\n Kanal: **${oldMessage.channel.name}**\n► ID: ${oldMessage.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${oldMessage.client.user.username}#${oldMessage.client.user.discriminator}`, oldMessage.client.user.avatarURL)

    channel.send(embed)
});

client.on('roleCreate', async (role) => {    

    const channel = role.guild.channels.get(db.fetch(`mlog_${role.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.RichEmbed()
.addField(`Rol oluşturuldu`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)                    
.setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${role.client.user.username}#${role.client.user.discriminator}`, role.client.user.avatarURL)

    channel.send(embed)
});

client.on('roleDelete', async (role) => {    

    const channel = role.guild.channels.get(db.fetch(`mlog_${role.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.RichEmbed()
.addField(`Rol silindi`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)                    
.setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${role.client.user.username}#${role.client.user.discriminator}`, role.client.user.avatarURL)

    channel.send(embed)
});
  } catch (e) {
    console.log(e)
  }
}