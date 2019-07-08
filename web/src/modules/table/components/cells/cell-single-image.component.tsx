import * as React from 'react';
import {useState} from 'react';
import {CellProps} from './cell.component';
import Image from '../../../../common/elements/image.component';
import * as styles from './cell-single-image.component.styles.css';
import ModalImageEditor from './image-modal.component';

const SingleImage = ({cell, locale, isEditMode, changeCell}: CellProps) => {
    const [isOpen, toggle] = useState(false);

    const saveImage = (imageUrl:string) => {
        changeCell(cell._id, imageUrl)
    };

    return isEditMode
        ? (<div className={styles.SingleImage}>
            <Image src={cell.value}/>
            <div className={styles.SingleImage__toolbar}>
                <button onClick={() => toggle(!isOpen)}>Изменить изображение</button>
            </div>
            <ModalImageEditor isOpen={isOpen}
                              toggleModal={() => toggle(!isOpen)}
                              saveImage={saveImage}
                />
        </div>)
        : <Image src={cell.value}/>;
};

export default SingleImage;
