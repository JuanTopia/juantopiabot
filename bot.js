const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!download') {
    	message.reply('lmao kid go to JuanHax Channel For Downloads');
  	}
      if (message.content === '!report') {
    	message.reply('Private Message Me And ScreenShot If He/She Doing Something Against The Rules');
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
