// 窗口体, 只是容器，ui由content组件实现
// content是不固定的
export default class Body {
    get size() {
        return {
            w: 100,
            h: 100
        }
    }
    set size(s) {
        this.size = s
    }
    // 添加内容
    addContent() {}

    // 隐藏
    hide() {}

    // 显示
    show() {}
