const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot Its Online!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});
//Dont Hack Pls
client.login(process.env.Mzk0MDEyMDc4NTU1MjY3MDg0.DR-Rlg.R9SzdqTskfrhsSefmQeeGynBA74);
