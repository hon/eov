import MailBox from './mailbox'
import MessageMode from './message-mode'

enum ActorRole {
  Node = 'node',
  Broker = 'broker',
}

export default class Actor implements MessageMode {
  // actor的id, 即mailbox的地址
  // 比如 './plugin/someactor'
  // 此时的总线的角色为ioc容器，且由改容器负责直接调用相关actor， 这样便可以进行通信
  id: string

  // 当前actor的事件列表
  eventList: Map<string, Function>

  // 将待发送的信息放到mailbox
  mailbox: MailBox

  role: ActorRole


  addAction(data, fn) {}
  callAction(data) {}
  subscribe(data, fn) {}
  unsubscribe(data) {}

  // 触发事件至邮箱, 由邮箱发送给事件总线，然后再到消费者，由目标actor倾听，处理
  publish(data) {}
}