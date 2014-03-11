/**
 * Created by zhengyi on 14-3-10.
 */
define(function (require, exports, module) {

    var util = require('util');
    var ko = require('knockout');
    var MainBase = require('base/mainBase');
    var tpl = require('tpl!mainPageTwo')

    var Home = MainBase.extend({
        // 每个模块带个模块ID
        module: 'mainPageTwoViewModel',
        // 默认标题
        title: ko.observable('银联手机支付')
    });

    return Home;
});
