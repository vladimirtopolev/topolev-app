var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import InputCell from './cell-input.component';
import SingleImageCell from './cell-single-image.component';
import TextareaCell from './cell-textarea.component';
var Cell = function (props) {
    var cell = props.cell;
    switch (cell.header.type) {
        case 'INPUT':
            return React.createElement(InputCell, __assign({}, props));
        case 'IMAGE':
            return React.createElement(SingleImageCell, __assign({}, props));
        case 'TEXTAREA':
            return React.createElement(TextareaCell, __assign({}, props));
        default:
            throw Error("Invalid header type " + cell.header.type);
    }
};
export default Cell;
//# sourceMappingURL=cell.component.js.map