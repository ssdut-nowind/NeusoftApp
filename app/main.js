/**
 * 配置requirejs
 */
var lib = '../libs/';

requirejs.config({
    baseUrl: 'app/modules',
    shim: {
        // zepto非AMD规范
        'zepto': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore','zepto'],
            exports: 'Backbone'
        },
        'extend' : {
            exports: 'Class'
        }
    },
    paths: {
        // JS库，替代jquery（本处使用1.1.2 with full modules）（http://www.zeptojs.com/）
        'zepto': lib+'zepto',
        //"jquery": lib + "jquery",
        'backbone': lib + 'backbone',
        'underscore': lib + 'underscore',
        // requirejs文本插件（http://www.requirejs.org/）
        'text': lib+'text',
        // requirejs文本插件（http://www.requirejs.org/）
        'vm': lib+'vm',
        // requirejs模板插件
        'tpl': lib+'tpl',
        // 手势触摸组件（http://eightmedia.github.io/hammer.js/）
        'hammer': lib+'hammer',
        // Bootstrap3样式组件
        'bootstrap': lib+'bootstrap',
        // MVVM组件（http://knockoutjs.com/）
        'knockout': lib+'knockout',
        // 继承组件（http://ejohn.org/blog/simple-javascript-inheritance/）
        'extend': lib+'extend',
        // 快速点击组件
        'fastclick': lib+'fastclick'
    }
});

requirejs(['mainApp'], function (App) {
    return new App();
});