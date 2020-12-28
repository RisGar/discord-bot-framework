import { Message } from 'discord.js'
import BotClient from '../core/bot'
import { getPermLevel } from '../utils/user'

export default class CommandHandler {
    constructor(private client: BotClient) {}

    public run = (message: Message) => {
        if (message.channel.type === 'dm') {
            message.channel.send('Sorry, this bot can only be used in a server.')
            return
        }

        const args = message.content.slice(this.client.config.prefix.length).trim().split(/ +/)
        const name = args.shift().toLowerCase()

        const command = this.client.commands.get(name)

        if (command.perms <= getPermLevel(message.author)) command.run(message, args)
    }
}
