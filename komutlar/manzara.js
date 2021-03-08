const Discord = require("discord.js");  
module.exports.run = async (bot, message, args) => {      
let replies = ["https://mediatrend.mediamarkt.com.tr/wp-content/uploads/2017/02/2017_subat_03.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPc12Tt9pCrx1ec-7j_oQnVBvHiurgVDyHUeJdqjHSufc7n73C&usqp=CAU", "https://i.imgyukle.com/2019/09/06/oXCZbA.jpg", "https://icdn.ensonhaber.com/resimler/galeri/1323119944hejlrxn_1.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdv3GucZ8QKHIcRSXU6X6SVwIGsJrzk_B_wZTHxKE9sqCUefks&usqp=CAU"];     
 
  let result = Math.floor((Math.random() * replies.length));     
 
  let gifembed = new Discord.RichEmbed() 
.setTitle("Manzara fotoğrafınız:")         
.setColor("GREEN")        
.setFooter (`${message.author.tag} tarafından istendi.`, message.author.avatarURL)  
.setImage(replies[result]); 
  
  message.channel.send(gifembed); 
};  

exports.conf = {   
  enabled: true,   
  guildOnly: false,   
  aliases: ['manzara'],   
  permLevel: 0 
};  

exports.help = {   
name: 'manzara',   
description: 'Rastgele manzara fotoğrafı atar.',   
usage: 'manzara' 
}; 