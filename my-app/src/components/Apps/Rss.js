import React from "react";
import classes from './Rss.module.css';

import rssIcon from '../assets/rss-icon.png';

const RssFeed = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.rss}>
                <img src={rssIcon} alt="" />
                <div>
                    <p>RSS feed</p>
                </div>
            </div>
        </div>
    )
}

export default RssFeed;