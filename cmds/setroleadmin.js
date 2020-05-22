const Discord = require('discord.js');
module.exports.run = async (bot, message, args, db, prefix, rat, minimum, clopon, RoleAdmin,guildOwner) => {
    message.delete();
    console.log(message.member.id)
    if(!message.member.id == guildOwner){
        message.channel.send(message.member+'มึงไม่ใช้ Owner ของ เซิฟเวอร์ นี้ ไอ้ควย')
        return;
    }
    let role = message.guild.roles.find(r => r.name == args[0]) || message.guild.roles.find(r => r.id == args[0]) || message.mentions.roles.first()
    if(!role) return message.channel.send("โปรดใส่ยศที่จะตั้งเป็นAdmin") 
    console.log(role.name)
    if (args.length === 0){
        message.channel.send("โปรดใส่ ห้อง ที่จะตั้งด้วย")
    }else if (args.length ===1){
        let urole = role;

        db.collection('guilds').doc(message.guild.id).update({
            'RoleAdmin' : urole.name
          }).then(() =>{
              message.channel.send('เราได้ตั้งให้ `'+urole+'` เป็นยศ Admin แล้ว')
          })
    }
};

exports.conf = { aliases: [] };

module.exports.help = {
    name : "setroleadmin",
    aliases: ["sram"]
};