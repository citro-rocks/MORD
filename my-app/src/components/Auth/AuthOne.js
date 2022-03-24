import React, { useState } from "react";


const Auth = () => {
    const adminUser = {
        email: "borgoth@mordos.com",
        password: "12bindthem"
    }

    const [eser, setUser] = useState({email: "", password: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password)
        alert("You are loged in");
        } else {
            alert("Entered email and password do not mach.");
        }

    const Logout = () => {
        setUser({email: "", password: ""});
    }


    return (
        <div className="Auth">
            {(user.email !="") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.email}</span></h2>
                    <button>Logout</button>
                </div>
            ) : (
                <LoginForm />
            )};
        </div>
    )
};

export default Auth;