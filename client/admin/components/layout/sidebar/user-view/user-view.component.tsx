import * as React from 'react';
import {useState} from 'react';
import * as styles from './user-view.component.styles.css';
import cn from 'classnames';

const auth = {
    firstName: 'Nick',
    lastName: 'Petrov'
};
export default () => {
    const [isOpenNavbar, toggleNavbar] = useState(false);
    const logoutUser = () => {};

    return (
        <div className={styles.UserView}>
            <div className={styles.UserView__header}>
                <div className={styles.UserView__img}>
                    <img src={require('../../../../../sources/img/no-user.png')}/>
                </div>
                <div className={styles.UserView__description}>
                    <div className={styles.UserView__greeting}>
                        Добро пожаловать,
                    </div>
                    <div className={styles.UserView__name}>
                        {`${auth.firstName} ${auth.lastName}`}
                    </div>
                </div>
                <div className={styles.UserView__chevron}>
                    <i className={cn('fa', {'fa-chevron-right': !isOpenNavbar, 'fa-chevron-down': isOpenNavbar})}
                       onClick={() => toggleNavbar(!isOpenNavbar)}>
                    </i>
                </div>
            </div>
            <div className={cn(styles.UserView__navbar, {[styles.UserView__navbar_open]: isOpenNavbar})}>
                <ul className={styles.Navbar}>
                    <li className={styles.Navbar__item}>
                        <a href="#"
                           className={styles.Navbar__link}
                           onClick={logoutUser}>
                            <i className={cn(styles.Navbar__icon, 'fas fa-sign-out-alt')}></i>
                            Выйти
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
