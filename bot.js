try {
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

//ar express = require("express")



client.ayarlar = require('./ayarlar.json')


const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};




client.login(ayarlar.token);


//-------------------sayaç------------
client.on("guildMemberAdd", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find("name", skanal9);
  if (!skanal31) return;
  skanal31.send(
    `<a:girdim:725637816142528522> | \`${
      member.user.tag
    }\`, sunucuya katıldı \`${sayac}\` kişi olmamıza \`${sayac -
      member.guild.members.size}\` kişi kaldı, \`${
      member.guild.memberCount
    }\` kişiyiz!`
  );
});

client.on("guildMemberRemove", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find("name", skanal9);
  if (!skanal31) return;
  skanal31.send(
    `<a:cktm:725637960808005674> | \`${
      member.user.tag
    }\`, aramızdan ayrıldı, \`${sayac}\` kişi olmamıza \`${sayac -
      member.guild.members.size}\` kişi kaldı, \`${
      member.guild.memberCount
    }\` kişiyiz!`
  );
});
//-----afk----
client.on("message", async message => {
  const ms = require("parse-ms");

  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`k!afk`)) return;

  if (await db.fetch(`afkm_${message.author.id}`)) {
    let cfxtime = await db.fetch(`afkm_süre_${message.author.id}`);
    let cfxs = ms(Date.now() - cfxtime);
    db.delete(`afkm_${message.author.id}`);
    db.delete(`afkm_süre_${message.author.id}`);
    const codefenixkodpaylasim = new Discord.RichEmbed()
      .addField(
        `${message.author.username}** başarıyla aktif moduna geçtin!**`,
        `\`${cfxs.days}\` **gün** \`${cfxs.hours}\` **saat**  \`${cfxs.minutes}\` **dakika** \`${cfxs.seconds}\` **saniye boyunca sunucuda aktif değildin!**`)
      .setColor("BLACK")
      .setFooter(`${client.user.username}`, client.user.avatarURL);
     //essage.member.setNickname(`${message.author.username}`)
    message.channel.send(codefenixkodpaylasim);
  }

  var cfxu = message.mentions.users.first();
  if (!cfxu) return;
  var REASON = await db.fetch(`afkm_${cfxu.id}`);

  if (REASON) {
    let cfxtime = await db.fetch(`afkm_süre_${cfxu.id}`);
    let cfxs = ms(Date.now() - cfxtime);
    const codefenixkodpaylasim2 = new Discord.RichEmbed()
      .addField(
        `\`${cfxu.username}\` adlı kullanıcı \`${REASON}\` sebebiyle;`,
         `\`${cfxs.days}\` **gün** \`${cfxs.hours}\` **saat**  \`${cfxs.minutes}\` **dakika** \`${cfxs.seconds}\` **saniyeden beri afk modunda.*`
      )
      .setColor("BLACK")
      .setFooter(`${client.user.username}`, client.user.avatarURL);
    message.reply(codefenixkodpaylasim2);
  }
});
client.on("message", msg => {
  if(!msg.guild) return
  let i = db.has(`saas_${msg.guild.id}`)
 // db.fetch(`saas_${msg.guild.id}`).then(i => {
    if (i === true) {
      if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 'sea' || msg.content.toLowerCase() == 'selamun aleyküm' || msg.content.toLowerCase() == 'selam') {
     msg.channel.send({embed: {
                color: 0xD97634,
                description: `**<a:sihir:726110642427134018> Aleyküm Selam Hoşgeldin <a:sihir:726110642427134018> **`            
              }});
    
  }


    else if (i === false) {
      
    }
    if (!i) return;
  }
    });

//----------küfür-enegl--------

//---------oto rol-------


//------rol-koruma----
client.on("roleDelete", async (role) => {
  const entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first());
  let yetkili = entry.executor;
  let cezaliRolu = db.fetch(`cezaRol_${role.guild.id}`)
  let logKanali = db.fetch(`rolKoruma_${role.guild.id}`)
  if(!db.has(`rolKoruma_${role.guild.id}`) !== true) {
  await role.guild.member(yetkili).setRoles([cezaliRolu]);
  let yeniRol = await role.guild.createRole({ name: role.name, color: role.color, hoist: role.hoist, position: role.position, permissions: role.permissions, mentionable: role.mentionable });
  const uyar =new Discord.RichEmbed()
    .setTimestamp()
    .setColor('RANDOM')
    .setDescription(`${yetkili.tag} adlı kişi bir rol sildi ve cezalıya atıldı!\nRolü tekrar açtım ve üyelerine vermeye başladım!`)
  role.guild.channels.get(logKanali).send(uyar);
  const uyar2 = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`${role.name} adlı rol verilmeye başlanıyor!`)
  let mesaj = await role.guild.channels.get(logKanali).send(uyar2);
  setTimeout(() => {
    let veri = roleDefender[role.id];
    let index = 0;
    setInterval(() => {
      veri = roleDefender[role.id];
      if (index >= veri.Üyeler.length){
        delete roleDefender[role.id];
        clearInterval(this);
      };
      let kisi = role.guild.members.cache.get(veri.Üyeler[index]);
      try { kisi.addRole(yeniRol, "Koruma meydana geldi"); } catch(err) { };
      const uyar3= new Discord.RichEmbed()
      .setcolor('RANDOM')
      .setDescription(`${kisi.user.tag} adlı üyeye ${yeniRol.name} adlı rol verildi!`)
      mesaj.edit();
      index++;
    }, 2000);
  }, 5000);
  }
});

const roleDefender = {};
client.on("guildMemberUpdate", async (oldMember, newMember) => {
  oldMember.roles.forEach(async role => {
    if (newMember.roles.has.some(r => r.id == role.id)) return;
    if (!roleDefender[role.id]) {
      roleDefender[role.id] = {
        Rol: role,
        Üyeler: [newMember.id],
        Silindi: false
      };
    } else {
      roleDefender[role.id].Üyeler.push(newMember.id);
    };
  });
}); 
//--- etiket perfix-----
client.on('message', async message => {
if (message.content === `<@${client.user.id}>`) {
   message.channel.send(`Prefixim: ${ayarlar.prefix}`)
}
});


//--- etiket komut kullanma ------

//----kanal-koruma------
client.on("channelDelete", async channel => {
  let guild = channel.guild;
  let fak = db.has(`kanalkoruma_${guild.id}`)
  if(fak == true) {
  const logs = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_DELETE' })
  let member = guild.members.get(logs.entries.first().executor.id);
  if(!member) return;
    if(member.id == member.guild.owner.user.id) return
  channel.clone(channel.name, true, true, "Kanal silme koruması sistemi").then(async klon => {
    await klon.setParent(channel.parent);
    await klon.setPosition(channel.position);
  })
  }
})
  
 

  
  //ekledim atıldım
  client.on('guildDelete', guild => {

let rrrsembed = new Discord.RichEmbed()

.setColor("#d3e90b")
.setTitle(" Bot Kickledi ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
.setThumbnail("https://cdn.discordapp.com/attachments/711542793545449472/768474549992947742/Animated_GIF-downsized.gif")
   client.channels.get('764916336592814089').send(rrrsembed);
  
});


client.on('guildCreate', guild => {

let rrrsembed = new Discord.RichEmbed()

.setColor("#d3e90b")
.setTitle(" Bot Eklendi ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
.setThumbnail("https://cdn.discordapp.com/attachments/711542793545449472/768474549992947742/Animated_GIF-downsized.gif")
   client.channels.get('764916336592814089').send(rrrsembed);
  
});
  
  
  
  
  
  
  
  
  
//--------sapam------
const AntiSpam = require("./spamkorumasi.js");
const cooldown = new Set();

client.on("message", async msg => {
  if(msg.author.bot) return
  if(!msg.guild) return
      if (msg.member.hasPermission('ADMINISTRATOR')) return;
    let spamkorumasi = await db.fetch(`spamkorumasi_${msg.guild.id}`);
    if (spamkorumasi == 'kapali') return;
    if (spamkorumasi == 'acik') {
        if (client.user.id == msg.author.id) return;
  AntiSpam(client, msg);
  if (cooldown.has(msg.author.id)) {
    return;

    }
    }
  });


///////gold mesaj
client.on("message", async message => {
  let golduye = await db.fetch(`gold_${message.author.id}`, true)
  let mesajsayi = await db.get(`mesajsayi_${message.author.id}`)

  if(golduye) {
db.add(`mesajsayi_${message.author.id}`, +1)
      if (message.content.length > 64) {
      
             const embed = new Discord.RichEmbed()
        
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setThumbnail(message.author.avatarURL)
.addField(`Ooo Kimler Gelmiş `,`<@${message.author.id}> **<a:sihir:726110642427134018>Burada Bir Gold Üye Belirdi!<a:sihir:726110642427134018>**`)
        .setFooter('Hizaya Geçin!', client.user.avatarURL)
.setColor("#00fcff")
             .setTimestamp()

     // message.react('594053657046155264')
      message.channel.send(embed).then(m => m.delete(10000));
      db.set(`mesajsayi_${message.author.id}`, 1)
    }
  } 
})

//ban-korma

  client.on('guildBanAdd', async (guild, user) => {
try {
const veri = await db.fetch(`bankoruma_${guild.id}`)
if(!veri) return;
let kanal = client.channels.get(veri)

let logs = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'});
if(logs.entries.first().executor.bot) return;
let kişi = guild.members.get(logs.entries.first().executor.id)
guild.member(kişi).kick();
guild.unban(user)

const embed = new Discord.RichEmbed()
.setAuthor(kişi.user.username, kişi.user.avatarURL)
.setFooter(`${client.user.username}`)
.setTimestamp()
.setDescription(`${kişi.user.tag} isimli kişi ${user.tag} isimli kişiyi yasaklamaya çalıştı, attı ama ben banlayan kişiyi attım ve kişinin yasağını kaldırdım..`)
kanal.send(embed)
} catch (e) {
 // const db = require()
  let  veri = db.fetch(`bankoruma_${guild.id}`)
  if(!veri) return
  let kanal =  client.channels.get(veri)
  kanal.send("Yetkim yetmedi")
}
})
/*
client.on('guildMemberRemove', async (member) => {// chimp ᵈ♡#0110

*/
//-------fake-hesap------

//-----çekiliş--
const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
  everyoneMention: true,
    default: {
        botsCanWin: false,
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});

client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} entered giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});

client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} unreact to giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});



process.on('unhandledRejection', error => {
    console.error('API Hatası:', error);
  });


  client.on('error', error => {
    console.error('WebSocket bir hatayla karşılaştı:', error);
});

  ///burakoy
} catch (e) {
  console.log(e)
}


