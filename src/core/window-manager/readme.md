https://en.wikipedia.org/wiki/Window_manager
界面管理器
1. 界面由shui提供（UI类）
2. region, ui插槽
    2.1 可以插入子region或widget
    2.2 始终有个根region
3. widget 实现具体功能
    3.1 可在代码里添加region位置，供其他插件插入  wgt.on('wgtid.addRegion', regionInfo => {//to add logic})
4. layout布局管理


