define(function (require, exports, module) {

    var $ = require('zepto');
    var util = require('util');
    var ko = require('knockout');
    var MainBase = require('mainBase');
    var tpl = require('tpl!setting');

    var Setting = MainBase.extend({
        // 每个模块带个模块ID
        module: 'setting',
        // 默认标题
        title: ko.observable('设置'),

        /**
         * 模块初始化
         * @param data
         */
        initialize: function (data) {

        },

        /**
         * 自定义父模板接口
         * @param parentTpl
         * @returns {string}
         */
        customPageTemplate: function (parentTpl) {
            var dom = $(parentTpl);
            dom.find('.main-header-right').remove();
            return dom[0].outerHTML;
        },

        getBodyTemplate: function () {
            return tpl;
        }
    });

    return Setting;
});
