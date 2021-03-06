"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMenuHotdog = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:12px;border-top:3px solid;border-bottom:3px solid;border-radius:3px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:20px;height:2px;background:currentColor;border-radius:4px;top:2px;left:-2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:12px;border-top:3px solid;border-bottom:3px solid;border-radius:3px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:20px;height:2px;background:currentColor;border-radius:4px;top:2px;left:-2px}\n"])));
exports.MenuHotdog = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMenuHotdog, tslib_1.__assign({}, props, { ref: ref, "icon-role": "menu-hotdog" }))));
});
var templateObject_1;
//# sourceMappingURL=MenuHotdog.js.map