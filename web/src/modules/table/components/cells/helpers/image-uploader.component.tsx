import * as React from 'react';
import {Fragment} from 'react';
import * as styles from './image-modal.component.styles.css';
import b64ImageToBlob from '../../../../../utilities/b64ImageToBlob';

interface ImageUploaderProps {
    src: any,
    ChangePreviewButtonRenderer: any,
    toggleModal: () => void,
    saveImageInCloudinary: (imageFile: any) => void,
}

export default ({
                    src,
                    ChangePreviewButtonRenderer,
                    toggleModal,
                    saveImageInCloudinary
                }: ImageUploaderProps) => {
    const onSaveImage = () => {
        b64ImageToBlob(src)
            .then(blob => saveImageInCloudinary(blob));
    };

    return (
        <Fragment>
            {src && <img src={src} alt='Image'/>}
            <div className={styles.ImageModal__buttons}>
                {src && (
                    <Fragment>
                        <ChangePreviewButtonRenderer/>
                        <button className="button" onClick={onSaveImage}>Сохранить</button>
                    </Fragment>
                )}
                <button onClick={toggleModal} className="button">Отменить</button>
            </div>
        </Fragment>
    );
}
