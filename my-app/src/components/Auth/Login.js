import React, { useState } from 'react'


const LoginForm = ({Login, error}) => {

    const [details, setDetails] = useState({email: "", password:""});

    const submitHandler = e => {
        e.preventDefault();
    };


    return (
      <form onSubmit={submitHandler}>
          <div className='form-inner'>
              <h2>Login</h2>
              {/* ERROR */}
              <div className="form-group">
                  <label htmlFor="email">email:</label>
                  <input type="text" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />                  
              </div>
              <div className="form-group">
                  <label htmlFor="password">password:</label>
                  <input type="text" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
              </div>
              
          </div>
      </form>  
    );
};

export default LoginForm