import { useState, useEffect } from 'react';
import Header from './header';
import styles from './layout.module.css';
import Loader from './loader';
import Navbar from "./navbar";


export default function Layout({ children }) {

    return (
        <div>
            <Loader />
            <Navbar />
            <div className={styles.container}>{children}</div>
        </div>
    );
}