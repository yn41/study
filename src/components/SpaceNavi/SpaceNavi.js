import React from 'react';
import classNames from "classnames/bind"; 
import styles from "./SpaceNavi.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const cx = classNames.bind(styles);

const SpaceNavi = ({onPrev, onNext}) => {
    return (
        <>
            <IoIosArrowBack size={"2rem"} className={cx('btn_arr','prev')} onClick={onPrev}/>
            <IoIosArrowForward size={"2rem"} className={cx('btn_arr','next')} onClick={onNext} />
        </>
    );
};

export default SpaceNavi;