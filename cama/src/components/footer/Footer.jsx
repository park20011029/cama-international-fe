import React from "react";
import styles from "./Footer.module.css";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.mainSection}>
                    <h2 className={styles.title}>함께 만드는 깨끗한 지구</h2>
                    <p className={styles.subtitle}>
                        당신의 작은 실천이 지구를 변화시킵니다
                    </p>
                    <div className={styles.newsletter}>
                        <input
                            type="email"
                            placeholder="이메일을 입력하세요"
                            className={styles.emailInput}
                        />
                        <button className={styles.subscribeButton}>구독하기</button>
                    </div>
                </div>

                <div className={styles.linksContainer}>
                    <div className={styles.linkColumn}>
                        <h3>플로깅 시작하기</h3>
                        <a href="#">초보자 가이드</a>
                        <a href="#">장비 준비하기</a>
                        <a href="#">안전 수칙</a>
                    </div>

                    <div className={styles.linkColumn}>
                        <h3>커뮤니티</h3>
                        <a href="#">모임 찾기</a>
                        <a href="#">인증하기</a>
                        <a href="#">이달의 플로거</a>
                    </div>

                    <div className={styles.linkColumn}>
                        <h3>고객지원</h3>
                        <a href="#">자주 묻는 질문</a>
                        <a href="#">문의하기</a>
                        <a href="#">이용약관</a>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.social}>
                        <FaGithub />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                    <p className={styles.copyright}>
                        © 2024 Plogging. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;