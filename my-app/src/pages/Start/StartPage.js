import React from "react";
import { Routes, NavLink } from "react-router-dom";
import MainHeader from "../../components/UI/Navbar";
import Search from "../../components/Search/Search";
import Files from "../../components/Apps/Files";
import RssFeed from "../../components/Apps/Rss";
import ImageIcon from '../../components/assets/image-icon.png';

import classes from './StartPage.module.css';
import TextEditor from "../../components/Apps/Text";
import WebCamera from "../../components/Apps/Camera";


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
                    <div className={classes.box}>
                        <NavLink to="/gallery" className={classes.images}>
                            <img src={ImageIcon} alt="" />
                            <div>
                                <p>Image Viewer</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  Start