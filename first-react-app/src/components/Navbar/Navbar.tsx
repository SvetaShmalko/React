import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {

    return <nav className={styles.navbar}>
        <div className={styles.item}>
            <a href='./'>стартовые наборы</a>
        </div>
        <div className={styles.item}>
            <a href='./'>оплата и доставка</a>
        </div>
        <div className={styles.item}>
            <a href='./'>о нас</a>
        </div>
    </nav>
}

export default Navbar