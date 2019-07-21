import * as React from 'react';
import Slider from 'react-slick';

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

export default () => {
    return (
        <section className="about-us">
            <div className="about-us__container container">
                <div className="row">
                    <div className="col-md-4 about-us__statistic-container">
                        <div className="about-us__statistic">
                            <h1>28 <span>лет</span></h1>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="about-us__title title">О компании</div>
                        <div className="about-us__description">
                            <p>
                                Предприятие "Экспосервис" работает на рынке выставочных услуг
                                Республики Беларусь более 28 лет, начиная с 1991 года.
                            </p>
                            <p>
                                Мы оказываем услуги по проектированию, дизайну и строительству
                                выстовочных
                                стендов.
                            </p>
                            <p>
                                Залогом успеха работы гашей компании является слаженный труд команды
                                профессионалов,
                                умение оперативно и эффективно решать разнообразные задачи, возникающие
                                в
                                процессе
                                подготовки и проведении выставок.
                            </p>
                            <p>
                                Наше предприятие является генеральным подрядчиком УП "Экспоформу",
                                один из лидеров национального выставочного бизнеса.
                            </p>
                        </div>
                        <div className="about-us__btn">
                            <button className="btn btn-primary">Подробнее</button>
                        </div>
                    </div>
                </div>
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
            </div>
        </section>
    );
}
