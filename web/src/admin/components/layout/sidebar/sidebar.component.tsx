import * as React from 'react';
import Navbar from './navbar/navbar.component';
import UserView from './user-view/user-view.container'
import * as styles from './sidebar.component.styles.css';

export default () => (
    <nav className={styles.Sidebar}>
        <UserView/>
        <Navbar/>
    </nav>
);
