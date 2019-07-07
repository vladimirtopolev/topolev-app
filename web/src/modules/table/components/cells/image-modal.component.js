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
import { useState, useEffect, Fragment } from 'react';
import { Modal } from 'reactstrap';
import 'react-image-crop/dist/ReactCrop.css';
import * as ReactCropModule from 'react-image-crop';
export default (function (_a) {
    var _b = _a.imageAspect, imageAspect = _b === void 0 ? 1 : _b, toggleModal = _a.toggleModal, saveImage = _a.saveImage, isOpen = _a.isOpen;
    var _c = useState({
        aspect: 1,
        width: 50,
        x: 0,
        y: 0
    }), crop = _c[0], changeCrop = _c[1];
    var _d = useState(null), src = _d[0], changeSrc = _d[1];
    var _e = useState(null), imageRef = _e[0], changeImageRef = _e[1];
    useEffect(function () {
        return changeCrop(__assign({}, crop, { aspect: imageAspect }));
    }, [imageAspect]);
    var changePreview = function (e) {
        var reader = new FileReader();
        reader.onload = function () {
            return changeSrc(reader.result);
        };
        var target = e.target;
        var fileList = target.files;
        reader.readAsDataURL(fileList[0]);
    };
    var changePreviewBtn = function (title) { return (React.createElement("div", null,
        React.createElement("input", { type: "file", onChange: changePreview }),
        title)); };
    var onImageLoaded = function (image) {
        changeImageRef(image);
    };
    var onCropChange = function (newCrop) {
        changeCrop(__assign({}, crop, newCrop));
    };
    var onSaveImage = function () {
        var canvas = document.createElement('canvas');
        canvas.width = crop.width;
        canvas.height = crop.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(imageRef, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);
        canvas.toBlob(function (blob) {
            blob.name = 'crop.img';
            blob.lastModifiedDate = new Date();
            saveImage([blob]);
        }, 'image/jpeg');
        toggleModal();
    };
    var ReactCrop = ReactCropModule.default;
    return (React.createElement(Modal, { isOpen: isOpen, toggle: toggleModal, onClosed: function () {
        } },
        React.createElement("div", { className: "ImageModal__title" }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"),
        React.createElement("div", { className: "ImageModal__content" },
            !src && (React.createElement("div", { className: "ImageModal__dropAreaWrapper" },
                React.createElement("div", { className: "ImageModal__dropArea" }, changePreviewBtn('Выбрать изображение')))),
            src && (React.createElement(ReactCrop, { src: src, crop: crop, onImageLoaded: onImageLoaded, onChange: onCropChange, keepSelection: true, imageStyle: { width: '100%', maxHeight: 'none' }, className: 'ImageModal__previewContainer' })),
            React.createElement("div", { className: 'ImageModal__buttons' },
                src && (React.createElement(Fragment, null,
                    changePreviewBtn('Изменить изображение'),
                    React.createElement("button", { className: 'button', onClick: onSaveImage }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))),
                React.createElement("button", { onClick: toggleModal, className: 'button' }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")))));
});
//# sourceMappingURL=image-modal.component.js.map