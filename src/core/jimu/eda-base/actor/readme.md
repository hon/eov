actor: 插件架构中每个插件为一个actor，通过消息总线（message queue）和其他actor通信
mailbox: 收取信息
路由：发送到指定的action
action: 处理逻辑

actor 应该提供一种抽象，让下游实现
