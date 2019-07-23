import * as React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import Layout from '../../layout/layout.component';

import * as styles from './contact.component.styles.scss';

export default () => {
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
                                    <p className={styles.Address__companyName}>ООО "Экспосервис"</p>
                                    <p className={styles.Address__item}>220021, Беларусь, Минск,</p>
                                    <p className={styles.Address__item}>ул. Челюскинцев, 15-1,</p>
                                </div>
                                <div className={styles.ContactItems}>
                                    <div className={styles.ContactItems__item}>
                                        <div className={styles.ContactItems__title}>Телефон:</div>
                                        <div className={styles.ContactItems__content}>+375 29 899 52 70</div>
                                    </div>
                                    <div className={styles.ContactItems__item}>
                                        <div className={styles.ContactItems__title}>Email:</div>
                                        <div className={styles.ContactItems__content}>i.topolev.vladimir@gmail.com</div>
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
                        <Map defaultState={{center: [53.849535, 27.471748], zoom: 17}}
                             style={{width: '100%', height: '350px'}}>
                            <Placemark
                                geometry={[53.849535, 27.471748]}
                                properties={{
                                    balloonContent: '&lt;img src="http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M" /&gt;',
                                    iconContent: "Экспофорум"
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
}
