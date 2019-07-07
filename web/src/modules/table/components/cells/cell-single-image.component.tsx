import * as React from 'react';
import {useState} from 'react';
import {CellProps} from './cell.component';
import Image from '../../../../common/elements/image.component';
import * as styles from './cell-single-image.component.styles.css';
import ModalImageEditor from './image-modal.component';
import * as api from '../../../../service/api';

const SingleImage = ({cell, locale, isEditMode, changeCell}: CellProps) => {
    const [isOpen, toggle] = useState(false);

    const onSaveImage = (targetFiles:Blob[]) => {
        const files = Array.from(targetFiles);
        const formData = new FormData();

        files.forEach((file, i) => {
            formData.append(Number(i).toString(), file)
        });

        api.uploadImage(formData)
            .then(res => {
                changeCell(cell._id, res.data[0].url)
            });
    };

    return isEditMode
        ? (<div className={styles.SingleImage}>
            <Image src={cell.value}/>
            <div className={styles.SingleImage__toolbar}>
                <button onClick={() => toggle(!isOpen)}>Изменить изображение</button>
            </div>
            <ModalImageEditor isOpen={isOpen}
                              toggleModal={() => toggle(!isOpen)}
                              saveImage={(t: any) => {console.log('SAVE', t)}}
                />
        </div>)
        : <Image src={cell.value}/>;
};

export default SingleImage;
