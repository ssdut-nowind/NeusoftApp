define(function (require, exports, module) {

    var Base = require('base');
    var util = require('util');
    var ko = require('knockout');
    var $ = require('zepto');
    var baseTpl = require('tpl!mainBase');

    var MainBase = Base.extend({
        // 每个模块带个模块ID
        module: 'mainBase',
        iScrolls: [],

        /**
         * 构造函数
         */
        init: function () {
            // 加载基础模板
            var parentTpl = baseTpl.replace(/{module}/g, this.module);
            // 如果定义了自定义模板函数，则调用该函数对模板进行自定义处理
            if(typeof(this.customPageTemplate) == 'function'){
                parentTpl = this.customPageTemplate(parentTpl);
            }

            $('#mainPageContainer').append(parentTpl);
            var moduleView = $('#mainPageContainer').find('.main-page-border[data-module="' + this.module + '"]');

            // 加载页面Body模板
            if(typeof(this.getBodyTemplate) == 'function'){
                var bodyTpl = this.getBodyTemplate();
                var bodyView = moduleView.find('.main-page-body');
                bodyView.html(bodyTpl);
            }
            // 绑定ViewModel
            ko.applyBindings(this, moduleView[0]);

            // 加载iScroll
        },

        // 默认标题
        title: ko.observable('主窗口标题'),

        /**
         * 显示侧滑菜单
         */
        showSlideMenu: function () {
            if ($('#mainPageContainer').position().left == 0) {
                // 清理动画残留
                $('#mainPageContainer').css('left', 0);
                $('#mainPageContainer').removeClass('main-page-slide-out');
                $('#mainPageContainer').removeClass('main-page-slide-in');
                // 加载动画
                $('#mainPageContainer').addClass('main-page-slide-out');
            } else {
                // 清理动画残留
                $('#mainPageContainer').css('left', 290);
                $('#mainPageContainer').removeClass('main-page-slide-out');
                $('#mainPageContainer').removeClass('main-page-slide-in');
                // 加载动画
                $('#mainPageContainer').addClass('main-page-slide-in');
            }
        },

        /**
         * 显示个人中心
         */
        showCenter: function () {

        }
    });

    return MainBase;
});
