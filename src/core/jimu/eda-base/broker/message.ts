import {
  ClientList
} from './connection'

import Queue from './queue'

const clients = new ClientList
const queue = new Queue

export class Message {
  receive(clientId, msg) {
    clients.has(clientId) && queue.push(msg)
  }
  // 发送到客户端邮箱中
  send(clientId, msg) {
    // clients.has(clientId) && clients.getClient(clientId).receive(msg)
  }
}
