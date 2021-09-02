const { Guild } = require('discord.js');
const fs = require('fs');

module.exports = (client, Discord) =>{
    const load_dir = (dirs) =>{
        //Reads Events folder, looks for event.js files to launch.
        const event_files = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));

        for(const file of event_files){
            const event = require(`../events/${dirs}/${file}`);
            const event_name = file.split('.')[0];
            client.on(event_name, event.bind(null, Discord, client));
        }
    }
    //Loads the Guild & Client Command Folders
    ['client', 'guild'].forEach(e => load_dir(e));
}