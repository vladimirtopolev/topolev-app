import * as React from 'react';
import {useState} from 'react';
import cn from 'classnames';
import {Modal} from 'reactstrap';
import * as styles from './main-view.component.styles.css';
import ContactForm from '../../contacts/contact-form.component';

export default () => {
    const [isOpen, changeModalStatus] = useState(false);
    const onToggleModal = () => {
        changeModalStatus(!isOpen);
    };

    return (
        <div className={styles.MainView}>
            <div className={cn(styles.MainView__container, 'container')}>
                <div className={styles.MainView__description}>
                    <div className={styles.MainView__title}>
                        Путь к успешному будущему
                    </div>
                    <div className={styles.MainView__slogan}>
                        Проектирование, дизайн и строительство стендов
                    </div>
                    <div className={styles.MainView__action}>
                        <button className={styles.MainView__btn} onClick={onToggleModal}>
                            Заказать звонок
                        </button>
                    </div>
                </div>
                <div className={styles.MainView__bg}>
                    <img className={styles.MainView__imgBg}
                         src={require('../../../../../../sources/client/stend.png')} alt=""/>
                </div>
            </div>
            <Modal isOpen={isOpen} toggle={onToggleModal} className={styles.Modal}>
                <div className={styles.Modal__title}>
                    Заказать звонок
                    <button className={styles.Modal__closeBtn} onClick={onToggleModal}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className={styles.Modal__content}>
                    <ContactForm callback={onToggleModal}/>
                </div>
            </Modal>
        </div>
    );
}
