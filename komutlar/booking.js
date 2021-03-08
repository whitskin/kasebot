const Discord = require("discord.js")
const {RichEmbed} = Discord
exports.run = async (client,message,args) =>{
  let yazı = args[0]
  if(!yazı) return message.channel.send("yazı yazsanıza❌ ")
  let api = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=booking-logo&text=${yazı}`
  const embed = new RichEmbed()
  .setColor("random")
  .setImage(api)
  message.channel.send(embed)
}
exports.conf = {
		enabled: false,
		guildOnly: false,
		aliases: [],
		permLevel: 0,
    kategori: "",
   
	  };
	  
	exports.help = {
		name: 'booking',
		description: '',
		usage: '',
   
	};