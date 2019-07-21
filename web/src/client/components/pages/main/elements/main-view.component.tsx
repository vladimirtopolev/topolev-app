import * as React from 'react';

export default () => {
    return (
        <div className="main-view">
            <div className="main-view__container container">
                <div className="main-view__description">
                    <div className="main-view__title">Путь к успешному будущему</div>
                    <div className="main-view__slogan">Проектирование, дизайн и строительство стендов
                    </div>
                    <div className="main-view__action">
                        <button className="btn btn-primary-inverse main-view__btn">Заказать звонок
                        </button>
                    </div>
                </div>
                <div className="main-view__bg">
                    <img src={require('../../../../../../sources/client/stend.png')} alt=""/>
                </div>
            </div>
        </div>
    );
}
