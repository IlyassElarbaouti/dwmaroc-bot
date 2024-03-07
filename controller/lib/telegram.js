var telegram = require('telegram-bot-api');

const MY_TOKEN = "7157319508:AAGlPozeqyyvgq8RXV6A5K5sPDAWopVBWOM"

var api = new telegram({
    token: MY_TOKEN,
});

async function sendMessage(body = {}) {
    console.log(body);

    // Provide default values for optional fields
    const {
        name = '',
        language = '',
        courseCondition = '',
        category = '',
        slug = '',
        image = '',
    } = body;

    // Build the caption dynamically based on the existence of each field
    const caption = [
        name && `<b>• Name:</b> ${name}`,
        language && `<b>• Language:</b> ${language}`,
        courseCondition && `<b>• Course Condition:</b> ${courseCondition}`,
        category && `<b>• Category:</b> ${category}`,
        slug && `<b>• Link:</b> <a href="https://learn.dwmaroc.com/courses/${slug}">${slug}</a>`,
        "<b>Share our channel to support us:</b>\n@dwmfreecourses",
    ].filter(Boolean).join('\n \n');

    await api.sendPhoto({
        //chat_id: -1001456455807,
        chat_id: -1002028737966,
        caption,
        photo: image,
        parse_mode: 'HTML', // Enable HTML formatting
    });

    return "success";
}

module.exports = { sendMessage };
