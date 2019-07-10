import * as React from 'react';
import {useState} from 'react';
import {CellProps} from './cell.component';
import Image from '../../../../common/elements/image.component';
import * as styles from './cell-single-image.component.styles.css';
import ModalImageEditor from './image-modal.component';
import ModalPreviewImage from './image-preview-modal.component';

const SingleImage = ({cell, locale, isEditMode, changeCell}: CellProps) => {
    const [isOpenModalImageEditor, toggleModalImageEditor] = useState(false);
    const [isOpenModalPreviewImage, toggleModalPreviewImage] = useState(false);
    const [srcImagePreview, changeSrcImagePreview] = useState('');

    const saveImage = (imageUrl: string) => {
        changeCell(cell._id, imageUrl);
    };

    return isEditMode
        ? (
            <div className={styles.ImageGallery}>
                {cell.value && (
                    <div className={styles.Item}>
                        <div className={styles.Item__image}
                             style={{backgroundImage: `url(${cell.value})`}}>
                        </div>
                        <div className={styles.Item__toolbar}>
                            <button className={styles.Item__btn}
                                    onClick={() => {
                                        changeSrcImagePreview(cell.value);
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
                {!cell.value && (
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
        : <Image src={cell.value}/>;
};

export default SingleImage;
