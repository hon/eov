import EOVUI from './../../ui'
import Head from './head'
import Body from './body'


let 
    winBody = new Body,
    winHead = new Head


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

    // 添加头部，头部相关的操作，可以由头部本身操作
    // 如：this.head.addTitle(); this.head.addAction();
    get head() {
        return winHead
    }
    set head(head) {
        this.head = head
    }

    // 添加窗口体，窗口体本身的操作由窗口体本身操作
    // 如： this.body.addContent();
    get body() {
        return winBody
    }
    set body(body) {
        this.body = body
    }

    get dimension() {
        return {
            w: 100,
            h: 100,
            x: 0,
            y: 0
        }
    }
    set dimension(value) {
        this.dimension = value
    }

    close() {
        this.el.display = 'none'
    }
    
    max() {
        this.dimension.w = '100%'
        this.dimension.h = '100%'
    }

    min() {
        this.collapos()
        this.dimension.h = 20
    }


    // 加入group
    joinToGroup() {
        
    }

    collapos() {
        this.body.hide()
    }
    expand() {
        this.body.show()
    }

}