import { Message } from 'discord.js'
import BotClient from '../core/bot'
import CommandHandler from '../handlers/CommandHandler'
import { EventInterface } from '../typings'

export default class Event implements EventInterface {
    constructor(private client: BotClient) {}

    public run = (message: Message) => {
        if (message.content.startsWith(this.client.config.prefix)) new CommandHandler(this.client).run(message)
    }
}
