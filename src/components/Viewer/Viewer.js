import React from 'react';
import classNames from "classnames/bind"; 
import styles from "./Viewer.module.scss"

const cx = classNames.bind(styles);

const Viewer = ({url, mediaType, loading}) => {
    return (
        <>  
        {
            !loading?  
                (mediaType==="image"?  
                <img src={url} className={cx("img","text")} />
                : <object width="90%" height="90%" data={url} className={cx("vidio")}></object>)
            :<div className={cx("loading")}><p>loading...</p><p>겁나 느림... 계속 기달리세요...</p> </div>
        }
        {
        }
        </>
    );
};

export default Viewer;