import EOVUI from '../ui'

// impl IContainer
// 在widget中组装ui
/**
 * 1. 窗口可添加标题，icon
 * 2. 窗口可添加和移除操作按钮（最大化，最小化，关闭，菜单等）
 */
class Window extends EOVUI{
    id: ''
    title: {
      labe: '',  //直接标题显示
      icon: ''
    }
    regionId: ''  //嵌入在哪个region里

    size: {}
    close() {}
    
    max() {}
    min() {}


    // 加入group
    joinToGroup() {
        
    }

    collapos() {}
    expand() {}
    

    // 加入到Container
    appendTo() {}

    // 添加功能, 默认添加在右侧
    addActionBtn({
        title: '',
        icon: '',
        action: function(){}
    }) {}

    // 添加标题头
    addTitleBar() {

    }

}

// 标题栏
class TitleBar{}

// 主体
class WindowBody{}

// 对widget本身进行操作
class MenuBar{}

// 对点击对象进行操作
class ContexMenu{}
