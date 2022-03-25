import React, { useState } from 'react';
import classes from './LoginModal.module.css';


const LoginModal = ({ closeModal, Login, error }) => {


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
                <h2>Please Log In</h2>
                {(error !== "") ? ( <div className={classes.error}>{error}</div>) : ""}
                <div className={classes.form}>
                    <div className={classes.mail}>
                        <label htmlFor="email">email: </label>
                        <input type="text" name="email" id="email"
                         onChange={e => setDetails({...details, email: e.target.value})} value={details.name} />                  
                    </div>
                    <div className={classes.pass}>
                        <label htmlFor="password">password: </label>
                        <input type="text" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>   
                </div>
                <input className={classes.button} type="submit" value="Login" />Login
            </div>
        </form>  
      )
};

export default LoginModal