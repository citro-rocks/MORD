import React, { useState } from "react";
import LoginModal from "../UI/LoginModal";


const Auth = (props) => {
    const adminUser = {
        email: "borgoth@mordos.com",
        password: "12bindthem"
    }

    const [user, setUser] = useState({email: "", password: ""});
    const [error, setError] = useState("");

    const Login = (details) => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password){
            alert("You are loged in");
            setUser({
                email: details.email,
                password: details.password
            });
            
        } else {
           setError("Login detais do not mach!")
        }

    }

    const Logout = () => {
        setUser({email: "", password: ""});
    }


    return (
        <div className="Auth">
            {(user.email !=="") ? (
                <div className="welcome">
                    <h2>Welcome, to MORD <span>{user.email}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginModal Login={Login} error={error} />
            )};
        </div>
    )
};

export default Auth;