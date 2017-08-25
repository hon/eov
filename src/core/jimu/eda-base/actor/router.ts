// 根据消息路由到action
import MailBox from './mailbox'

class Router {
  constructor() {
    let mailBox = new MailBox
    this.mailList = mailBox.list
  }
  route() {
    this.mailList.forEach(msg => {
      actor[msg]()
    })
  }
}
