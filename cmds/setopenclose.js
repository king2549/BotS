const Discord = require('discord.js');
module.exports.run = async (bot, message, args, db, prefix, rat, minimum, clopon, RoleAdmin,guildOwner) => {
    message.delete();
    if (!message.member.roles.find("name", RoleAdmin)) { 
        message.channel.send('ไม่มียศ');
        return;
    }
    if (args.length === 0){
        message.channel.send("โปรดใส่ ห้อง ที่จะตั้งด้วย")
    }else if (args.length ===1){
        let uopcl = args[0];

        db.collection('guilds').doc(message.guild.id).update({
            'clopon' : uopcl
          }).then(() =>{
              message.channel.send('เราได้ตั้งให้ `'+uopcl+'` เป็นห้อง Open / Close')
          })
    }
};

exports.conf = { aliases: [] };

module.exports.help = {
    name : "setopenclose",
    aliases: ["soc"]
};