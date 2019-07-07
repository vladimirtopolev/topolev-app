import * as React from 'react';
import {adminNavbarLinks} from '../../../../../config/admin-navbar.config';
import NavbarItem from './navbar-item.component';
import * as styles from './navbar.component.styles.css';

export default () => {
    return (
        <div className={styles.Navbar}>
            <div className={styles.Navbar__title}>Основное меню</div>
            <div className={styles.Navbar__content}>
                <ul className={styles.Navbar__navbar}>
                    {adminNavbarLinks.map((item, i) => {
                        return <NavbarItem item={item} key={i}/>
                    })}
                </ul>
            </div>
        </div>
    );
};
