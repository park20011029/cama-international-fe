// src/components/common/Sidebar/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <ul>
                <li>
                    <Link to="/admin/reports">📋 신고 관리</Link>
                </li>
                <li>
                    <Link to="/admin/teams">👥 팀 조회</Link>
                </li>
                <li>
                    <Link to="/admin/statistics">📊 통계 조회</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;