/**
 * 模板文件加载模块，例如：
 * var template = require("tpl!test");
 * 将加载app/templates/text.tpl文件
 */
define(function (require, exports, module) {
    var pack,
        config = module.config();

    pack = {
        load: function (name, req, load, config) {
            req(["text!templates/" + name + '.tpl'], function (value) {
                load(value);
            });
        }
    }
    return pack;
});
