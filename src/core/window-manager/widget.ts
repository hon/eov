import EOVUI from '../ui'

// 在widget中组装ui
class Widget extends EOVUI{
    id: ''
    title: {
      labe: '',  //直接标题显示
      icon: ''
    }
    regionId: ''  //嵌入在哪个region里
    isCollapos: ''
    size: {}
    close() {}
    max() {}
    min() {}
    on() {}
    off() {}
    action() {}

    // 加入到region
    appendTo() {}

}

// 标题栏
class TitleBar{}

// 主体
class WidgetBody{}

// 对widget本身进行操作
class MenuBar{}

// 对点击对象进行操作
class ContexMenu{}
