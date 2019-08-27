const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("614506376034648066")
setInterval(function() {
channel.send(`spam-by-seven`);
}, 30)
})

client.login(process.env.BOT_TOKEN);