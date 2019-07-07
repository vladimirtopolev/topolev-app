import * as React from 'react';
import {useState, useEffect} from 'react';

interface ImageProps {
    src: string,
    alt?: string,
    styles?: object,
    className?: string,
    fallbackSrc?: any
}

export default ({
                    src,
                    alt = 'image',
                    styles = {},
                    className,
                    fallbackSrc = require('../../sources/img/noimagefound.jpg')
                }: ImageProps) => {

    const [imageSource, changeImageSource] = useState<any>(src);
    useEffect(() => changeImageSource(src), [src]);
    const onError = () => changeImageSource(fallbackSrc);

    return <img src={imageSource} alt={alt} onError={onError} style={styles} className={className}/>;
}
