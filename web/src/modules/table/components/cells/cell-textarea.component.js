import * as React from 'react';
import Editor from '../../../../common/elements/editor.component';
var TeaxtareaCell = function (_a) {
    var cell = _a.cell, isEditMode = _a.isEditMode, changeCell = _a.changeCell, locale = _a.locale;
    return isEditMode
        ? React.createElement(Editor, { value: cell.value[locale.key], onChange: (function (value) { return changeCell(cell._id, value); }) })
        : React.createElement("div", null, cell.value[locale.key]);
};
export default TeaxtareaCell;
//# sourceMappingURL=cell-textarea.component.js.map