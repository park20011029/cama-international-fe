import React from 'react';
import styles from './Main1.module.css';
import { IoIosArrowDropright } from "react-icons/io";


function Main1() {
    return (
        <div className= {styles.fullscreen}>
            <div className = {styles.textOverlay}> Building & Interior <br/> Hardware Solution </div>
            <div className= {styles.arrowIcon}>
                <IoIosArrowDropright />
            </div>
        </div>
    );
}

export default Main1;
