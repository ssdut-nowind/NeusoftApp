define(function(require, exports, module) {

    var Base = require('base');
    var util = require('util');
    var ko = require('knockout');
    var $ = require('zepto');
    var tpl = require('tpl!mainBase');

    var MainBase = Base.extend({
        // 每个模块带个模块ID
        module: 'mainBase',

        /**
         * 构造函数
         */
        init: function() {
            tpl = tpl.replace(/{module}/g, this.module);
            $('#mainPageContainer').append(tpl);
        },
        // 默认标题
        title: ko.observable('主窗口标题'),
        // 显示侧滑菜单
        slideMenu: function(){

        }
    });

    return MainBase;
});
