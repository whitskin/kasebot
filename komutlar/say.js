const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
 
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("**__Sunucudaki üye sayısı__**", message.guild.memberCount)
        .addField("**__Çevrimiçi üye sayısı__**", message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size)
        .addField("**__Seslideki üye sayısı__**", count)
        .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL)
    message.channel.send(embed);
 
}
 
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sayı'],
    permLevel: 0
};
 
exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
};