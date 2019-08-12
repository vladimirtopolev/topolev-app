import * as React from 'react';
import Slider from 'react-slick';
import {Property} from '../../../../../modules/properties/schema/models';
import getPropertyValueByName from '../../../../../common/modules/properties/helpers/getPropertyValueByName';
import {useContext} from 'react';
import {LanguageContext} from '../../../../../common/helpers/with-language-context.render-props-component';
interface AboutUsProps {
    properties?: Property[]
}
var settings = {
    dots: true,
    dotsClass: 'portfolio__slider-dots slick-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};

export default ({properties}:AboutUsProps) => {
    const languageContext = useContext(LanguageContext);
    const {dictionary} = languageContext;

    const aboutUs = getPropertyValueByName(properties, 'aboutUs', languageContext.locale);
    const yearOnMarker = getPropertyValueByName(properties, 'yearWork');

    return (
        <section className="about-us">
            <div className="about-us__container container">
                <div className="row">
                    <div className="col-md-4 about-us__statistic-container">
                        <div className="about-us__statistic">
                            <h1>{yearOnMarker} <span>{dictionary['year']}</span></h1>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="about-us__title title">{dictionary['aboutCompany']}</div>
                        <div className="about-us__description" dangerouslySetInnerHTML={{__html: aboutUs}}>
                        </div>
                    </div>
                </div>
                {/*
                <section className="exhibitions">
                    <div className="exhibitions__container container">
                        <div className="exhibitions__title">Расписание выставок</div>
                        <div className="exhibitions__slider">
                            <Slider {...settings}>
                                <div className="exhibition">
                                    <div className="exhibition__logo">
                                        <img src={require('../../../../../../sources/client/exh01.png')}/>
                                    </div>
                                    <div className="exhibition__title">
                                        Название выставки
                                    </div>
                                </div>
                                <div className="exhibition">
                                    <div className="exhibition__logo">
                                        <img src={require('../../../../../../sources/client/exh02.png')}/>
                                    </div>
                                    <div className="exhibition__title">
                                        Название выставки
                                    </div>
                                </div>
                                <div className="exhibition">
                                    <div className="exhibition__logo">
                                        <img src={require('../../../../../../sources/client/exh03.png')}/>
                                    </div>
                                    <div className="exhibition__title">
                                        Название выставки
                                    </div>
                                </div>
                                <div className="exhibition">
                                    <div className="exhibition__logo">
                                        <img src={require('../../../../../../sources/client/exh04.png')}/>
                                    </div>
                                    <div className="exhibition__title">
                                        Название выставки
                                    </div>
                                </div>
                                <div className="exhibition">
                                    <div className="exhibition__logo">
                                        <img src={require('../../../../../../sources/client/exh05.png')}/>
                                    </div>
                                    <div className="exhibition__title">
                                        Название выставки
                                    </div>
                                </div>
                                <div className="exhibition">
                                    <div className="exhibition__logo">
                                        <img src={require('../../../../../../sources/client/exh06.png')}/>
                                    </div>
                                    <div className="exhibition__title">
                                        Название выставки
                                    </div>
                                </div>
                                <div className="exhibition">
                                    <div className="exhibition__logo">
                                        <img src={require('../../../../../../sources/client/exh07.png')}/>
                                    </div>
                                    <div className="exhibition__title">
                                        Название выставки
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </section>
                */}
            </div>
        </section>
    );
}
