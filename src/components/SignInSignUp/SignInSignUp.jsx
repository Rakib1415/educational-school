import React, {useState, useContext} from 'react';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import './SignInSignUp.css'
import {myContext} from '../../App.js'

const SignInSignUp = ({createUser, handleSignInWithEmailAndPassword}) => {
    const [isLogin, setIsLogin] = useState(true);
    const [handleSignInWithGoogle, ,user] = useContext(myContext)
    // console.log(handleSignInWithGoogle);
    const handleLogin = ()=> {
        setIsLogin(!isLogin)
    }
    return (
        <div>
            <div className="sign-in-sign-up my-5">
            {
                isLogin ? (<SignUp user={user} createUser={createUser} handleLogin={handleLogin}/>) : (<SignIn user={user} handleSignInWithEmailAndPassword ={handleSignInWithEmailAndPassword} handleLogin={handleLogin}/>)
            }

        </div>
        <div className="text-center">
        {
            !user.isSignIn && <button onClick={handleSignInWithGoogle} className="btn btn-primary">Sign In With Google</button>
        }
        </div>
        </div>
    );
};

export default SignInSignUp;