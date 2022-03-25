import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../UI/LoginModal";


const Auth = (props) => {
    const adminUser = {
        email: "borgoth@mordos.com",
        password: "12bindthem"
    }

    const navigate = useNavigate();

    const [user, setUser] = useState({email: "", password: ""});
    const [error, setError] = useState("");

    const login = (details) => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password){
            alert("You are loged in");
            setUser({
                email: details.email,
                password: details.password
            });
            
            navigate('/start')

        } else {
           setError("Login detais do not mach!")
        }

    }

    const logout = () => {
        setUser({email: "", password: ""});
    }


    return (
        <div className="Auth">
            {(user.email !=="") ? (
                <div className="welcome">
                    <h2>Welcome, to MORD <span>{user.email}</span></h2>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <LoginModal Login={login} error={error} />
            )};
        </div>
    )
};

export default Auth;