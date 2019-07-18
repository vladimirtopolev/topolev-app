import * as React from 'react';
import {Component} from 'react';
import Slider from "react-slick";
import Header from './Header';
import './App.scss';

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

class App extends Component {

    state = {
        scrollWrapper: true
    };

    toggleScrollWrapper = (newState:any) => {
        this.setState((state:any) => {
            const t = {
                scrollWrapper: newState === undefined ? !state.scrollWrapper : newState
            };
            console.log(newState, t);
            return t;
        })
    };

    render() {
        return [
            <Header toggleScrollWrapper={this.toggleScrollWrapper}/>,
            (
                <div className="wrapper" style={{overflowY: this.state.scrollWrapper ? 'visible' : 'hidden'}}>
                    <div className="content">
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
                                    <img src={require('../../sources/client/stend.png')} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="advantages container">
                            <div className="advantages__container row">
                                <div className="advantages__item-container col-md-4">
                                    <div className="advantage">
                                        <div className="advantage__label">
                                            <img className="advantage__img" src={require('../../sources/client/ad-project.png')}/>
                                        </div>
                                        <div className="advantage__title">Проектирование</div>
                                        <div className="advantage__description">
                                            Мы можем предложить как стандартную комплектацию стендов,
                                            которые позволяют подготовиться к участию за несколько дней,
                                            а также разаработать индивидуальный проект исходя из бюджета
                                            и пожеланий
                                        </div>
                                    </div>
                                </div>
                                <div className="advantages__item-container col-md-4">
                                    <div className="advantage">
                                        <div className="advantage__label">
                                            <img className="advantage__img" src={require('../../sources/client/ad-design.png')}/>
                                        </div>
                                        <div className="advantage__title">Дизайн</div>
                                        <div className="advantage__description">
                                            Стенды украшаются различной полиграфической продукцией:
                                            печтатью полотен, наклейками различного вида исполнения,
                                            баннерами, растяжками, разрабатывается система освещения
                                        </div>
                                    </div>
                                </div>
                                <div className="advantages__item-container col-md-4">
                                    <div className="advantage">
                                        <div className="advantage__label">
                                            <img className="advantage__img" src={require('../../sources/client/ad-build.png')}/>
                                        </div>
                                        <div className="advantage__title">Строительство</div>
                                        <div className="advantage__description">
                                            Профессиональная команда устанавливает стенд,
                                            обеспечивая его электроснабжением и водоснабжением.
                                            Стенд собирается в помещении выставки незадолго до ее начала.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                                                        <img src={require('../../sources/client/exh01.png')}/>
                                                    </div>
                                                    <div className="exhibition__title">
                                                        Название выставки
                                                    </div>
                                                </div>
                                                <div className="exhibition">
                                                    <div className="exhibition__logo">
                                                        <img src={require('../../sources/client/exh02.png')}/>
                                                    </div>
                                                    <div className="exhibition__title">
                                                        Название выставки
                                                    </div>
                                                </div>
                                                <div className="exhibition">
                                                    <div className="exhibition__logo">
                                                        <img src={require('../../sources/client/exh03.png')}/>
                                                    </div>
                                                    <div className="exhibition__title">
                                                        Название выставки
                                                    </div>
                                                </div>
                                                <div className="exhibition">
                                                    <div className="exhibition__logo">
                                                        <img src={require('../../sources/client/exh04.png')}/>
                                                    </div>
                                                    <div className="exhibition__title">
                                                        Название выставки
                                                    </div>
                                                </div>
                                                <div className="exhibition">
                                                    <div className="exhibition__logo">
                                                        <img src={require('../../sources/client/exh05.png')}/>
                                                    </div>
                                                    <div className="exhibition__title">
                                                        Название выставки
                                                    </div>
                                                </div>
                                                <div className="exhibition">
                                                    <div className="exhibition__logo">
                                                        <img src={require('../../sources/client/exh06.png')}/>
                                                    </div>
                                                    <div className="exhibition__title">
                                                        Название выставки
                                                    </div>
                                                </div>
                                                <div className="exhibition">
                                                    <div className="exhibition__logo">
                                                        <img src={require('../../sources/client/exh07.png')}/>
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


                        <section className="news">
                            <div className="news__container container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="news__title title">Новости</div>
                                    </div>
                                    <div className="col-lg-8 col-md-12">
                                        <div className="news__container row">
                                            <div className="col-md-6">
                                                <div className="new-item">
                                                    <div className="new-item__date">02.2019</div>
                                                    <div className="new-item__title">
                                                        Открыта регистрация на конгресс "Эффективное тепло- и
                                                        водоснабжение
                                                        в Республике Беларусь", Минск, 19-20 марта
                                                    </div>
                                                    <div className="new-item__link">
                                                        <button className="link">Читать...</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="new-item">
                                                    <div className="new-item__date">02.2019</div>
                                                    <div className="new-item__title">
                                                        Открыта регистрация на конгресс "Эффективное тепло- и
                                                        водоснабжение
                                                        в Республике Беларусь", Минск, 19-20 марта
                                                    </div>
                                                    <div className="new-item__link">
                                                        <button className="link">Читать...</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bestworks">
                            <div className="container">
                                <h1 className="bestworks__title title">Лушие работы</h1>
                                <div className="bestworks__works row">
                                    <div className="bestworks__work col-md-4 col-sm-6">
                                        <div className="work">
                                            <img className="work__img" src={require('../../sources/client/001.jpg')}/>
                                            <p className="work__description-container">
                                                <span className="work__description">Стенд Ferroli</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bestworks__work col-md-4 col-sm-6">
                                        <div className="work">
                                            <img className="work__img" src={require('../../sources/client/002.jpg')}/>
                                            <p className="work__description-container">
                                                <span className="work__description">Стенд Grundfos</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bestworks__work col-md-4 col-sm-6">
                                        <div className="work">
                                            <img className="work__img" src={require('../../sources/client/003.jpg')}/>
                                            <p className="work__description-container">
                                                <span className="work__description">Стенд Grundfos</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bestworks__work col-md-4 col-sm-6">
                                        <div className="work">
                                            <img className="work__img" src={require('../../sources/client/004.jpg')}/>
                                            <p className="work__description-container">
                                                <span className="work__description">Стенд Беларусбанк</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bestworks__work col-md-4 col-sm-6">
                                        <div className="work">
                                            <img className="work__img" src={require('../../sources/client/005.jpg')}/>
                                            <p className="work__description-container">
                                                <span className="work__description">Стенд Saer</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bestworks__work col-md-4 col-sm-6">
                                        <div className="work">
                                            <img className="work__img" src={require('../../sources/client/006.jpg')}/>
                                            <p className="work__description-container">
                                                <span className="work__description">Стенд Begerof</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

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

                        <section className="partners">
                            <div className="container">
                                <h1 className="partners__title title">Партнеры</h1>
                                <div className="partners__container row">
                                    <div className="partner col-md-4">
                                        <a href="" className="partner__link">
                                            <img src={require('../../sources/client/expoforum.png')} className="partner__img"/>
                                        </a>
                                    </div>
                                    <div className="partner col-md-4">
                                        <a href="" className="partner__link">
                                            <img src={require('../../sources/client/sts-design.png')} className="partner__img"/>
                                        </a>
                                    </div>
                                    <div className="partner col-md-4">
                                        <a href="" className="partner__link">
                                            <img src={require('../../sources/client/infoforum.png')} className="partner__img"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="footer">
                        <div className="footer__container container">
                            <div className="footer__address">
                                220021, Беларусь, Минск<br/>
                                ул. Челюскинцев, 15-1<br/>
                                тел. +375 17 273 73 00<br/>
                                e-mail: exposervice@tut.by
                            </div>
                            <div className="footer__copyright ">
                                © 1991-2017 "Экспосервис"
                            </div>
                        </div>
                    </div>
                </div>
            )
        ];
    }
}

export default App;
