const nodeogram = require('nodeogram'),
      config = require('./config.json'),
      getPage = require('summarizer').getPage,      

bot = new nodeogram.Bot(config.token);

bot.init();

bot.command('start', 'Start', true, (args, message) => {
message.reply(`<code>This bot can skim through any article link you send to it. It is currently in BETA and the algorithm may output garbage from other links. It works pretty well with Wikipedia, Reddit text posts and Medium. Incase of any bugs, especially if the summarized article is not parsed well, contact</code> @kamikazechaser<code>\n\nUsage: </code>/skim <code>[link-to-article]</code>`, {parse_mode: 'HTML'});
});

bot.command('skim', 'Skims Through An Article. Usage /skim [link]', false, (args, message) => {
getPage(args[0]).then(function (data) {
message.reply(`<b>${data.title}</b>\n\n<code>${data.summary}</code>`, {parse_mode: 'HTML'});
});
});
