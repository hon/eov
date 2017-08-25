class BaseRegion extends eov.core.JiMu.Actor{
    constructor() {
        let rootRegion = new Region({
            id: 'root'
        }

        let leftRegion = new Region({
            id: 'left',
            position: 'left'
        })

        let rightRegion = new Region({
            id: 'right',
            position: 'right'
        })

        let topRegion = new Region({
            id: 'top',
            position: 'top'
        })

        let bottomRegion = new Region({
            id: 'bottom',
            position: 'bottom'
        })

        let mainRegion = new Region({
            id: 'main',
            position: 'center'
        })

        // this.on("base-region.append-to-left-region", leftRegion.append(params))

        rootRegion
            .append([leftRegion, rightRegion, topRegion, bottomRegion, mainRegion])

        eov.core.ui.render(rootRegion, '#root')
    }
}
// 注册插件
eov.core.PluginCenter.register("base-region", BaseRegion)

