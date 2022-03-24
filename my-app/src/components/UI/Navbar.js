import LoginModal from "./LoginModal"
import { useState } from "react";

import classes from "./Navbar.module.css";

const MainHeader = (props) => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <header className={classes.header}>
            <nav>
                <div className={classes.container}>
                    <p className={classes.logo}>MORD</p>
                </div>
                <div className={classes.container}>
                    <button className={classes.button} onClick={() => {setOpenModal(true)}}>Log In</button>
                    {openModal && <LoginModal closeModal={setOpenModal} />}
                </div>
            </nav>
        </header>
    );
};

export default MainHeader;