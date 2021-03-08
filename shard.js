 const Discord = require('discord.js');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require(`http`)
const scarew = new Discord.ShardingManager('./bot.js', {// Ana dosyanızın adını yazınız.
   totalShards: 'auto',
   token: "NzI1MzE0NjY4NTcwMDgzMzg4.XvM77A.d1IDfBU-B_PV9px9SBhx-2XnSV0"// Buraya botunuzun tokeninizi yazınız.
});

scarew.spawn();

scarew.on('launch', shard => {
  console.log(`*${shard.id}* ID shard started.`)
});

setTimeout(() => {
   scarew.broadcastEval("process.exit()");
}, 21600000);