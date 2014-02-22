define(function (require, exports, module) {
    "use strict";
    // 获取相关依赖

    var util = require('util');

    var mainUI = function () {
        // 菜单模块
        var menuManager = require('menuManager');
        if (typeof(menuManager.initialize) == 'function') menuManager.initialize();
        // 主界面模块
        var mainManager = require('mainManager');
        if (typeof(mainManager.initialize) == 'function') mainManager.initialize();
        // 弹出窗口模块
        var popManager = require('popManager');
        if (typeof(popManager.initialize) == 'function') popManager.initialize();

        mainManager.loadModule('home');
    };

    return mainUI;
});
