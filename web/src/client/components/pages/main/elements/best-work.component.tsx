import * as React from 'react';

export default () => {
    return (
        <section className="bestworks">
            <div className="container">
                <h1 className="bestworks__title title">Лушие работы</h1>
                <div className="bestworks__works row">
                    <div className="bestworks__work col-md-4 col-sm-6">
                        <div className="work">
                            <img className="work__img" src={require('../../../../../../sources/client/001.jpg')}/>
                            <p className="work__description-container">
                                <span className="work__description">Стенд Ferroli</span>
                            </p>
                        </div>
                    </div>
                    <div className="bestworks__work col-md-4 col-sm-6">
                        <div className="work">
                            <img className="work__img" src={require('../../../../../../sources/client/002.jpg')}/>
                            <p className="work__description-container">
                                <span className="work__description">Стенд Grundfos</span>
                            </p>
                        </div>
                    </div>
                    <div className="bestworks__work col-md-4 col-sm-6">
                        <div className="work">
                            <img className="work__img" src={require('../../../../../../sources/client/003.jpg')}/>
                            <p className="work__description-container">
                                <span className="work__description">Стенд Grundfos</span>
                            </p>
                        </div>
                    </div>
                    <div className="bestworks__work col-md-4 col-sm-6">
                        <div className="work">
                            <img className="work__img" src={require('../../../../../../sources/client/004.jpg')}/>
                            <p className="work__description-container">
                                <span className="work__description">Стенд Беларусбанк</span>
                            </p>
                        </div>
                    </div>
                    <div className="bestworks__work col-md-4 col-sm-6">
                        <div className="work">
                            <img className="work__img" src={require('../../../../../../sources/client/005.jpg')}/>
                            <p className="work__description-container">
                                <span className="work__description">Стенд Saer</span>
                            </p>
                        </div>
                    </div>
                    <div className="bestworks__work col-md-4 col-sm-6">
                        <div className="work">
                            <img className="work__img" src={require('../../../../../../sources/client/006.jpg')}/>
                            <p className="work__description-container">
                                <span className="work__description">Стенд Begerof</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
