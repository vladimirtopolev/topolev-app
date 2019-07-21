import * as React from 'react';

export default () => {
    return (
        <section className="make-order">
            <div className="make-order__container container">
                <div className="make-order__wrapper">
                    <div className="row ">
                        <div className="col-xl-7 col-lg-6">
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="make-order__form-container">
                                <div className="make-order__title">Оставить заявку</div>
                                <div className="make-order__description">Мы свяжемся с вами в ближайшее
                                    время
                                </div>
                                <div className="make-order__form">
                                    <div className="make-order__input-container">
                                        <input className="make-order__input" type="text"
                                               placeholder="Имя"/>
                                    </div>
                                    <div className="make-order__input-container">
                                        <input className="make-order__input" type="text"
                                               placeholder="Email"/>
                                    </div>
                                    <div className="make-order__input-container">
                                        <input className="make-order__input" type="text"
                                               placeholder="Телефон"/>
                                    </div>
                                    <button className="make-order__btn btn btn-primary">Отправить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
