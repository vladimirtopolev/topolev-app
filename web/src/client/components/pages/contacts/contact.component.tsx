import * as React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import Layout from '../../layout/layout.component';

import * as styles from './contact.component.styles.scss';
import {LanguageContext} from '../../../../common/helpers/with-language-context.render-props-component';
import {useContext} from 'react';
import getPropertyValueByName from '../../../../common/modules/properties/helpers/getPropertyValueByName';
import withAdminProperties from '../../../../common/helpers/with-admin-properties.hoc';

const Contacts = ({properties}: any) => {
    const languageContext = useContext(LanguageContext);

    const company = getPropertyValueByName(properties, 'company', languageContext.locale);
    const country = getPropertyValueByName(properties, 'country', languageContext.locale);
    const street = getPropertyValueByName(properties, 'street', languageContext.locale);
    const phone = getPropertyValueByName(properties, 'phone1');
    const email = getPropertyValueByName(properties, 'mail');

    const latitude = Number(getPropertyValueByName(properties, 'latitude'));
    const longitude = Number(getPropertyValueByName(properties, 'longitude'));


    return (
        <Layout>
            <div className={styles.Contact}>
                <div className={styles.Contact__title}>
                    Контакты
                </div>
                <div className={styles.Contact__description}>
                    Мы рады будем помочь Вам по любому
                    любому возникающему Вам опросу.
                </div>

                <div className={styles.Contact__content}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className={styles.AddressContainer}>
                                <div className={styles.Address}>
                                    <p className={styles.Address__title}>Адрес</p>
                                    <p className={styles.Address__companyName}>{company}</p>
                                    <p className={styles.Address__item}>{country}</p>
                                    <p className={styles.Address__item}>{street}</p>
                                </div>
                                <div className={styles.ContactItems}>
                                    <div className={styles.ContactItems__item}>
                                        <div className={styles.ContactItems__title}>Телефон:</div>
                                        <div className={styles.ContactItems__content}>{phone}</div>
                                    </div>
                                    <div className={styles.ContactItems__item}>
                                        <div className={styles.ContactItems__title}>Email:</div>
                                        <div className={styles.ContactItems__content}>{email}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles.AskQuestion}>
                                <p className={styles.AskQuestion__title}>Задайте вопрос</p>
                                <div className={styles.AskQuestion__form}>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <input type="email" className="form-control" placeholder="Имя"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="email" className="form-control" placeholder="Фамилия"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Компания"/>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <input type="email" className="form-control" placeholder="Телефон"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="email" className="form-control" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Текст сообщения" rows={4}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary mb-2">Отправить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.Map}>
                    <p className={styles.Map__title}>Схема проезда</p>
                    <YMaps>
                        <Map defaultState={{center: [latitude, longitude], zoom: 17}}
                             style={{width: '100%', height: '350px'}}>
                            <Placemark
                                geometry={[latitude, longitude]}
                                properties={{
                                    iconContent: company
                                }}
                                options={{
                                    preset: "islands#greenStretchyIcon",
                                    // Disabling the close balloon button.
                                    balloonCloseButton: false,
                                    // The balloon will open and close when the placemark icon is clicked.
                                    hideIconOnBalloonOpen: false
                                }}
                            />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </Layout>
    );
};

export default withAdminProperties(Contacts);
