
const fs = require('fs');
module.exports.run = async (bot, message, args, db, prefix, rat, minimum, clopon) => {
    let fix = prefix
    console.log(fix)
    message.channel.send(`
    [คำสั้ง]
    ${fix}SetPrefix : ตั้ง Prefix
    ${fix}help : ตามชื่อ
    ${fix}open : ตามชื่อ
    ${fix}close : ตามชื่อ
    ${fix}Robux : คำนวน Robux
    ${fix}setminimum : ตั้งขั้นต่ำ
    ${fix}Setrat : ตั้งเรท
    ${fix}Setopenclose : ตั้งช้อง Open / Close 
    ${fix}Ping : เช็กPing
    ${fix}the_man_who_wrote_the_command : ตั้งที่เขียนคำสั้ง
    `)
};

exports.conf = { aliases: [] };

module.exports.help = {
    name: "help",
    aliases: ["h"]
};