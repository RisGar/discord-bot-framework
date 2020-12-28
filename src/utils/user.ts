import { GuildMember, User } from 'discord.js'
import BotClient from '../core/bot'

let client: BotClient
export const setClient = (_client: BotClient) => {
    client = _client
}

export const getPermLevel = (user: User | GuildMember): number => {
    if (client.config.owners.includes(user.id)) return 5
    else return 0
}
