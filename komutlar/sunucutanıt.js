const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
      if (!message.member.hasPermission("ADMINISTRATOR")) 
      return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
    let timeout = 86400000 //24 saat 
    

    let stanıt = await db.fetch(`stanıt_${message.author.id}`);

    if (stanıt !== null && timeout - (Date.now() - stanıt) > 0) {
        let time = ms(timeout - (Date.now() - stanıt));


message.channel.send(`Bidaha Paylaşmak İçin **${time.hours} saat ${time.minutes} dakika ${time.seconds} saniye bekle**!`)

    } else {
            const embed = new Discord.RichEmbed()
  .setTitle('BAŞARILI')
    .addField(` Sunucunuz Bu Sunucuda Tanıtıldı`, `[Tıkla!](https://discord.gg/rk8GRCY)`,true)
    .addField(` 24 Saat Sonra Tekrar Paylaşabilirsiniz`, `[Tıkla!](https://discord.gg/rk8GRCY)`,true)
  .addField(` Beni Bu Linkten Ekliye Bilirsin`, `[Tıkla!](https://discord.com/oauth2/authorize?client_id=725314668570083388&scope=bot&permissions=8)`,true)
  .setColor('GREEN')
 message.channel.sendEmbed(embed);
    message.channel.createInvite({maxAge: 0}).then((invite) => {
        const embed = new Discord.RichEmbed()

    .setTitle('**Kullanıcı Sunucu Tanıttı**')
            .addField(`  **Sahip**`, message.author.tag, true )
            .addField(`  **Sunucunun İsmi**`, message.guild.name, true)
      .addField(`  **Üye Sayısı**`, message.guild.members.size, true)
      .addField(`  **Davet Linki**`, invite.url, true)
            .setColor('RANDOM')
      .setThumbnail(message.guild.iconURL)
       client.channels.get('747766478178222111').send(embed)
    
    db.set(`stanıt_${message.author.id}`, Date.now())
        
    }) 
    


}
}   

                                                                                                                                                              
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucutanıt', 
  description: "Tanıt",
  usage: 'sunucutanıt'
};