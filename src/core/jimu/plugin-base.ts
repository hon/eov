import Actor from './eda-base'

// 自定义broker, 自定义传输媒介
class SomeTransporter extends Transporter {

}

// 注册通信媒介
Broker.registTransporter('sometransporter', Transporter)

// 这只默认通信媒介
Broker.settings {
  transporter: {
    name: 'sometransporter',
    ...config
  }
}

// 每个插件为一个actor
class PluginBase extends Actor {

}


/*
class Broker {

    static register(name, cls) {
        this.container[name] = cls
    }

    static action(command, params) {
        if ('string' === typeof command) {
            let 
                commandAry = command.split('.'),
                cls = commandAry[0],    
                methodName = commandAry[1],
                inst = new this.container[cls],
                methods = inst.methods()

            if (methods.indexOf(methodName) != -1) 
                inst[methodName].call(this, params)
            else
                throw new Error('error.');

        }
    }
}

class Node {
    api1() {}
    api2() {}

    // private
    api3() {}

    // public methods
    methods() {
        return [api1, api2]
    }
}

Broker.register("Node", Node)
// ... register more

Broker.action("Node.api1")
Broker.action("Node.api2")
Broker.action("Node.api3") //error
*/
