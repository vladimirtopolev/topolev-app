import * as React from 'react';
import {useContext, useState, useEffect, SyntheticEvent} from 'react';
import Headroom from 'react-headroom';
import cn from 'classnames';
import {LOCALES} from '../../../../config/locales';
import {clientNavbarLinks} from '../../../../config/client-navbar.config';
import {LanguageContext} from '../../../../common/helpers/with-language-context.render-props-component';
import './header.component.scss';
import {Property} from '../../../../modules/properties/schema/models';
import getPropertyValueByName from '../../../../common/modules/properties/helpers/getPropertyValueByName';
import {Link, NavLink} from 'react-router-dom';

export interface HeaderProps {
    toggleScrollWrapper: (state?: boolean) => void
    className?: string,
    isSecondary?:boolean,
    properties?: Property[]
}

export default ({toggleScrollWrapper, className, isSecondary, properties}: HeaderProps) => {
    const [headerState, changeHeaderState] = useState({
        disablePinning: false,
        toggledMenu: false
    });
    const {changeLocale, dictionary} = useContext(LanguageContext);

    const phone = getPropertyValueByName(properties, 'phone1');

    const togglePinningHeader = (media: any) => {
        if (!media.matches) {
            toggleScrollWrapper(true);
        }
        changeHeaderState({
            disablePinning: media.matches,
            toggledMenu: media.matches ? false : headerState.toggledMenu
        });
    };

    const toggleMenu = (e: SyntheticEvent) => {
        e.preventDefault();
        toggleScrollWrapper();
        changeHeaderState({
            ...headerState,
            toggledMenu: !headerState.toggledMenu
        });
    };

    let mediaQueryListener;
    useEffect(() => {
        mediaQueryListener = window.matchMedia("(max-width: 700px)");
        togglePinningHeader(mediaQueryListener);
        mediaQueryListener.addListener(togglePinningHeader);
    }, []);

    return (
        <Headroom pinStart={100} disable={headerState.disablePinning} className={cn(className, {
            'header_open': headerState.toggledMenu
        })}
                  wrapperStyle={{height:100}}>
            <header className={cn('header', {'header_close-nav': headerState.toggledMenu})}>
                <div className="header__top container">
                    <div className="header__top-container row justify-content-end">
                        <div className="header__phone">
                            <i className="fas fa-phone"></i>
                            {phone}
                        </div>
                        <div className="header__lang">
                            <ul className="lang">
                                <li className="lang__item">
                                    <a href="#" className="lang__link" onClick={(e: SyntheticEvent) => {
                                        e.preventDefault();
                                        changeLocale(LOCALES[0]);
                                    }
                                    }>
                                        <img src={require("../../../../../sources/client/ru.gif")}/>
                                    </a>
                                </li>
                                <li className="lang__item">
                                    <a href="#" className="lang__link" onClick={(e: SyntheticEvent) => {
                                        e.preventDefault();
                                        changeLocale(LOCALES[1]);
                                    }}>
                                        <img src={require("../../../../../sources/client/en.gif")}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header__bottom">
                    <div className="header__bottom-container">
                        <div className="header__logo">
                            <Link to="/" className="header__logo-link">
                                <img src={require("../../../../../sources/client/logo.jpg")} className="header__logo-img"/>
                            </Link>
                        </div>
                        <div className="header__navigation">
                            <div className="main-nav__toggler">
                                <a href="" onClick={toggleMenu}>
                                    <i className="fas fa-bars"></i>
                                </a>
                            </div>
                            <ul className="main-nav">
                                {clientNavbarLinks.map(link => (
                                    <li className="main-nav__item" key={link.title}>
                                        <NavLink to={link.href}
                                                 className="main-nav__link"
                                                 activeClassName="main-nav__link_active">
                                            {dictionary[link.title]}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </Headroom>
    );

};
