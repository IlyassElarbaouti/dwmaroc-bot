const { sendMessage } = require("./lib/telegram");

async function handler(req,method){
const {body} = req;
 await sendMessage(body)
}

module.exports = {handler}