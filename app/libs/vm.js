/**
 * Created by zhengyi on 14-3-9.
 */
define(function (require, exports, module) {
    var pack,
        config = module.config();

    pack = {
        load: function (name, req, load, config) {
            req(["./viewModels/" + name ], function (value) {
                load(value);
            });
        }
    }
    return pack;
});
