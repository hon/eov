class Region{
    id: ''
    position: ''
      // left 左侧
      // right 右侧
      // top 顶部
      // bottom 底部
      // center 中部
      // {
      //   x, y
      // }
    size: {
      w: 0,
      h: 0
    }

    mountAble: true //是否支持子容器挂载
    childrenList: ''
    //
    constructor(layoutParms) {
    }
    resize() {}
    setPos() {}
    append(){}
    prepend() {}
    insert(){}  //插入容器到制定位置
    remove(){}   //将容器或widget从容器删除
    children(){} //  子容器列表
    getRegion() {} // 获取摸个容器
}