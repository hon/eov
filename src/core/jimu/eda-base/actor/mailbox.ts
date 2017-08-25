import Broker from './../broker'

enum MailListTypes {
  Pending = 'pending',
  Sending = 'sending',
}

enum ReceiveStatus {
  Success = 1,
  Fail = 0,
}

enum SendStatus {
  Success = 1,
  Fail = 0,
}

type MailEntity = {[key: string]: any}

// 向总线收发消息
export default class Mailbox {
  // 地址, actor的id
  // 总线的传输类型为local的时候，该值为目录地址
  // 其他情况为ip地址
  address: string

  // 消息列表
  // 待发送
  // 待处理 
  list: Map<MailListTypes, Array<MailEntity>>
  
  broker: Broker
  constructor(broker) {
    this.broker = broker
  }

  // 接受信息，放入待处理(总线接受的消息)或待发送（actor接受的消息）列表
  receive(msg, type: MailListTypes){
    if (!this.list.has(type)){
      this.list.set(type, [msg])
      return ReceiveStatus.Success
    } else {
      this.list.get(type).push(msg)
      return ReceiveStatus.Success
    }
  }

  /**
   * 将待发送信息发送到总线
   */
  send(msg) {
    if (this.broker.receive(msg.id, msg))
      return SendStatus.Success
  }
  

  //发送所有待发送邮件
  sendAll():void {
    this.list.get(MailListTypes.Pending).forEach(msg => {
      this.send(msg)
    }, this)
  }
}
