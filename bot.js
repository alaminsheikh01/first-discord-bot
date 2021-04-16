require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

const bot_prefix = "!";
const mod_me = "mod-me";

client.on("ready", () => {
  console.log("our bot is ready to go");
});

client.on("messageDelete", (msg) => {
  msg.channel.send("Stop deleting message");
});

client.on("message", (msg) => {
  // chat message start
  if (msg.content === "ping") {
    msg.reply("pong!");
    //msg.channel.send("not tagged");
  }

  if (msg.content === "i love bot") {
    msg.react("❤️");
  }

  // chat message end
});

client.on("message", (msg) => {
  if (msg.content === `${bot_prefix}${mod_me}`) {
    modUser(msg.member);
  }
});

function modUser(member) {
  member.roles.add("832483608685182977");
}

client.login(process.env.BOT_TOEKN);
