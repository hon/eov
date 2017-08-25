/**
 * 传输媒介
 */

// 根据类型输出不同的传输媒介
// 如果类型为local， 则表示加载文件系统中的actor，此时的总线的角色为ioc，由总线直接调用相关模块
// 如果类型为http（或tcp等），则不加载文件，而通过相关的传输媒介进行通信
class TransporterFactory {
  constructor(type) {}
  connect() {}
  disConnect() {}
}

export default class Transporter {
  type: string = 'in-memory'  // 同一个进程内
  address: string   // ip地址，如果为空或in-memory则为客户端目录
  isConnected: boolean = false
  tf: TransporterFactory
  constructor(type = 'local') {
    this.tf = new TransporterFactory(type)
  }

  connect() {
    // connect via http or other protocal
    this.tf.connect() && (this.isConnected = true)
  }
  disConnect() {
    // disconnect via http or other protocal
    this.tf.disConnect() && (this.isConnected = false)
  }
}
