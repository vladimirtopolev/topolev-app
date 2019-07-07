var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { Component } from 'react';
import * as tinymce from 'tinymce';
import { Editor } from '@tinymce/tinymce-react';
// @ts-ignore
tinymce.baseURL = '/sources/tinymce';
var EditorComponent = /** @class */ (function (_super) {
    __extends(EditorComponent, _super);
    function EditorComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (e) {
            _this.props.onChange(e.target.getContent());
        };
        _this.state = {
            content: props.value
        };
        return _this;
    }
    EditorComponent.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Editor, { value: this.state.content, init: {
                    menubar: false,
                    branding: false,
                    statusbar: false,
                    removeformat: [
                        { selector: '*', remove: 'all' }
                    ]
                }, plugins: 'table textcolor colorpicker link anchor paste', toolbar: 'undo redo | removeformat | bold italic underline strikethrough | subscript superscript | ' +
                    'table  quicklink blockquote | ' +
                    ' forecolor backcolor forecolorpicker | link anchor |  ' +
                    'alignleft alignright aligncenter alignjustify | ' +
                    'bullist numlist | fullscreen preview', onChange: this.onChange })));
    };
    return EditorComponent;
}(Component));
export default EditorComponent;
//# sourceMappingURL=editor.component.js.map