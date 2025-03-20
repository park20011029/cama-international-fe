import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import HeaderLogo from "../../assets/H1111.png";

export const Header = () => {
    const [showActiveUsers, setShowActiveUsers] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleActiveUsers = () => {
        setShowActiveUsers(!showActiveUsers);
    };

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const handleExternalLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const navItems = [
        // { name: "신제품", path: "/new"},
        { name: "손잡이/도어락", path: "/new"},
        { name: "슬라이딩도어 하드웨어", path: "/new"},
        { name: "도어부속", path: "/" },
        { name: "욕실", path: "/new"},
        { name: "철물/부속", path: "/admin/reports" },
        { name: "고객지원", path: "/new"},
    ];

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.logoContainer}>
                        <Link to="/">
                            <img src={HeaderLogo} alt="로고" className={styles.logo} />
                        </Link>
                    </div>
                    <div className={styles.mobileActions}>
                        <button onClick={toggleActiveUsers} className={styles.mobileButton}>
                            👤
                        </button>
                        <button onClick={toggleMobileMenu} className={styles.mobileButton}>
                            ☰
                        </button>
                    </div>
                    <nav
                        className={`${styles.nav} ${showMobileMenu ? styles.showMobileMenu : ""}`}
                    >
                        <ul className={styles.navList}>
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    {item.external ? (
                                        <button
                                            onClick={() => handleExternalLink(item.path)}
                                            className={styles.navItem}
                                        >
                                            {/*<item.icon className={styles.icon} size={18} />*/}
                                            {item.name}
                                        </button>
                                    ) : (
                                        <Link to={item.path} className={styles.navItem}>
                                            {/*<item.icon className={styles.icon} size={18} />*/}
                                            {item.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;