// 通信模型
export default interface MessageMode {
  /**
   * 行为，被动模式，req/resp模式
   * 1. 第三方插件可以直接调用这些行为，让actor实现某些功能
   * 2. 第三方插件可以覆盖这些行为，扩展这个actor
   * 3. 行为是一种被动的调用方式，是一种push的方式，而且调用者的目的性很强
   * 4. rpc
   */

  /**
   * 添加action, 提供对外服务的接口
   * @param data - 接受的数据
   */
  addAction(data: Map<string, any>, fn: Function): void

  // 调用action, 调用其他服务接口
  callAction(data: Map<string, any>): void

  /**
   * 事件，主动模式， pub/push模式
   * 根据外部信息决定自己的功能, 强调发布(emit)信息, 订阅者根据相关信息执行动作(on), 也可以取消订阅(off)
   */

  // 根据名称, 执行动作(只要有事件触发就调用)
  subscribe(data: Map<string, any>, fn): void

  // 根据名称, 执行动作(只调用一次)
  // once(data, fn)

  // 取消订阅事件
  unsubscribe(data: Map<string, any>): void

  /**
   * 触发事件, 发送相关数据。由目标actor的event执行（底层有可能也是action的调用，或私有方法的调用）
   * @param data - 发布事件 {
   *    channel,
   *    topic,
   *    data,
   * }
   */
  publish(data): void
}
