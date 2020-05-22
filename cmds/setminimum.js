module.exports.run = async (bot, message, args, db, prefix, rat, minimum, clopon, RoleAdmin,guildOwner) => {
    message.delete();
    if (!message.member.roles.find("name", RoleAdmin)) { 
        message.channel.send('ไม่มียศ');
        return;
    }
    if (args.length === 0){
        message.channel.send("โปรดใส่ เลข ที่จะตั้งด้วย")
    }else if (args.length ===1){
        let nminimum = args[0];

        db.collection('guilds').doc(message.guild.id).update({
            'minimum' : nminimum
          }).then(() =>{
              message.channel.send('เราได้เปลี่ยนขั้นตำให้เป็น`'+nminimum+'`')
          })
    }
};

exports.conf = { aliases: [] };

module.exports.help = {
    name : "setminimum",
    aliases: ["sm"]
};