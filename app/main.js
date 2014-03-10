/**
 * 配置requirejs
 */
requirejs.config({
    baseUrl: 'app/modules',
    paths: {
        // JS库，替代jquery（本处使用1.1.2 with full modules）（http://www.zeptojs.com/）
        'zepto': '../libs/zepto',
        // requirejs文本插件（http://www.requirejs.org/）
        'text': '../libs/text',
        // requirejs文本插件（http://www.requirejs.org/）
        'vm': '../libs/vm',
        // requirejs模板插件
        'tpl': '../libs/tpl',
        // 手势触摸组件（http://eightmedia.github.io/hammer.js/）
        'hammer': '../libs/hammer',
        // iScroll5页面滚动组件（http://cubiq.org/iscroll-5）
        'iscroll': '../libs/iscroll',
        // Bootstrap3样式组件
        'bootstrap': '../libs/bootstrap',
        // MVVM组件（http://knockoutjs.com/）
        'knockout': '../libs/knockout',
        // 继承组件（http://ejohn.org/blog/simple-javascript-inheritance/）
        'extend': '../libs/extend',
        // 快速点击组件
        'fastclick': '../libs/fastclick'
    },
    shim: {
        // zepto非AMD规范
        'zepto': {
            deps: [],
            exports: '$'
        },
        'extend' : {
            deps: [],
            exports: 'Class'
        }
    }
});

requirejs(['mainApp'], function (App) {
    return new App();
});