require('dotenv').config();

//Message Event
module.exports = async (Discord, client, message) => {
    const prefix = "!"
    if(!message.content.startsWith(prefix) || message.author.bot) return;

     const args = message.content.slice(prefix.length).split(/ +/);
     const cmd = args.shift().toLowerCase();

     const command = client.commands.get(cmd);

     if(command) command.execute(client, message, args, Discord);   
}