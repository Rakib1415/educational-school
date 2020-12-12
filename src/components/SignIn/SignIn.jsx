import React, {useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom'
import './SignIn.css'

import FormInput from '../../components/FormInput/FormInput'

const SignIn = ({handleLogin, handleSignInWithEmailAndPassword, user}) => {
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };

    const [signInInfo, setSignInInfo] = useState({
        email:'',
        password:''
    });

    const handleChange = (e) => {
        setSignInInfo({
            ...signInInfo,
            [e.target.name] : e.target.value
        })
    }
    const handleSignInSubmit = (event) => {
        event.preventDefault();
        handleSignInWithEmailAndPassword(signInInfo)
        history.replace(from)
        
    }
    // console.log(signInInfo)
    const {email, password} = signInInfo;
    if(!user.success && !user.error){
        return (
            <div className="sign-in">
                 <h2>I already have an account</h2>
                    <span>Sign in with your email and password</span>
                    <form onSubmit={handleSignInSubmit}>
                        <FormInput handleChange={handleChange} type="email" name="email" value={email} required label="email" />
                        
                        <FormInput handleChange={handleChange} type="password" name="password" value={password} label="password" required />
                        
                        <button type="submit" className="btn btn-success">Login</button>
                       
                    </form>
                    <div className="footer">
                           <span>Don't have an account? </span>
                           <span onClick={handleLogin} className="create-account">Create an account</span>
                       </div>
            </div>
        );
    }
    else if(user.success){
        return (
            <div>
                <h1 className="text-success">Welcome {user.displayName} ! You are Logged In successfully.</h1>
            </div>
        )
    }
    else if(user.error){
        return (
            <div>
                <h1 className="text-danger">{user.error}</h1>
            </div>
        )
    }
};

export default SignIn;