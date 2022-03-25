import React, { useState } from 'react';
import classes from './LoginModal.module.css';


const Modal = ({ closeModal }) => {


    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form className={classes.modal} onSubmit={submitHandler}>
            <button className={classes.close} onClick={() => {
                closeModal(false)}}> X </button>
            <div className={classes.container}>
                
            </div>
        </form>  
      )
};

export default Modal