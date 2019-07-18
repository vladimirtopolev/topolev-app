import React, {Component} from 'react';
import Headroom from 'react-headroom';
import cn from 'classnames';


export default class Header extends Component{

    state = {
        disablePinning: false,
        toggledMenu: false
    };

    componentDidMount() {
        this.mediaQueryListener = window.matchMedia("(max-width: 700px)");
        this.togglePinningHeader(this.mediaQueryListener);
        this.mediaQueryListener.addListener(this.togglePinningHeader);
    }

    togglePinningHeader = (media) => {
        console.log('media', media.matches);
        if (!media.matches) {
            this.props.toggleScrollWrapper(true);
        }
        this.setState((state) => ({
            disablePinning: media.matches,
            toggledMenu: media.matches ? false : state.toggledMenu
        }));
    }

    toggleMenu = (e) => {
        e.preventDefault();
        this.props.toggleScrollWrapper();
        this.setState((state) => ({...state, toggledMenu: !state.toggledMenu}))
    }

    render(){
        return (
            <Headroom pinStart={100} disable={this.state.disablePinning}>
                <header className={cn('header', {'header_close-nav': this.state.toggledMenu})}>
                    <div className="header__top">
                        <div className="header__top-container container row justify-content-end">
                            <div className="header__phone">
                                <i className="fas fa-phone"></i>
                                +375 17 273 73 00
                            </div>
                            <div className="header__lang">
                                <ul className="lang">
                                    <li className="lang__item">
                                        <a href="" className="lang__link">
                                            <img src={require("./img/ru.gif")}/>
                                        </a>
                                    </li>
                                    <li className="lang__item">
                                        <a href="" className="lang__link">
                                            <img src={require("./img/en.gif")}/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header__bottom">
                        <div className="header__bottom-container">
                            <div className="header__logo">
                                <a href="" className="header__logo-link">
                                    <img src={require("./img/logo.jpg")} className="header__logo-img"/>
                                </a>
                            </div>
                            <div className="header__navigation">
                                <div className="main-nav__toggler">
                                    <a href="" onClick={this.toggleMenu}>
                                        <i className="fas fa-bars"></i>
                                    </a>
                                </div>
                                <ul className="main-nav">
                                    <li className="main-nav__item">
                                        <a href="" className="main-nav__link">Информация</a>
                                    </li>
                                    <li className="main-nav__item">
                                        <a href="" className="main-nav__link">Стенды</a>
                                    </li>
                                    <li className="main-nav__item">
                                        <a href="" className="main-nav__link">Услуги</a>
                                    </li>
                                    <li className="main-nav__item">
                                        <a href="" className="main-nav__link">Оборудование</a>
                                    </li>
                                    <li className="main-nav__item">
                                        <a href="" className="main-nav__link">Контакты</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </Headroom>
        );
    }
}