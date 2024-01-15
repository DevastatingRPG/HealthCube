"use client"

import styles from "../styles/navbar.module.css"
//import {CgCloseR, CgMenu} from "react-icons/cg";
import Link from "next/link";
import {useState} from "react";
import { Router } from "next/router";

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    console.log("value " + openMenu)
    return (
        <>
            <nav className={styles.navbar}>
                <div className={openMenu ? `${styles.active}` : "" }>
                    <ul className={styles.navbarList}>
                        {/* <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="#"
                                  onClick={() => setOpenMenu(false)}
                            >Home</Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="/about"
                                  onClick={() => setOpenMenu(false)}
                            >About</Link>
                        </li> */}
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink}
                                  onClick={() => setOpenMenu(false)}
                                  href="/Uploaded_forms">Uploaded forms</Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink}
                                  onClick={() => setOpenMenu(false)}
                                  href="/Filled_forms">Filled forms</Link>
                        </li>
                    </ul>

                    {/* //nav icon */}
                    <div className={styles['mobile-navbar-btn']}>
                        
                    </div>
                </div>
            </nav>

        </>

    );
};

export default Nav;