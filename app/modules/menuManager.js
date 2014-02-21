define(function (require, exports, module) {
    "use strict";
    // 获取相关依赖

    var util = require('util');

    var menuManager = {
        // 每个模块带个模块ID
        module: 'menuManager',
        // 每个模块可能带一个ViewModel
        viewModel: {
            menuItems: ko.observableArray([{

            }])
        },
        /**
         * 每个模块初始化函数
         */
        initialize: function () {
            // 加载菜单模板
            var tpl = require('tpl!menu');
            $('#menuContainer').html(tpl);

        },
        /**
         *
         */
        active:function(){

        },
        destroy:function(){

        }
    };

    return menuManager;
});
