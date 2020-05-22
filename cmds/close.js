const Discord = require('discord.js');
module.exports.run = async (bot, message, args, db, prefix, rat, minimum, clopon, RoleAdmin,guildOwner) => {
    message.delete();
    if (!message.member.roles.find("name", RoleAdmin)) { 
        message.channel.send('ไม่มียศ');
        return;
    }
    if (clopon == 0){
        message.channels.send("โปรใช้ทำสั้งนี้ก่อน "+prefix+Setopenclose)
    }
    message.delete();
    let deleteAmount;

    if (parseInt(10) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(10);
    }

    bot.channels.get(clopon).bulkDelete(deleteAmount, true)

    let Embedstorev = new Discord.RichEmbed()
        .setDescription("สถานะร้าน : ปิด ")
        .setColor("#FF0000")
        .addField("----------------------------------------------------------------------------------------------", "ห้ามพิมพ์คำสั่ง " + prefix + "buyrobux  |ถ้าพิมแล้ว โอนเงินแล้วจะไม่ส่ง Robux ให้โดยเด็ดขาด|")

    console.log(message.member.user.username + ' ใช้คำสัง ปิด');

    bot.channels.get(clopon).send(Embedstorev);
    bot.channels.get(clopon).send("ปิดแล้ว")
    bot.channels.get(clopon).send("@everyone ")


    message.guild.members.get(bot.user.id).setNickname("ปิดแล้ว")

    /*
    */

};

exports.conf = { aliases: [] };

module.exports.help = {
    name: "close"
};