define(function(require, exports, module) {
    "use strict";
    // 获取相关依赖

    var util = require('util');
    var Base = require('base');

    var MainManager = Base.extend({
        // 每个模块带个模块ID
        module: 'mainManager'
    });

    return MainManager;
});
