define(function(require, exports, module) {
    "use strict";
    // 获取相关依赖

    var util = require('util');

    var menuManager = {
        // 每个模块带个模块ID
        module: 'menuManager',

        initialize: function(){
            alert('menuManager initialize');
        }
    };

    return menuManager;
});
