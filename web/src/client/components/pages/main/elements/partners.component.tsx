import * as React from 'react';

export default () => {
    return (
        <section className="partners">
            <div className="container">
                <h1 className="partners__title title">Партнеры</h1>
                <div className="partners__container row">
                    <div className="partner col-md-4">
                        <a href="" className="partner__link">
                            <img src={require('../../../../../../sources/client/expoforum.png')}
                                 className="partner__img"/>
                        </a>
                    </div>
                    <div className="partner col-md-4">
                        <a href="" className="partner__link">
                            <img src={require('../../../../../../sources/client/sts-design.png')}
                                 className="partner__img"/>
                        </a>
                    </div>
                    <div className="partner col-md-4">
                        <a href="" className="partner__link">
                            <img src={require('../../../../../../sources/client/infoforum.png')}
                                 className="partner__img"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
