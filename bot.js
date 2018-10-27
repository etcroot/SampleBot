/* 
Simple discord bot tutorial by .etc#6666.

Resources you need:
https://discord.js.org/#/
Nodejs
npm

To install the library do "npm i discord.js --save" in your terminal.

Running the bot "node bot.js" in your terminal.
*/


const Discord = require('discord.js'); // Importing discord.js
const client = new Discord.Client(); // Creating a discord client.
const { RichEmbed } = require('discord.js'); // Importing richembed from discord.js library.
const { prefix, token, salty } = require('./ligma-config.json'); // This is to import prefix, token & the salty string from the config.

/* Print something in console to make sure your bot is ready & running without issues.
If you get error messages instead of this message, well you fucked up.
*/
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Simple ping command that responds with current bot ping.
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return; // This is to make the bot only respond to humans.
    // The ${prefix} is basically to make the bot respond to that and not just "ping" as a prefix-less message.
    if (message.content === `${prefix}ping`) {
        message.channel.send(message.client.ping + 'ms');
    }
});

// This is the command i use for the salty string.
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.content === `${prefix}test`) {
        message.channel.send(salty);
    }
});

/* Just a embed help message, you can add more stuff like following below into an embed.
  .setTitle
  .setAuthor
  .setColor
  .setDescription
  .setFooter
  .setImage
  .setThumbnail
  .setTimestamp()
  .setURL
  .addField
  .addBlankField(true)

  You can find out how to implement them on the discord.js library or your brain.
*/
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.content === `${prefix}help`) {
// This is to create the embed.
const embed = new RichEmbed()
      .setDescription('Embedded help command.');
    message.channel.send(embed);
  }
});

// Token is imported from the config file.
client.login(token);
