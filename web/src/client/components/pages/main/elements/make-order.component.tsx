import * as React from 'react';
import ContactForm from '../../contacts/contact-form.component';
import {useContext} from 'react';
import {LanguageContext} from '../../../../../common/helpers/with-language-context.render-props-component';

export default () => {
    const languageContext = useContext(LanguageContext);
    const {dictionary} = languageContext;

    return (
        <section className="make-order">
            <div className="make-order__container container">
                <div className="make-order__wrapper">
                    <div className="row ">
                        <div className="col-xl-7 col-lg-6">
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="make-order__form-container">
                                <div className="make-order__title">{dictionary['makeCall']}</div>
                                <div className="make-order__description">{dictionary['makeCallDescription']}
                                </div>
                                <div className="make-order__form">
                                    <ContactForm hideMessageField={true}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
