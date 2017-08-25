基于事件架构的插件架构
插件架构类型
1. jquery
  通过原型集成来扩展插件，插件解耦性很强，插件之间不需要通信
2. wordpress
  通过定义事件钩子进行扩展
3. leaflet
  通过javascript原型和方法覆盖实现扩展，插件之间解耦性强，不需要互相通信
4. eclipse
  通过事件和插槽(extention)进行扩展
5. chrome
  底层封装方法，让插件调用
6. atom
  6.1 封装方法让插件调用
  6.2 事件钩子

jimu的扩展方式
1. 事件驱动
2. 插槽：覆盖接口
3. 底层方法（全局变量）

每个插件为一个actor，actor包含了事件驱动里的所有方式
可以在jimu里实现“插槽”和“底层方法”的扩展方式


目录结构
src
  core - 核心模块
    base - 集成功能和底层接口，暴露运行环境的相关接口，可通过全局变量暴露
    eda-base - 事件驱动架构基础库
    plugin - 插件相关库
      loader - 插件加载
      runtime - 插件运行时管理
      install - 插件安装管理
  plugins - 插件列表

osgi(https://www.osgi.org/developer/architecture/)模型组成和本库模块的对应关系
Service: src/core/facade
LifeCycle: src/core/plugin/managment
Modules: src/core/plugin/loader
Security: 接口封装
Excution Enviroment: src/core/base
Bundles: src/plugins
