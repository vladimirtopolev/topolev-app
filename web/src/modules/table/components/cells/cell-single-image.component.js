import * as React from 'react';
import { useState } from 'react';
import Image from '../../../../common/elements/image.component';
import * as styles from './cell-single-image.component.styles.css';
import ModalImageEditor from './image-modal.component';
import * as api from '../../../../service/api';
var SingleImage = function (_a) {
    var cell = _a.cell, locale = _a.locale, isEditMode = _a.isEditMode, changeCell = _a.changeCell;
    var _b = useState(false), isOpen = _b[0], toggle = _b[1];
    var onSaveImage = function (targetFiles) {
        var files = Array.from(targetFiles);
        var formData = new FormData();
        files.forEach(function (file, i) {
            formData.append(Number(i).toString(), file);
        });
        api.uploadImage(formData)
            .then(function (res) {
            changeCell(cell._id, res.data[0].url);
        });
    };
    return isEditMode
        ? (React.createElement("div", { className: styles.SingleImage },
            React.createElement(Image, { src: cell.value }),
            React.createElement("div", { className: styles.SingleImage__toolbar },
                React.createElement("button", { onClick: function () { return toggle(!isOpen); } }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435")),
            React.createElement(ModalImageEditor, { isOpen: isOpen, toggleModal: function () { return toggle(!isOpen); }, saveImage: function (t) { console.log('SAVE', t); } })))
        : React.createElement(Image, { src: cell.value });
};
export default SingleImage;
//# sourceMappingURL=cell-single-image.component.js.map