/**
 * Created by zhengyi on 14-3-10.
 */
define(function (require, exports, module) {
    "use strict";

    var base = require('./base');
    var util = require('util');

    /**
     * 所有Model的父类
     * @type {*|void}
     */
    var pageBase = base.extend({
        module: 'pageBase',

        extend: function(prop){
            if(prop.module == 'base'){
                throw Error('[Neusoft App] 未定义模块ID。');
            }
        },
        navigate:function(mvName){

        },

        initialize:function(){},
        //render:function(){},
        active:function(){},
        deactive:function(){},
        destroy:function(){},
        events:{}

    });

    return pageBase;
});
