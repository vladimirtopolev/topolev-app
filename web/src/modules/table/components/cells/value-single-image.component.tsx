import * as React from 'react';
import {useState} from 'react';
import * as _ from 'lodash';
import {ValueRenderProps} from './value.component';
import Image from '../../../../common/elements/image.component';
import * as styles from './value-single-image.component.styles.css';
import ModalImageEditor from './helpers/image-modal.component';
import ModalPreviewImage from './helpers/image-preview-modal.component';
import {getValue, getValueAsArray} from './helpers/utilities';
import {DEFAULT_LOCALE} from '../../../../config/locales';


interface ImageGalleryValueProps extends ValueRenderProps {
    isSingleImage?: boolean
}

const SingleImageValue = ({value, locale, isEditMode, changeValue, notLocalized, isSingleImage}: ImageGalleryValueProps) => {
    const [isOpenModalImageEditor, toggleModalImageEditor] = useState(false);
    const [isOpenModalPreviewImage, toggleModalPreviewImage] = useState(false);
    const [srcImagePreview, changeSrcImagePreview] = useState('');

    const saveImage = (imageUrl: string) => {
        changeValue(imageUrl);
    };

    const localizedValue = getValue(value, locale);

    const localeValue = !notLocalized ? locale : undefined;

    const renderImageGalleryInPreviewMode = () => {
        return (
            <div>
                {(value || [])
                    .map((image: any, i: number) => {
                        return <Image src={getValue(image, localeValue)} key={i}/>;
                    })}
            </div>
        );
    };

    const renderImageGalleryInEditMode = () => {
        return (
            <div className={styles.ImageGallery}>
                {(value || [])
                    .map((image: any, i: number) => {
                        const imageSrc = getValue(image, localeValue);
                        return (
                            <div className={styles.Item}>
                                <div className={styles.Item__image}
                                     style={{backgroundImage: `url(${imageSrc})`}}>
                                </div>
                                <div className={styles.Item__toolbar}>
                                    <button className={styles.Item__btn}
                                            onClick={() => {
                                                changeSrcImagePreview(imageSrc);
                                                toggleModalPreviewImage(true);
                                            }}>
                                        Просмотр
                                    </button>
                                    <button className={styles.Item__btn}
                                            onClick={() => {
                                                //saveImage('');
                                            }}>
                                        Удалить
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                {!isSingleImage && (
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
        );
    };


    return !isEditMode || (notLocalized && DEFAULT_LOCALE.key !== locale.key)
        ? renderImageGalleryInPreviewMode()
        : renderImageGalleryInEditMode();


    /*
    (
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
    );*/
};

export default SingleImageValue;
