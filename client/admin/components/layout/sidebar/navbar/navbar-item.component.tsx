import * as React from 'react';
import {useState, MouseEvent} from 'react';
import * as _ from 'lodash';
import {Link} from 'react-router-dom';
import cn from 'classnames';

import * as styles from './navbar-item.component.styles.css';

import {NavbarLink} from '../../../../../config/admin-navbar.config';

interface NavbarItem {
    item: NavbarLink
}


function NavbarItem({item}: NavbarItem) {
    const [isOpenSubNav, toggleSubNav] = useState(false);
    const {iconClassName, title, links, href} = item;
    const existsSubNav = _.isArray(links) && links.length > 0;

    const onClickEvent = (ev: MouseEvent) => {
        if (existsSubNav) {
            ev.preventDefault();
            toggleSubNav(!isOpenSubNav);
        }
    };

    return (
        <li className={styles.NavbarItem}>
            <Link className={styles.NavbarItem__link}
                to={href}
                  onClick={onClickEvent}>
                <span className={cn(styles.NavbarItem__icon, iconClassName)}/>
                {title}
                {existsSubNav && <span className={cn(styles.NavbarItem__chevron, {
                    [styles.NavbarItem__chevron_open]: isOpenSubNav
                })}/>}
            </Link>
            {existsSubNav && (
                <ul className={cn('NavbarItem__secondaryNav', {
                    ['NavbarItem__secondaryNav_open']: isOpenSubNav
                })}>
                    {links.map((item, i) => <NavbarItem item={item} key={i}/>)}
                </ul>
            )}
        </li>
    );
}

export default NavbarItem;
