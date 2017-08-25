export {
  Connection
} from './connection'
export { Message } from './message'
import { Actor } from './../actor'



export default class Broker

// 每个broker是一个特殊的actor
extends Actor {
  static settings = {}

  static registeTransporter(name, clz) {

  }
  receive(id, msg) {}
}
