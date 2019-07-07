import * as React from 'react';
var Input = function (_a) {
    var cell = _a.cell, isEditMode = _a.isEditMode, changeCell = _a.changeCell, locale = _a.locale;
    var onChange = function (e) {
        changeCell(cell._id, e.target.value, locale);
    };
    var value = cell && cell.value && cell.value[locale.key] || '';
    return isEditMode
        ? React.createElement("input", { type: "text", value: value, onChange: onChange })
        : value;
};
export default Input;
//# sourceMappingURL=cell-input.component.js.map