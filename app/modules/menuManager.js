define(function (require, exports, module) {
    "use strict";
    // 获取相关依赖

    var util = require('util');
    var $ = require('zepto');
    var ko = require('knockout');
    var Base = require('base');

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
        this.module = ko.observable(module);
        this.showModule = function () {
            console.log('show module: %s', this.module());
        }
    };

    var menuManager = Base.extend({
        // 每个模块带个模块ID
        module: 'menuManager',

        /**
         * 每个模块初始化函数
         */
        initialize: function () {
            // 加载菜单模板
            var tpl = require('tpl!menu');
            $('#menuContainer').html(tpl);

            // 绑定knockout
            ko.applyBindings(this, $('#menuContainer')[0]);

            // 定义菜单
            this.menuItems.push(new MenuItem('fa-home', '#3895E2', '回到首页', 'home'));
            this.menuItems.push(new MenuItem('fa-user', '#4D8732', '个人中心', 'center'));
            this.menuItems.push(new MenuItem('fa-gear', '#F37F58', '设置', 'setting'));
            this.menuItems.push(new MenuItem('fa-info', '#7186E3', '关于', 'about'));

            this.activeItem('home');
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

    return menuManager;
});
