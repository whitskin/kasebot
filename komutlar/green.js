const Discord = require("discord.js")
const {RichEmbed} = Discord
exports.run = async (client,message,args) =>{
  let yazı = args[0]
  if(yazı.startsWith("https://") || yazı.startsWith("http://"))
  if(!yazı) return message.channel.send("yazı yazsanıza❌ ")
  let api = `https://dynamic.brandcrowd.com/asset/logo/7f0254b2-49ae-4819-9107-47728665a65f/logo?v=4&text=${yazı}`
  const embed = new RichEmbed()
  .setColor("random")
  .setImage(api)
  message.channel.send(embed)
}
exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: [],
		permLevel: 0,
    kategori: "",
   
	  };
	  
	exports.help = {
		name: 'green',
		description: '',
		usage: '',
   
	};