import BotClient from '../core/bot'
import { EventInterface } from '../typings'

export default class Event implements EventInterface {
    constructor(private client: BotClient) {}

    public run = (error: Error) => {
        console.error(error)
    }
}
