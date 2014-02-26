define(function (require, exports, module) {

    var util = require('util');
    var ko = require('knockout');
    var MainBase = require('mainBase');

    var Home = MainBase.extend({
        // 每个模块带个模块ID
        module: 'home',
        // 默认标题
        title: ko.observable('主界面'),

        /**
         * 模块初始化
         * @param data
         */
        initialize: function (data) {

        }
    });

    return Home;
});
