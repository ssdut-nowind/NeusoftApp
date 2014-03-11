define(function (require, exports, module) {
    "use strict";
    // 获取相关依赖
    var $ = require('zepto');
    var ko = require('knockout');
    var managerBase = require('base/managerBase');

    // MenuManager对象实例
    var that = null;

    var MenuManager = managerBase.extend({
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
                vm.active();
            });
        }
    });

    // 只要一个MenuManager实例
    that = new MenuManager();
    return that;
});
