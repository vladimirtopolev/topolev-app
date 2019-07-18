import * as  React from 'react';
import {useState, useEffect, ChangeEvent, Fragment} from 'react';
import {Modal} from 'reactstrap';
import 'react-image-crop/dist/ReactCrop.css';
import * as ReactCropModule from 'react-image-crop';
import {Crop} from 'react-image-crop';
import * as api from '../../../../../service/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as styles from './image-modal.component.styles.css';
import '../../../../../styles.css';

interface ImageModalProps {
    isOpen: boolean,
    imageAspect?: any,
    toggleModal: () => void,
    saveImage: (image: string) => void
}

export default ({imageAspect = 1, toggleModal, saveImage, isOpen}: ImageModalProps) => {
    const [crop, changeCrop] = useState<Crop>({
        aspect: 1,
        width: 50,
        x: 0,
        y: 0
    });
    const [pixelCrop, changePixelCrop] = useState(null);
    const [src, changeSrc] = useState<any>(null);
    const [imageRef, changeImageRef] = useState<HTMLImageElement>(null);
    const [isUploadingImage, changeUploadingImageStatus] = useState<boolean>(false);

    useEffect(() =>
        changeCrop({...crop, aspect: imageAspect}), [imageAspect]);

    const changePreview = (e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        reader.onload = () => {
            return changeSrc(reader.result);
        };

        const target = e.target as HTMLInputElement;
        const fileList = target.files as FileList;
        reader.readAsDataURL(fileList[0]);
    };

    const changePreviewBtn = (title: string) => (
        <div className="inputFileBtn">
            <input type="file" onChange={changePreview}/>
            {title}
        </div>
    );

    const onToggleModal = () => {
        if (isOpen === true) {
            changeSrc(null);
            changeImageRef(null);
            changeUploadingImageStatus(false);
        }
        toggleModal();
    };

    const onImageLoaded = (image: HTMLImageElement) => {
        changeImageRef(image);
    };

    const onCropChange = (newCrop: Crop, pixelCrops?: any) => {
        console.log('Crop', newCrop);
        changeCrop({...crop, ...newCrop});
    };

    const onCropComplete = (newCrop: Crop, pixelCrops?: any) => {
        console.log(pixelCrops);
        changePixelCrop(pixelCrops);
    };

    const saveImageInCloudinary = (imageFile: any) => {
        const formData = new FormData();
        formData.append('0', imageFile);

        api.uploadImage(formData)
            .then(res => {
                saveImage(res.data[0].url);
                changeUploadingImageStatus(true);
                onToggleModal();
            })
            .catch(e => {
                changeUploadingImageStatus(true);
            });
    };

    const onSaveImage = () => {
        changeUploadingImageStatus(true);
        const canvas = document.createElement('canvas');

        const image = document.createElement('img');
        image.src = src;

        const {height, width} = image;
        canvas.width = pixelCrop.width * width / 100;
        canvas.height = pixelCrop.height * height / 100;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(
            image,
            pixelCrop.x * width / 100,
            pixelCrop.y * height / 100,
            pixelCrop.width * width / 100,
            pixelCrop.height * height / 100,
            0,
            0,
            pixelCrop.width * width / 100,
            pixelCrop.height * height / 100
        );

        canvas.toBlob((blob: any) => {
            blob.name = 'crop.img';
            blob.lastModifiedDate = new Date();
            saveImageInCloudinary(blob);
        }, 'image/jpeg');
    };

    const ReactCrop = (ReactCropModule as any).default;
    return (
        <Modal isOpen={isOpen}
               size="lg"
               toggle={toggleModal}
               onClosed={() => {
               }}
               className={styles.ImageModal}
        >
            <div className={styles.ImageModal__title}>
                Редактирование изображения
            </div>
            <div className={styles.ImageModal__content}>
                {!src && (
                    <div className={styles.ImageModal__dropAreaWrapper}>
                        <div className={styles.ImageModal__dropArea}>
                            {changePreviewBtn('Выбрать изображение')}
                        </div>
                    </div>
                )}
                {src && (
                    <ReactCrop
                        src={src}
                        crop={crop}
                        onImageLoaded={onImageLoaded}
                        onChange={onCropChange}
                        onComplete={onCropComplete}
                        keepSelection={true}
                        imageStyle={{width: '100%', maxHeight: 'none'}}
                        className={styles.ImageModal__previewContainer}
                    />
                )}
                <div className={styles.ImageModal__buttons}>
                    {src && (
                        <Fragment>
                            {changePreviewBtn('Изменить изображение')}
                            <button className="button" onClick={onSaveImage}>Сохранить</button>
                        </Fragment>
                    )}
                    <button onClick={onToggleModal} className="button">Отменить</button>
                </div>
            </div>
        </Modal>);
}
