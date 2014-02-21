define(function (require, exports, module) {
    "use strict";
    // 获取相关依赖

    var util = require('util');

    var mainUI = function () {
        // 菜单模块
        var MenuManager = require('menuManager');
        var menuManager = new MenuManager();
        if (typeof(menuManager.initialize) == 'function')menuManager.initialize();
        // 主界面模块
        var MainManager = require('mainManager');
        var mainManager = new MainManager();
        if (typeof(mainManager.initialize) == 'function')mainManager.initialize();
        // 弹出窗口模块
        var PopManager = require('popManager');
        var popManager = new PopManager();
        if (typeof(popManager.initialize) == 'function')popManager.initialize();
    };

    return mainUI;
});
