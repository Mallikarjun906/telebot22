const {Telegraf} =require('telegraf')
const dotenv = require("dotenv");
dotenv.config();
const bot = new Telegraf(process.env.APIKEY);
bot.start((ctx) => {ctx.reply('Welcome! I am your friendly bot. How can I assist you today?');});
bot.command('kle',(ctx) => {ctx.reply('Kle is a great person!');});
bot.command('link',(ctx) => {ctx.replyWithHTML('<a href="https://www.google.com">Google</a>');});
bot.command('location',(ctx) => {ctx.replyWithLocation(16.504781,75.2711986,2933);});
// bot.command('video',(ctx) => {ctx.replyWithVideo('https://www.youtube.com/watch?v=dQw4w9WgXcQ');});
bot.command('meme',async (ctx) => { await ctx.replyWithAnimation('https://media.tenor.com/10sb85jhemoAAAAi/frog-stab.gif');});


bot.launch()

console.log("Bot is running...");
