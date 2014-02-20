define(function (require, exports, module) {
    "use strict";
    var $ = require('zepto');

    var util = {
        // 服务器地址
        serverURL: '',


        /**
         * 获取时间戳
         * @param type 0:毫秒/1:年月日/2:年月日时分秒/3:年月日时分秒毫秒
         * @returns {string}
         */
        getTimestamp: function (type) {
            switch (type) {
                case 3:
                    return this.formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss.S');
                    break;
                case 2:
                    return this.formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss');
                    break;
                case 1:
                    return this.formatDate(new Date(), 'yyyy-MM-dd');
                    break;
                case 0:
                default:
                    return (new Date()).getTime() + '';
            }
        },

        /**
         * 格式化日期
         * @param date 日期对象
         * @param fmt 格式化字符串
         * @returns {string}
         */
        formatDate: function (date, fmt) {
            var o = {
                "M+": date.getMonth() + 1,
                "d+": date.getDate(),
                "h+": date.getHours(),
                "m+": date.getMinutes(),
                "s+": date.getSeconds(),
                "S": date.getMilliseconds()
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }

    };
    return util;
});
