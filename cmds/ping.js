
const discord = require("discord.js");

module.exports.run = async (bot, message, args, db, prefix, rat, minimum, clopon) => {

    let totalSeconds = client.uptime / 1000
    let days = Math.floor(totalSeconds / 86400)
    let hours = Math.floor(totalSeconds / 3600)
    totalSeconds % 3600
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = Number.parseInt(totalSeconds % 60)

    let dDay = `${days} วัน`
    let dHour = `${hours} ชั่วโมง`
    let dMinute = `${minutes} นาที`
    let dSecond = `${seconds} วินาที`
    if (days == 0) dDay == "  "
    else if (days > 1) dDay += "   "
    else dDay == "   "
    if (hours == 0) dHour += "   "
    else dHour += "  "
    if (minutes == 0) dMinute == "  "
    else if (minutes > 1) dMinute += "   "
    else minutes += "  "
    if (seconds == 0) dSecond = 0
    else if (seconds > 1) dSecond += "   "

    let embed = new discord.RichEmbed()
        .setAuthor(`ความเร็วในการทำงานของบอท`, `${message.author.displayAvatarURL}`)
        .setColor(`ff0000`)
        .setFooter(`${prefix}help เพื่อดูคำสั่ง | olobux shop Rewrite🤩`)
        .setDescription("> < **`API LATENCY`** :" + ` ** ${client.ping}** ` + " **`MS`** " + "\n> **`Uptime :`**" + ` ${dDay + dHour + dMinute + dSecond}`)
        .setTimestamp()

    message.channel.send(embed)
}

exports.conf = { aliases: [] };
exports.help = {
    name: 'ping'
}; 