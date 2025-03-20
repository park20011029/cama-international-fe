import React from "react";
import styles from "./Introduce.module.css";

const IntroducePage = () => {
    return (
        <div className={styles.fullPageContainer}>
            <div className={styles.imageOverlay}>
                <h1 className={styles.overlayText}>Welcome to Our Site</h1>
                <p className={styles.overlaySubtext}>Discover amazing content</p>
            </div>
        </div>
    );
};

export default IntroducePage;