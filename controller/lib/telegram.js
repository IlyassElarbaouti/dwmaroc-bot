var telegram = require('telegram-bot-api');

const MY_TOKEN = "7157319508:AAGlPozeqyyvgq8RXV6A5K5sPDAWopVBWOM"

var api = new telegram({
    token: MY_TOKEN,
});
function sendMessage(body){
    api.sendPhoto({
        chat_id:-1002028737966,
        caption: `${body.name}\n\https://learn.dwmaroc.com/courses/${body.slug}`,
         photo: body.image
    })
}


module.exports = {sendMessage}