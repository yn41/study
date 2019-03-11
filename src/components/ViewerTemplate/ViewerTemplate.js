import React from 'react';
import classNames from "classnames/bind"; 
import styles from "./ViewerTemplate.module.scss"

const cx = classNames.bind(styles);

const ViewerTemplate = ({viewer, spaceNavi}) => {
    return (
        <>
            <header className={cx('header')}>
                <h1>Nasa 오늘의 사진~!</h1>
            </header>
            <div className={cx('container')}>
                {viewer}
                {spaceNavi}
            </div>
        </>
    );
};

export default ViewerTemplate;