import { ClientEvents, Message } from 'discord.js'

export interface CommandInterface {
    aliases?: string[]
    perms: number
    run(message: Message, args: string[]): void
}

export interface EventInterface {
    run(any): any // TODO add definitions
}
