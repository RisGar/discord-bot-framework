import { GuildMember, User } from 'discord.js'
import BotClient from '../core/bot'

let client: BotClient
export const setClient = (_client: BotClient) => {
    client = _client
}

export const getPermLevel = (user: User | GuildMember): number => {
    let perm = 0
    for (let i = 5; i--; i >= 1) {
        if (client.config.perms[i].includes(user.id)) {
            perm = i
            break
        }
    }
    return perm
}
