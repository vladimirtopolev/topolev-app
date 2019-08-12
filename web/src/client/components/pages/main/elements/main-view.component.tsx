import * as React from 'react';
import {useState} from 'react';
import cn from 'classnames';
import {Modal} from 'reactstrap';
import * as styles from './main-view.component.styles.css';
import ContactForm from '../../contacts/contact-form.component';
import {useContext} from 'react';
import {LanguageContext} from '../../../../../common/helpers/with-language-context.render-props-component';

export default () => {
    const languageContext = useContext(LanguageContext);
    const {dictionary} = languageContext;

    const [isOpen, changeModalStatus] = useState(false);
    const onToggleModal = () => {
        changeModalStatus(!isOpen);
    };

    return (
        <div className={styles.MainView}>
            <div className={cn(styles.MainView__container, 'container')}>
                <div className={styles.MainView__description}>
                    <div className={styles.MainView__title}>
                        {dictionary.mainTitle}
                    </div>
                    <div className={styles.MainView__slogan}>
                        {dictionary.mainDescription}
                    </div>
                    <div className={styles.MainView__action}>
                        <button className={styles.MainView__btn} onClick={onToggleModal}>
                            {dictionary.makeCall}
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
                    {dictionary.makeCall}
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
