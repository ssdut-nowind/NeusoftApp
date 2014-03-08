define(function (require, exports, module) {
    "use strict";
    // 获取相关依赖

    var util = require('util');
    var $ = require('zepto');
    var ko = require('knockout');
    var Base = require('base');
    var mainManager = require('mainManager');
    // MenuManager对象实例
    var that = null;

    /**
     * 定义菜单项
     * @param icon
     * @param title
     * @param module
     */
    var MenuItem = function (icon, color, title, module) {
        this.icon = ko.observable(icon);
        this.color = ko.observable(color);
        this.title = ko.observable(title);
        this.moduleId = ko.observable(module);
    };

    var MenuManager = Base.extend({
        // 每个模块带个模块ID
        module: 'menuManager',

        /**
         * 每个模块初始化函数
         */
        initialize: function (data) {
            console.log(data);
            if(!data.viewContainer[0])return;
            // 加载菜单模板
            var self = this;
            requirejs(['tpl!'+data.viewContainer[0].view,'vm!'+data.viewContainer[0].viewModel],function(tpl,vm){
                $('#menuContainer').html(tpl);
                // 绑定knockout
                ko.applyBindings(vm, $('#menuContainer')[0]);
                vm.initialize();
            });
        },

        showModule: function (data) {
            console.log('show module: %s', data.moduleId());
            that.activeItem(data.moduleId());
            mainManager.loadModule(data.moduleId());

            // 切换回主界面
            // 清理动画残留
            $('#mainPageContainer').css('left', 290);
            $('#mainPageContainer').removeClass('main-page-slide-out');
            $('#mainPageContainer').removeClass('main-page-slide-in');
            // 加载动画
            $('#mainPageContainer').addClass('main-page-slide-in');
        },

        /**
         * 每个模块激活函数
         */
        active: function () {

        },

        /**
         * 每个模块销毁函数
         */
        destroy: function () {

        },

        // 绑定的菜单项
        menuItems: ko.observableArray([]),

        activeItem: ko.observable('')
    });

    // 只要一个MenuManager实例
    that = new MenuManager();
    return that;
});
