const chalk = require('chalk');
const moment = require('moment');
require("moment-duration-format");
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


module.exports = client => {
      
  console.log(`BOT: ${client.user.username} ismi ile giriş yapıldı!`);
const db = require("quick.db")
require("../bot/modlog")(client,db)
  require("../bot/link")(client,db)
  require("../bot/gelengiden")(client,db)
  client.user.setStatus("idle");
  client.user.setActivity (`k!yardım  ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} kullanıcıya hizmet`);
}