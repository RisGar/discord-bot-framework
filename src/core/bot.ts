import { Client, Collection } from 'discord.js'
import * as config from '../config'
import dotenv from 'dotenv'
import { CommandInterface } from '../typings'
import { setClient } from '../utils/user'
import { readdirSync } from 'fs'
import path from 'path'

dotenv.config()

export default class BotClient extends Client {
    public readonly config = config
    public commands: Collection<string, CommandInterface> = new Collection()
    public aliases: Collection<string, string> = new Collection()

    private buildEvents = (path: string): void => {
        readdirSync(path).forEach(e => {
            const event = new (require(`${path}/${e}`).default)(this)
            this.on(e.slice(0, -3), (...args) => event.run(...args))
        })
    }

    private buildCommands = (path: string): void => {
        readdirSync(path)
            .filter(e => e.endsWith('.js'))
            .forEach(e => {
                const command = new (require(`${path}/${e}`).default)(this)
                if (command.aliases) command.aliases.forEach(a => this.aliases.set(a, e))
                this.commands.set(e.slice(0, -3), command)
            })
    }

    public start = (): void => {
        this.buildCommands(path.resolve(__dirname, '..', 'commands'))
        this.buildEvents(path.resolve(__dirname, '..', 'events'))

        setClient(this)

        this.login(process.env.TOKEN)
    }
}
