import BotClient from '../core/bot'
import { EventInterface } from '../typings'

export default class Event implements EventInterface {
    constructor(private client: BotClient) {}

    public run = () => {
        console.log(`${this.client.user.tag} is ready.`)
    }
}
