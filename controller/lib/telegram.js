var telegram = require('telegram-bot-api');

const MY_TOKEN = "7157319508:AAGlPozeqyyvgq8RXV6A5K5sPDAWopVBWOM"

var api = new telegram({
    token: MY_TOKEN,
});
async function sendMessage(body){
    console.log(body)
  //  await api.sendPhoto({
       // chat_id:-1001456455807,
      //  caption: `•name: ${body.name}\n\•language: ${body.language}\n\•Course contidtion: ${body.courseCondition}\n\•category: ${body.category}\n\•link: https://learn.dwmaroc.com/courses/${body.slug}`,
      //   photo: body.image
//    })
    return "success"
}


module.exports = {sendMessage}
