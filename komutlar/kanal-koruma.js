const Discord = require('discord.js');
const fs = require('fs');



exports.run = async (client, message) => {
  
	//
  const db = require('quick.db');
  

  let prefix = await db.fetch(`prefix_${message.guild.id}`) || "k!";
	let args = message.content.split(' ').slice(1);
	const secenekler = args.slice(0).join(' ');

	if(secenekler.length < 1) return message.reply(`**${prefix}kanakoruma aç** veya **${prefix}kanalkoruma kapat** yazınz.`);
	//if(secenekler === "aç" || "kapat") return message.channel.send(errembed);

  if (secenekler !== "aç" && secenekler !== "kapat" && secenekler !== "on" && secenekler !== "off") return message.reply(`**${prefix}llink-engelle aç** veya **${prefix}link-engelle kapat** yazınz.`)

	if (secenekler === "aç" || secenekler === "on") {
		
    var i = db.set(`kanalkoruma_${message.guild.id}`, "acik")
    
		  const embed = new Discord.RichEmbed()
    .setColor('RED')
    .setDescription(`Kanal Koruma Başarıyla açıldı\nKanal koruma kapatmak isterseniz **${prefix}kanal-koruma kapat** yazmanız yeterlidir.`)
    message.channel.send(embed)
    
    /*let linkEngel = JSON.parse(fs.readFileSync("././jsonlar/linkEngelle.json", "utf8"));
  if(!linkEngel[message.guild.id]){
		linkEngel[message.guild.id] = {
			linkEngel: "acik"
		  };
  };

		  fs.writeFile("././jsonlar/linkEngelle.json", JSON.stringify(linkEngel), (x) => {
        if (x) console.error(x)
      })
    */
	};

	if (secenekler === "kapat") {
    
    db.delete(`kanalkoruma_${message.guild.id}`)
    
		message.channel.send('Kanal koruma sistemi kapatıldı')
    
    /*let linkEngel = JSON.parse(fs.readFileSync("././jsonlar/linkEngelle.json", "utf8"));
  if(!linkEngel[message.guild.id]){
		linkEngel[message.guild.id] = {
			linkEngel: "kapali"
		  };
  };

		fs.writeFile("././jsonlar/linkEngelle.json", JSON.stringify(linkEngel), (x) => {
        if (x) console.error(x)
      })
    
    if (linkEngel[message.guild.id]) {
      
    delete linkEngel[message.guild.id]
    delete linkEngel[message.guild.id].linkEngel
      
    }*/
    
	};
}

	exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: ['kanal-koruma'],
		permLevel: 4,
    kategori: "ayarlar",
   
	  };
	  
	exports.help = {
		name: 'kanal-koruma',
		description: 'Kanal koruma sistemini açıp kapatmanızı sağlar.',
		usage: 'kanal-koruma <aç/kapat>',
   
	};