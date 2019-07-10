import * as  React from 'react';
import cn from 'classnames';
import {Modal} from 'reactstrap';
import 'react-image-crop/dist/ReactCrop.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../styles.css';

interface ImagePreviewModalProps {
    isOpen: boolean,
    toggleModal: () => void,
    deleteRow: () => void
}

export default ({toggleModal, isOpen, deleteRow}: ImagePreviewModalProps) => {
    return (
        <Modal isOpen={isOpen}
               size="md"
               toggle={toggleModal}
               className="Modal"
        >
            <div className={cn('Modal__title', 'Modal__title_warning')}>
                Внимание!
            </div>
            <div className="Modal__content">
                Вы уверены, что хотите удалить эту запись?
                <div className="Modal__buttons">
                    <button
                        onClick={deleteRow}
                        className={cn('button', 'button_warning')}>
                        Удалить
                    </button>
                    <button
                        onClick={toggleModal}
                        className={cn('button')}>
                        Отменить
                    </button>
                </div>
            </div>
        </Modal>);
}
