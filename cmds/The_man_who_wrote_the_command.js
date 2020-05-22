//The_man_who_wrote_the_command

module.exports.run = async (bot, message, args, db, prefix, rat, minimum, clopon, RoleAdmin,guildOwner) => {
    message.delete();
    if (!message.member.roles.find("name", RoleAdmin)) { 
        message.channel.send('ไม่มียศ');
        return;
    }
    if (args.length === 0){
        message.channel.send("โปรดใส่ idของห้อง ที่จะตั้งด้วย")
    }else if (args.length ===1){
        let uopcl = args[0];

        db.collection('guilds').doc(message.guild.id).update({
            'opcl' : uopcl
          }).then(() =>{
              message.channel.send('เราได้ตั้งให้ `'+uopcl+'` เป็นห้องเขียนคำสั้ง buyrobux')
          })
    }
};

exports.conf = { aliases: [] };

module.exports.help = {
    name : "The_man_who_wrote_the_command",
    aliases: ["tmwwtc"]
};