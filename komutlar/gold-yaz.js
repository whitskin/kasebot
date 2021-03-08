const Discord = require("discord.js")
const {RichEmbed} = Discord
exports.run = async (client,message,args) =>{
  let yazı = args[0]
  if(!yazı) return message.channel.send("yazı yazsanıza❌ ")
  let api = `https://dynamic.brandcrowd.com/asset/logo/f802ad87-f5ae-491f-9a02-89ee701b588f/logo?v=4&text=${yazı}`
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
		name: 'goldyazı',
		description: '',
		usage: '',
   
	};