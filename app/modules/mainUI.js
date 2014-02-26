define(function (require, exports, module) {
    "use strict";
    // 获取相关依赖

    var util = require('util');
    var fastclick = require('fastclick');

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

        // 加载home页
        mainManager.loadModule('home');

        // 初始化fastclick
        fastclick.attach(document.body);
    };

    return mainUI;
});
