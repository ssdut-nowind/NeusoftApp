define(function(require, exports, module) {
    "use strict";
    // 获取相关依赖

    var util = require('util');
    var Base = require('base');

    var PopManager = Base.extend({
        // 每个模块带个模块ID
        module: 'popManager'
    });

    // 只要一个PopManager实例
    return new PopManager();
});
