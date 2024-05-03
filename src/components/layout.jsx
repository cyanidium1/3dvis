import styles from './layout.module.css';
import Loader from './loader';
import Navbar from "./navbar";


export default function Layout({ children }) {

    return (
        <div>
            <Loader />
            <div className='block'>
                <Navbar />
            </div>
            {children}
            {/* <div className={styles.container}>{children}</div> */}
        </div>
    );
}