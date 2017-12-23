const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.Mzk0MDEyMDc4NTU1MjY3MDg0.DR-Kfg.9HNIj2A2ZTwY125wm-uPeTJK58k);
