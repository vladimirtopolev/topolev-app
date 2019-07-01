import * as React from 'react';
import {adminNavbarLinks} from '../../../../../config/admin-navbar.config';
import NavbarItem from './navbar-item.component';

export default () => {
    return (
        <div>
            <div>Основное меню</div>
            <div>
                <ul>
                    {adminNavbarLinks.map((item, i) => {
                        return <NavbarItem item={item} key={i}/>
                    })}
                </ul>
            </div>
        </div>
    );
};