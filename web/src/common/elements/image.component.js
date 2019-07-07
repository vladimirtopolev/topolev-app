import * as React from 'react';
import { useState, useEffect } from 'react';
export default (function (_a) {
    var src = _a.src, _b = _a.alt, alt = _b === void 0 ? 'image' : _b, _c = _a.styles, styles = _c === void 0 ? {} : _c, className = _a.className, _d = _a.fallbackSrc, fallbackSrc = _d === void 0 ? require('../../sources/img/noimagefound.jpg') : _d;
    var _e = useState(src), imageSource = _e[0], changeImageSource = _e[1];
    useEffect(function () { return changeImageSource(src); }, [src]);
    var onError = function () { return changeImageSource(fallbackSrc); };
    return React.createElement("img", { src: imageSource, alt: alt, onError: onError, style: styles, className: className });
});
//# sourceMappingURL=image.component.js.map