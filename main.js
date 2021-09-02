//Call Discord
const Discord = require('discord.js');
//Call DotENV
require('dotenv').config();
//Call Chalk (Colorful Console)
const chalk = require('chalk');

//Required in Discord.js V13, Intents
const client = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"]
})

//Command and Event Handlers
client.commands = new Discord.Collection();
client.commands = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

// Discord Login
client.login(process.env.DISCORD_TOKEN);