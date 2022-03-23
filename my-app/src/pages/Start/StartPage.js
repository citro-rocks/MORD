import React from "react";
import MainHeader from "../../components/UI/Navbar";
import Search from "../../components/Search/Search";
import Files from "../../components/Cards/Files";
import RssFeed from "../../components/Cards/Rss";

import classes from './StartPage.module.css';
import TextEditor from "../../components/Cards/Text";
import WebCamera from "../../components/Cards/Camera";
import ImageViewer from "../../components/Cards/Images";


const Start = (props) => {
    return (
        <div>
            <div>
                <MainHeader />
            </div>
            <div className={classes.container}>
                <div>
                    <Search />
                </div>
            </div>
            <div className={classes.container}>
                <div>
                    <Files />
                </div>
            </div>
            <div className={classes.container}>
                <div>
                    <TextEditor />
                </div>
                <div>
                    <RssFeed />
                </div>
                <div>
                    <WebCamera />
                </div>
                <div>
                    <ImageViewer />
                </div>
            </div>
        </div>
    )
}

export default  Start