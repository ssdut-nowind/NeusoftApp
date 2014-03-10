define(function (require, exports, module) {
    "use strict";
    // 获取相关依赖

    var util = require('util');
    var managerBase = require('base/managerBase');
    var $ = require('zepto');

    var MainManager = managerBase.extend({
        // 每个模块带个模块ID
        module: 'mainManager',

        /**
         * 每个模块初始化函数
         */
        initialize: function (data) {
            console.log(data);
        },

        // 管理的所有窗口
        windows: [],

        // 加载窗口
        loadModule: function (moduleId, data) {
            var modules = $('#mainPageContainer').find('.main-page-border');
            modules.hide();
            // TODO:是否考虑添加界面隐藏事件？

            if (this.windows[moduleId]) {
                // 模块已经存在，则激活
                // 显示模块UI
                var moduleView = $('#mainPageContainer').find('.main-page-border[data-module="' + moduleId + '"]');
                moduleView.show();
                // 调用激活函数
                var module = this.windows[moduleId];
                if (module.active) module.active();
            } else {
                // 模块不存在，则加载（每个模块一个目录，默认加载目录内main.js）
                var that = this;
                require([moduleId + '/main'], function (ModuleClass) {
                    var module = new ModuleClass();
                    if (module.module != moduleId) {
                        throw Error('[Neusoft App] 模块ID与加载ID不一致。');
                    }
                    // 添加到窗口列表
                    that.windows[moduleId] = module;
                    // 调用初始化函数
                    if (module.initialize) module.initialize();
                    // 显示模块UI
                    var moduleView = $('#mainPageContainer').find('.main-page-header[data-module="' + moduleId + '"]');
                    moduleView.show();
                    // 调用激活函数
                    if (module.active) module.active();
                });
            }
        }
    });

    // 只要一个MainManager实例
    return new MainManager();
});
