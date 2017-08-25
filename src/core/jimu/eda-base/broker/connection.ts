// connection
import Transporter from './transporter'

export class ClientList {
  list: Map<string, string>
  constructor() {
    this.list = new Map
  }
  set(clientId) {
    this.list.set(clientId, 'none')
  }
  delete(clientId) {
    this.list.delete(clientId)
  }
  getClient(clientId) {
    
  }
  has(key: string) {}
}

const ts = new Transporter

export class Connection {
  list: ClientList
  // 链接
  connect(clientId) {
    ts.isConnected && this.list.set(clientId)
  }
  // 断线
  disConnect(clientId) {
    ts.isConnected || this.list.delete(clientId)
  }
}
