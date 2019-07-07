import * as  React from 'react';
import {useState, useEffect, ChangeEvent, Fragment} from 'react';
import {Modal} from 'reactstrap';
import 'react-image-crop/dist/ReactCrop.css';
import * as ReactCropModule from 'react-image-crop';
import {Crop} from 'react-image-crop';

interface ImageModalProps {
    isOpen: boolean,
    imageAspect?: any,
    toggleModal: () => void,
    saveImage: (image: Blob[]) => void
}

export default ({imageAspect = 1, toggleModal, saveImage, isOpen}: ImageModalProps) => {
    const [crop, changeCrop] = useState<Crop>({
        aspect: 1,
        width: 50,
        x: 0,
        y: 0
    });
    const [src, changeSrc] = useState<any>(null);
    const [imageRef, changeImageRef] = useState<HTMLImageElement>(null);

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
        <div>
            <input type="file" onChange={changePreview}/>
            {title}
        </div>
    );

    const onImageLoaded = (image: HTMLImageElement) => {
        changeImageRef(image);
    };

    const onCropChange = (newCrop: Crop) => {
        changeCrop({...crop, ...newCrop});
    };

    const onSaveImage = () => {
        const canvas = document.createElement('canvas');
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            imageRef,
            crop.x,
            crop.y,
            crop.width,
            crop.height,
            0,
            0,
            crop.width,
            crop.height
        );

        canvas.toBlob((blob: any) => {
            blob.name = 'crop.img';
            blob.lastModifiedDate = new Date();
            saveImage([blob]);
        }, 'image/jpeg');

        toggleModal();
    };

    const ReactCrop = (ReactCropModule as any).default;
    return (
        <Modal isOpen={isOpen} toggle={toggleModal} onClosed={() => {
        }}>
            <div className="ImageModal__title">
                Редактирование изображения
            </div>
            <div className="ImageModal__content">
                {!src && (
                    <div className="ImageModal__dropAreaWrapper">
                        <div className="ImageModal__dropArea">
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
                        keepSelection={true}
                        imageStyle={{width: '100%', maxHeight: 'none'}}
                        className={'ImageModal__previewContainer'}
                    />
                )}
                <div className={'ImageModal__buttons'}>
                    {src && (
                        <Fragment>
                            {changePreviewBtn('Изменить изображение')}
                            <button className={'button'} onClick={onSaveImage}>Сохранить</button>
                        </Fragment>
                    )}
                    <button onClick={toggleModal} className={'button'}>Отменить</button>
                </div>
            </div>
        </Modal>);
}
