/*
class Region{
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
*/

export default interface IContainer {
  // 增
  append(node: Container)
  prepend(node: Container)
  insertBefore(query: string, node: Container): Container
  insertAfter()

  // 删
  remove(name: string): void

  //改
  replace()

  // 查
  children(): Array<Container>
  queryContainer(name: string): Array<Container> | Container

  len(): number
}

export abstract class Container implements IContainer {
  name: string   //用来查询，类似dom里的class
  id: string
  tree: Array<Container>

  append(node: Container) {
    this.tree.push(node)
  }

  prepend(node: Container) {
    this.tree.unshift(node)
  }

  insertBefore(query: string, node: Container): Container{
    let 
      nodes = this.queryContainer(query),
      tree = this.tree

    if (Array.isArray(nodes)) {
      nodes.forEach(() => {
        
      })
    } else {
      let nodeIndex = tree.indexOf(nodes)
      tree.splice((function(){return nodeIndex == 0 ? 0 : nodeIndex - 1})(), 0, nodes)
    }
    return this
  }

  insertAfter() {}

  remove(name: string): Container{
    return this

  }

  replace() {}

  children(): Array<Container> {
    return this.tree
  }


  queryContainer(query: string): Array<Container> | Container {
    
    let
      result = [],
      self = this

    this.tree.forEach((node, idx) => {
      if (name === node.name) {
        result.push(node)
      }

      let res = []
      while (node.name) {
        res.push(self.queryContainer(node.name))
      }
      result.push(res)
    })
    return result
  }

  len(): number {
    return this.tree.length
  }


}