define(function (require, exports, module) {

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
        init: function () {
            tpl = tpl.replace(/{module}/g, this.module);
            $('#mainPageContainer').append(tpl);

            var moduleView = $('#mainPageContainer').find('.main-page-border[data-module="' + this.module + '"]');
            /**
             * 显示侧滑菜单
             */
            var that = this;
            moduleView.find('.main-header-left').bind('click', function () {
                if ($('#mainPageContainer').position().left == 0) {
                    $('#mainPageContainer').addClass('main-page-slide-show');
                    setTimeout(function () {
                        $('#mainPageContainer').removeClass('main-page-slide-show');
                        $('#mainPageContainer').css('left', '80%');
                    }, 600);
                } else {
                    $('#mainPageContainer').addClass('main-page-slide-hide');
                    setTimeout(function () {
                        $('#mainPageContainer').removeClass('main-page-slide-hide');
                        $('#mainPageContainer').css('left', 0);
                    }, 600);
                }
            });
        },
        // 默认标题
        title: ko.observable('主窗口标题'),
        // 显示侧滑菜单
        slideMenu: function () {

        }
    });

    return MainBase;
});
