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
        name && `•name: ${name}`,
        language && `•language: ${language}`,
        courseCondition && `•Course condition: ${courseCondition}`,
        category && `•category: ${category}`,
        slug && `•link: https://learn.dwmaroc.com/courses/${slug}`,
        "Share our channel to support us:\n@dwmfreecourses",
    ].filter(Boolean).join('\n');

    await api.sendPhoto({
        //chat_id: -1001456455807,
        chat_id: -1002028737966,
        caption,
        photo: image,
    });

    return "success";
}

module.exports = { sendMessage };
