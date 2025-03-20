import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./IntroComponent.module.css";
import { INTRO_CONTENT } from "../../constants/IntroContent";
import { FaArrowCircleUp } from "react-icons/fa";

const IntroComponent = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });

        const checkScrollTop = () => {
            if (!showScroll && window.scrollY > 400) {
                setShowScroll(true);
            } else if (showScroll && window.scrollY <= 400) {
                setShowScroll(false);
            }
        };

        window.addEventListener("scroll", checkScrollTop);
        return () => window.removeEventListener("scroll", checkScrollTop);
    }, [showScroll]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const generateSections = () => {
        return INTRO_CONTENT.map((content, index) => (
            <section key={index} className={styles.section}>
                <div className={styles.contentWrapper}>
                    <div
                        className={styles.textWrapper}
                        data-aos="fade-right"
                        data-aos-delay="400"
                    >
                        <div className={styles.titleContainer}>
                            <img
                                src={content.icon}
                                alt={`${content.mainTitle} icon`}
                                className={styles.titleIcon}
                            />
                            <h1 className={styles.mainTitle}>{content.mainTitle}</h1>
                        </div>
                        <p className={styles.text}>{content.text}</p>
                        <p className={styles.subText}>{content.subText}</p>
                        <p className={styles.boldText}>{content.boldText}</p>
                    </div>
                    <div
                        className={styles.imageWrapper}
                        data-aos="fade-left"
                        data-aos-delay="400"
                    >
                        <img
                            src={content.image}
                            alt={content.mainTitle}
                            className={styles.image}
                        />
                    </div>
                </div>
            </section>
        ));
    };

    return (
        <div className={styles.container}>
            {generateSections()}
            <button
                className={`${styles.scrollTop} ${showScroll ? styles.showScroll : ""}`}
                onClick={scrollToTop}
            >
                <FaArrowCircleUp size={40} />
            </button>
        </div>

    );
};

export default IntroComponent;