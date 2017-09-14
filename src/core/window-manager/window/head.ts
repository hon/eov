// 窗口头部, ui由head组件实现
export default class Head {
    get size() {
        return {
            w: 100,
            h: 20
        }
    }
    set size(s) {
        this.size = s
    }
    // 添加标题
    addTitle() {}

    // 添加动作按钮
    addAction() {}
}