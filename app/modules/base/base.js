define(function (require, exports, module) {
    "use strict";

    var Class = require('extend');
    var _ = require('underscore');
    var Backbone = require('backbone');

    /**
     * 所有Model的父类
     * @type {*|void}
     */
    var Base = Class.extend({
        module: 'base',

        extend: function(prop){
            if(prop.module == 'base'){
                throw Error('[Neusoft App] 未定义模块ID。');
            }
        }
    });

    _.extend(Base,Backbone.Events);


    return Base;
});
