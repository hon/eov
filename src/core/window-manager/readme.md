https://en.wikipedia.org/wiki/Window_manager
界面管理器
1. 界面由shui提供（UI类）, 但window-manager本身不依赖于shui
2. icontainer, ui插槽
    2.1 可以插入子container或window
    2.2 始终有个根container
3. window 实现窗口相关逻辑
    3.1 可在代码里添加region位置，供其他插件插入  wgt.on('wgtid.addRegion', regionInfo => {//to add logic})
4. layout布局管理


**目录**
- examples        例子
- layout          布局管理
- ui              ui实现
- window          窗口管理
- icontainer.ts   容器接口
- index.ts        入口


