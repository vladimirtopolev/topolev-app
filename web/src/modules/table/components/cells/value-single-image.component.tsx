import * as React from 'react';
import {useState} from 'react';
import cn from 'classnames';
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

    const valueLocale = !notLocalized ? locale : undefined;
    const images = getValueAsArray(value, valueLocale);

    const saveImage = (imageUrl: string) => {
        changeValue(images.concat(imageUrl), valueLocale);
    };

    const deleteImage = (imageIndex:number) => {
        changeValue(images.filter((image:any, i:number) => i!== imageIndex), valueLocale);
    };

    const renderImageGalleryInPreviewMode = () => {
        return (
            <div>
                {images.map((image: any, i: number) => {
                    return <Image src={image} key={i}/>;
                })}
            </div>
        );
    };

    const renderImageGalleryInEditMode = () => {
        return (
            <div className={styles.ImageGallery}>
                {images.map((image: any, i: number) => {
                    return (
                        <div className={styles.Item}>
                            <div className={styles.Item__image}
                                 style={{backgroundImage: `url(${image})`}}>
                            </div>
                            <div className={styles.Item__toolbar}>
                                <button className={styles.Item__btn}
                                        onClick={() => {
                                            changeSrcImagePreview(image);
                                            toggleModalPreviewImage(true);
                                        }}>
                                    Просмотр
                                </button>
                                <button className={styles.Item__btn}
                                        onClick={() => {
                                            deleteImage(i);
                                        }}>
                                    Удалить
                                </button>
                            </div>
                        </div>
                    );
                })}
                {(!isSingleImage || (isSingleImage && images.length === 0)) && (
                    <button
                        className={cn(styles.SingleImage__uploadBtn, {
                            [styles.SingleImage__uploadBtn_section]: images.length !== 0
                        })}
                        onClick={() => toggleModalImageEditor(!isOpenModalImageEditor)}>
                        Загрузить изображение
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
};

export default SingleImageValue;
