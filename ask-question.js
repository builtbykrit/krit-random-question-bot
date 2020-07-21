const _ = require('lodash')
const config = require('./config')
const Botkit = require('botkit')

let controller = Botkit.slackbot({})
let bot = controller.spawn()

bot.configureIncomingWebhook({ url: config('WEBHOOK_URL') })
const questions = require("./questions.json")
const question = questions[Math.floor(Math.random() * questions.length)];
msg = {
 text:question
}
bot.sendWebhook(msg);
