import { CommandInterface } from '../typings'

export default class Command implements CommandInterface {
    public readonly perms = 4
    public run = async (message, args) => {
        message.channel.send('You are an admin.')
    }
}
