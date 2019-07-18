import * as React from 'react';
import {useState} from 'react';
import {ValueRenderProps} from './value.component';
import Image from '../../../../common/elements/image.component';
import * as styles from './value-single-image.component.styles.css';
import ModalImageEditor from './helpers/image-modal.component';
import ModalPreviewImage from './helpers/image-preview-modal.component';
import {getValue} from './helpers/utilities';

const SingleImageValue = ({value, locale, isEditMode, changeValue}: ValueRenderProps) => {
    const [isOpenModalImageEditor, toggleModalImageEditor] = useState(false);
    const [isOpenModalPreviewImage, toggleModalPreviewImage] = useState(false);
    const [srcImagePreview, changeSrcImagePreview] = useState('');

    const saveImage = (imageUrl: string) => {
        changeValue(imageUrl);
    };

    const localizedValue = getValue(value, locale);

    return isEditMode
        ? (
            <div className={styles.ImageGallery}>
                {localizedValue && (
                    <div className={styles.Item}>
                        <div className={styles.Item__image}
                             style={{backgroundImage: `url(${localizedValue})`}}>
                        </div>
                        <div className={styles.Item__toolbar}>
                            <button className={styles.Item__btn}
                                    onClick={() => {
                                        changeSrcImagePreview(localizedValue);
                                        toggleModalPreviewImage(true);
                                    }}>
                                Просмотр
                            </button>
                            <button className={styles.Item__btn}
                                    onClick={() => {
                                        saveImage('');
                                    }}>
                                Удалить
                            </button>
                        </div>
                    </div>
                )}
                {!localizedValue && (
                    <button
                        className={styles.SingleImage__uploadBtn}
                        onClick={() => toggleModalImageEditor(!isOpenModalImageEditor)}>
                        Изменить изображение
                    </button>
                )}
                <ModalImageEditor isOpen={isOpenModalImageEditor}
                                  toggleModal={() => toggleModalImageEditor(!isOpenModalImageEditor)}
                                  saveImage={saveImage}
                />
                <ModalPreviewImage isOpen={isOpenModalPreviewImage}
                                   toggleModal={() => toggleModalPreviewImage(!isOpenModalPreviewImage)}
                                   srcImage={srcImagePreview}
                />
            </div>
        )
        : <Image src={localizedValue}/>;
};

export default SingleImageValue;
