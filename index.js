const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = "MTM2MDk2ODU5NzMyNDk1OTg0NA.GYSUJM.yVuZ9rSnbI9arXOs5IQHtHw4Za-wt84YOUjPdI"; // Bot tokenini buraya ekle

client.on("ready", () => {
    console.log(`Bot giriş yaptı: ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    if (message.content.toLowerCase() === "!sa") {
        message.reply("as");
    }
});

client.login(TOKEN);
