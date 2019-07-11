import * as React from 'react';
import * as styles from './admin-layout.component.styles.css';
import Header from './header/header.component';
import Sidebar from './sidebar/sidebar.component';
import {ReactNode} from 'react';

interface AdminLayoutProps {
    children: () => ReactNode
}

export default (props: AdminLayoutProps) => (
    <div className={styles.AdminLayout}>
        <div className={styles.AdminLayout__wrapper}>
            <div className={styles.AdminLayout__header}>
                <Header/>
            </div>
            <div className={styles.AdminLayout__content}>
                <div className={styles.AdminLayout__sidebar}>
                    <Sidebar/>
                </div>
                <div className={styles.AdminLayout__page}>
                    {props.children()}
                </div>
            </div>
        </div>
        {/*
        <div className={styles.AdminLayout__footer}>
            Footer
        </div>
        */}
    </div>
)
