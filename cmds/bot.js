const { promptMessage } = require("../functions.js");
const Discord = require('discord.js');

module.exports.run = async (bot, message, args, db, prefix, rat, minimum, clopon) => {
  const promptEmbed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor(`Free Bot`)
  .setDescription(`กด ✅ เพื่อรัปลิ้ง Bot นะครับ`)
  await message.channel.send(promptEmbed).then(async msg => {
    // Await the reactions and the reaction collector
    const emoji = await promptMessage(msg, message.member , 999999, ["✅"]);

    // The verification stuffs
    if (emoji === "✅") {
      message.member.send('https://discord.com/oauth2/authorize?client_id=649621000547467295&scope=bot&permissions=2146958847')
    }
});
};

exports.conf = { aliases: [] };

module.exports.help = {
  name: "bot"
};