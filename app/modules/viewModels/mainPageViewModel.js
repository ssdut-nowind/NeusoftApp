define(function (require, exports, module) {

    var util = require('util');
    var ko = require('knockout');
    var MainBase = require('base/mainBase');
    var tpl = require('tpl!mainPage');

    var Home = MainBase.extend({
        // 每个模块带个模块ID
        module: 'mainPageViewModel',
        // 默认标题
        title: ko.observable('银联手机支付'),
        getBodyTemplate: function () {
            return tpl;
        },
        payClick:function(){
            util.mainManager.loadModule('mainPageTwoViewModel');
        }
    });

    return Home;
});
