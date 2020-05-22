const Discord = require('discord.js');
module.exports.run = async (bot, message, args, db, prefix, rat, minimum, clopon, RoleAdmin,guildOwner) => {
    message.delete();
    if (!message.member.roles.find("name", RoleAdmin)) { 
        message.channel.send('ไม่มียศ');
        return;
    }
    
    let deleteAmount;

    if (parseInt(10) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(10);
    }

    client.channels.get(clopon).bulkDelete(deleteAmount, true)
    let Embedstorev = new Discord.RichEmbed()
        .setDescription("สถานะร้าน : เปิด ")
        .setColor("#17FF00")
        .addField("------------------------------------------------------------------", "พิมพ์คำสั่ง " + prefix + "buyrobux  ในห้อง <#" + The_man_who_wrote_the_command + "> นะ| เพื่อทำการซื้อ | ซื้อเลยรอไรหละ!! ")

    console.log(message.member.user.username + ' ใช้คำสัง เปิด');

    client.channels.get(clopon).send(Embedstorev);
    client.channels.get(clopon).send("เปิดแล้ว ")
    client.channels.get(clopon).send("@everyone ")
    message.guild.members.get(client.user.id).setNickname("เปิดแล้ว")


};

exports.conf = { aliases: [] };

module.exports.help = {
    name: "open",
    aliases: ["o"]
};