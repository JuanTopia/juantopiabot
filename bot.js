const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!download') {
    	message.reply('lmao kid go to JuanHax Channel For Downloads');
  	}
});

client.on('message', message => {
    if (message.content === '!youtube') {
    	message.reply('JuanHax');
  	}
});

client.on('message', message => {
    if (message.content === '!commands') {
    	message.reply('!youtube, !download , ComingSoon');
  	}
});

client.on('message', message => {
    if (message.content === '!comingsoon') {
    	message.reply('JuanHax');
  	}
});

client.on('message', message => {
    if (message.content === '!comingsoon2') {
    	message.reply('JuanHax');
  	}
});

client.on('message', message => {
    if (message.content === '!comingsoon2') {
    	message.reply('JuanHax');
  	}
});

//LMAO CANT STEAL?
client.login(process.env.BOT_TOKEN);
