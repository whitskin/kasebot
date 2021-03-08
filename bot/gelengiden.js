module.exports = async (client,db) =>{
  console.log(3)
  let moment = require("moment") 
  require("moment-duration-format")
  const Discord = require("discord.js")
  client.on("guildMemberAdd", async(member) => {
  let otorol = await db.fetch(`otorol_${member.guild.id}`)
  let otorolkanal = await db.fetch(`otorolkanal_${member.guild.id}`)
  if(!otorol) return
  await(member.addRole(member.guild.roles.get(otorol).id))
  if(otorolkanal && client.channels.has(otorolkanal)) {
    await client.channels.get(otorolkanal).send(`:loudspeaker:  \`${member.user.tag}\`  **Sunucuya Hoşgeldin  \`${member.guild.roles.get(otorol).name}\`  Rolünü Başarıyla Verdim.** :white_check_mark: **Sunucu İçerisinde**  \`${member.guild.members.size}\`  **Şu Kadar Kişiyiz!**`)
  }
})
//------hoşegeldin-bb----
client.on("guildMemberAdd", async member => {
let kanal = await db.fetch(`hgK_${member.guild.id}`)
if(!kanal) return;
member.guild.channels.get(kanal).send(`:loudspeaker: :inbox_tray: Hoşgeldin! ${member} Seninle beraber **${member.guild.memberCount}** kişiyiz`)    
})

client.on("guildMemberRemove", async member => {
let kanal = await db.fetch(`baybayK_${member.guild.id}`)
if(!kanal) return
member.guild.channels.get(kanal).send(`:loudspeaker: :outbox_tray: Baybay! **${member.user.username}** sunucudan çıktı. Şuan **${member.guild.memberCount}** kişiyiz`)
});
//-----resimli-güvenlik----
client.on('guildMemberAdd',async member => {
let Canvas = require('canvas')
let user = client.users.get(member.id);
let kanal = db.fetch(`güvenlik_${member.guild.id}`)
if(db.has(`güvenlik_${member.guild.id}`) === false) return
let canvas = Canvas.createCanvas(360,100);
let ctx = canvas.getContext('2d');
  
let resim1 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614151181752860672/yhosgeldirrn.png')
let resim2 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614164419768877056/yhosgeldirrn.png')
let kuruluş = new Date().getTime() - user.createdAt.getTime();
let gün = moment.duration(kuruluş).format("D")   
let kontrol;
if(kuruluş > 2629800000) kontrol = resim2
if(kuruluş < 2629800000) kontrol = resim1
let background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614164413318168606/Adsz.png');
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
let avatar = await Canvas.loadImage(member.user.displayAvatarURL);
ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
ctx.beginPath();
ctx.lineWidth = 4;
ctx.fill()
ctx.lineWidth = 4;
ctx.arc(180, 46, 36, 0, 2 * Math.PI);
ctx.clip();
ctx.drawImage(avatar, 143,10, 73, 72  );
let attachment = new Discord.Attachment(canvas.toBuffer(), 'Kaseo-güvenlik.png');
client.channels.get(kanal).send(attachment)
});
  
  
  client.on("guildMemberAdd", async(member, message, msg) => {
 const fakehesapp = db.get(`fake_${member.guild.id}`)

  if(fakehesapp == "açık"){
  var moment = require("moment");
  require("moment-duration-format");
  moment.locale("tr");
  var { Permissions } = require("discord.js");
  var x = moment(member.user.createdAt)
    .add(20, "days")
    .fromNow();
  var user = member.user;
  x = x.replace("Birkaç Saniye Önce", " ");
  if (!x.includes("önce") || x.includes("sonra") || x == " ") {
    let rol = db.get(`fakerol_${member.guild.id}`);


    member.user.send(
          `**\`\`\`Hesabınız 20 Günden Önce Açıldığı İçin Cezalıya Atıldınız, Yetkililere Bildirerek Açtırabilirsiniz.\`\`\`**`);

    ////////////////
    let kanalcık = await db.fetch(`fakekanal_${member.guild.id}`);
    if(!kanalcık) return
    let kanal = member.guild.channels.find(r => r.id === kanalcık);
    ////////////////
    const embedd = new Discord.RichEmbed()

      .setTitle("Fake Hesap Bulundu !!")
      .setTimestamp()
      .setDescription(
        `**${member}** Adlı Kişi Fake Hesap Sistemine Yakalandı Rolü Verildi.`
      )
      .setTimestamp()
      .setColor("RED");
    kanal.send(embedd);
    member.addRole(rol);
  } else {
  }
  }
});
  
  client.on("guildMemberAdd", async member => {
  let veri = db.get(`botrol_${member.guild.id}`);
  let kanalver = db.get(`botrolk_${member.guild.id}`);
  if (!veri  || !kanalver) return;
if (!member.guild.roles.has(veri) || !member.guild.channels.has(kanalver.kanal))
  
  if (member.user.bot) {
    member.addRole(veri);
    member.guild.channels.get(kanalver).send(`**${member} Adlı Bot Sunucuya Giriş Yaptı Rol Başarıyla Verildi!**`);
  };
});
  client.on('guildMemberAdd', (member) => {
    const db = require('quick.db'); 

         const channelss = db.fetch(`kkanal_${member.guild.id}`)

       const kayıts = db.has(`ksistem_${member.guild.id}`)
             if (kayıts == undefined) {
             }
            if (kayıts == 'acik') {
             
                          member.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(member, {
                    VIEW_CHANNEL: false
                });
            });
                          
                 member.guild.channels.get(channelss).overwritePermissions(member, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true
                });
            
            }

        
  });
}