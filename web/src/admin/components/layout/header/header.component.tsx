import * as React from 'react';
import * as styles from './header.component.styles.css';

export default () => (
    <div className={styles.Header}>
        <div className={styles.Header__logo}>
            <span className={styles.Logo}></span>
            Admin Panel
        </div>
        <div className={styles.Header__content}></div>
    </div>
);
