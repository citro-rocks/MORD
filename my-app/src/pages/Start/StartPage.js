import React from "react";
import { Routes, NavLink } from "react-router-dom";
import MainHeader from "../../components/UI/Navbar";
import Search from "../../components/Search/Search";
import Files from "../../components/Apps/Files";
import RssFeed from "../../components/Apps/Rss";

import classes from './StartPage.module.css';
import TextEditor from "../../components/Apps/Text";
import WebCamera from "../../components/Apps/Camera";
import Images from "../../components/Apps/ImageViewer/Images";


const Start = (props) => {
    return (
        <div>
            <MainHeader className={classes.header} />
            <div className={classes.container}>
                <div className={classes.searchbar} >
                    <Search />
                </div>
            </div>
            <div className={classes.files}>
                <div>
                    <Files />
                </div>
            </div>
            <div className={classes.apps}>
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
                    <Images />
                </div>
            </div>
        </div>
    )
}

export default  Start