const Canvas = require("canvas");

const Discord = require('discord.js');

const applyText = (canvas, text) => {
    const ctx = canvas.getContext("2d");
    let fontSize = 70;

    do {
        ctx.font = `${(fontSize -= 10)}px sans-serif`;
    } while (ctx.measureText(text).width > canvas.width - 300);
    return ctx.font;
};

module.exports.run = async (bot, message, args, db, prefix, rat, minimum, clopon) => {
    let mini = minimum
    message.delete()
    let msg = await message.channel.send("กำลังคำนวน....")
    console.log(minimum)
    console.log(args[0])
    console.log(rat)
    if (args[0] < mini) {
        msg.edit(`ขั้นต่ำ ${minimum} บาท`);
        return;
    }

    ratX = args[0] * rat
    msg.edit("คำนวนเสร็จ คำนวนรูป.....")
    const canvas = Canvas.createCanvas(1920, 1440);
    const ctx = canvas.getContext("2d");
    const background = await Canvas.loadImage(
      "https://cdn.glitch.com/e57b3160-5df4-4560-99fc-2f632f3489fd%2F20200520_075131.png?v=1589955915947"
    );
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#74037b";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.font = "150px Serif"; //applyText(canvas, `${args[0]}!-{${args[0]}/3}`);
    ctx.fillStyle = "#FFC300";
    ctx.fillText(args[0], 925, 532);

    ctx.font = "150px Serif"; //applyText(canvas, `${args[0]}!-{${args[0]}/3}`);
    ctx.fillStyle = "#FFC300";
    ctx.fillText(ratX, 887, 308);

    ctx.font = "250px Serif";
    ctx.fillStyle = "#FFC300";
    ctx.fillText(rat, 672, 924);
    const attachment = new Discord.Attachment(canvas.toBuffer(), "Rale.png");
    msg.edit("คำนวนรูปเสร็จ กำลังส่ง.....")
    message.channel.send("คุณ  จะได้ Robux ดังนี้", attachment);
    msg.delete()
    
}

exports.conf = { aliases: [] };

module.exports.help = {
    name: "robux",
    aliases: ["r"]
}; 