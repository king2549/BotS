module.exports.run = async (bot, message, args, db, prefix, rat, minimum, clopon, RoleAdmin,guildOwner) => {
    message.delete();
    if (!message.member.roles.find("name", RoleAdmin)) { 
        message.channel.send('ไม่มียศ');
        return;
    }
    if (args.length === 0){
        message.channel.send("โปรดใส่ Prefix ที่จะตั้งด้วย")
    }else if (args.length ===1){
        let nPrefix = args[0];

        db.collection('guilds').doc(message.guild.id).update({
            'prefix' : nPrefix
          }).then(() =>{
              message.channel.send('เราได้ตั้งให้ `'+nPrefix+'` เป็น Prefix')
          })
    }
};

exports.conf = { aliases: [] };

module.exports.help = {
    name : "setprefix",
    aliases: ["sp"]
};