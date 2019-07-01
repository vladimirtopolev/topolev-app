import * as React from 'react';
import {useState, MouseEvent} from 'react';
import * as _ from 'lodash';
import {Link} from 'react-router-dom';

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
        <li>
            <Link to={href} onClick={onClickEvent}>
                <span/>
                {title}
            </Link>
            {existsSubNav && (
                <ul>
                    {links.map((item, i) => <NavbarItem item={item} key={i}/>)}
                </ul>
            )}
        </li>
    );
}

export default NavbarItem;