const { sendMessage } = require("./lib/telegram");

async function handler(req,method){
const {body} = req;
if(body.image){
    await sendMessage(body)
}
}

module.exports = {handler}
