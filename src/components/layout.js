import { useState, useEffect } from 'react';
import Header from './header';
import styles from './layout.module.css';

export default function Layout({ children }) {


    return (
        <div>
            {/* <div className={`absolute w-screen h-screen flex justify-center items-center bg-white splash-screen`}>
                3D Grapher
            </div> */}
            <header className={styles.container}><Header /></header>
            <div className={styles.container}>{children}</div>
        </div>
    );
}
