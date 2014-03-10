define(function (require, exports, module) {
    "use strict";
    // 获取相关依赖

    var util = require('util');
    var fastclick = require('fastclick');

    var mainUI = function () {
        /**
         * 系统配置参数.
         * @type {String}
         */
        var Config = JSON.parse(require("text!config.json"));
        console.log(Config);
        /**
         * 菜单模块
         * @type {Object}
         */
        var menuManager = require('managers/menuManager');
        if (typeof(menuManager.initialize) == 'function') {
            menuManager.initialize(Config.managerContainer[3].menuManager);
        }
        /**
         * 主界面模块
         * @type {Object}
         */
        var mainManager = require('managers/mainManager');
        if (typeof(mainManager.initialize) == 'function'){
            mainManager.initialize(Config.managerContainer[0].mainManager);
        }
        /**
         * 弹出窗口模块
         * @type {Object}
         */
        var popManager = require('managers/popManager');
        if (typeof(popManager.initialize) == 'function') {
            popManager.initialize(Config.managerContainer[1].popManager);
        }

        // 加载home页
        mainManager.loadModule('home');

        // 初始化fastclick
        fastclick.attach(document.body);
    };

    return mainUI;
});
