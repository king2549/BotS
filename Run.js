// require packages
const Discord = require('discord.js');
const fs = require('fs');
require('dotenv/config')

// initialise are bot
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

// import bot setting (data)
let prefix;
const token = process.env.token;
const owner = process.env.owner;

const firebase = require('firebase/app');
const FieldValue = require('firebase-admin').firestore.FieldValue;
const admin = require('firebase-admin');
const ServiceAccount = require("./ServiceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert('ServiceAccount.json')
})

let db = admin.firestore();

//read commands files
fs.readdir('./cmds', (err, files) => {
  if (err) {
    console.log(err);
  }

  let cmdFiles = files.filter(f => f.split(".").pop() === "js");

  if (cmdFiles.length === 0) {
    console.log("No files found");
    return;
  }

  cmdFiles.forEach((f, i) => {
    let props = require(`./cmds/${f}`);
    console.log(`${i + 1}: ${f} loaded`);
    bot.commands.set(props.help.name, props);
  })
})





bot.on('ready', async () => {
  console.log("Hello, im ready");

});


bot.on('message', msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;

  db.collection('guilds').doc(msg.guild.id).get().then((q) => {
    if (q.exists) {
      prefix = q.data().prefix;
      rat = q.data().rat;
      minimum = q.data().minimum;
      clopon = q.data().clopon;
      RoleAdmin = q.data().RoleAdmin;
      guildOwner = q.data().guildOwner;
    }
  }).then(() => {

    let msg_array = msg.content.split(" ");
    let command = msg_array[0];
    let args = msg_array.slice(1);

    if (!command.startsWith(prefix)) return;

    if (bot.commands.get(command.slice(prefix.length))) {
      let cmd = bot.commands.get(command.slice(prefix.length));
      if (cmd) {
        cmd.run(bot, msg, args, db, prefix, rat, minimum, clopon, RoleAdmin, guildOwner);
      }
    }
  })



});

bot.on('guildCreate', async gDate => {
  db.collection('guilds').doc(gDate.id).set({
    'guildID': gDate.id,
    'guildName': gDate.name,
    'guildOwner': gDate.owner.user.username,
    'guildOwner': gDate.owner.id,
    'guildMemberCount': gDate.memberCount,
    'prefix': process.env.prefix,
    'rat': 0,
    'minimum': 0,
    'clopon': 0,
    'The_man_who_wrote_the_command': 0,
    'RoleAdmin': "admin"
  });

});



// Bot login
bot.login(token);