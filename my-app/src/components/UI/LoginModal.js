import React from 'react';

import classes from './LoginModal.module.css';


const LoginModal = ({ closeModal }) => {


    //  const LoginForm = ({Login, error}) => {

    //     const [details, setDetails] = useState({email: "", password:""});
    
    //     const submitHandler = e => {
    //         e.preventDefault();
    //     };

    return (
        <form className={classes.modal}>
            <button className={classes.close} onClick={() => {
                closeModal(false)}}> X </button>
            <div className={classes.container}>
                <h2>Please Log In</h2>
                {/* ERROR */}
                <div className={classes.form}>
                    <div className={classes.mail}>
                        <label htmlFor="email">email: </label>
                        <input type="text" name="email" id="email" />                  
                    </div>
                    <div className={classes.pass}>
                        <label htmlFor="password">password: </label>
                        <input type="text" name="password" id="password" />
                    </div>
                </div>
                <button className={classes.button}>Log in</button>
            </div>
        </form>  
      )
};

export default LoginModal