import React, {useState} from 'react';
import './SignUp.css';
import FormInput from '../FormInput/FormInput'

const SignUp = ({handleLogin, createUser, user}) => {
    // console.log(user)

    const [errors, setErrors] = useState({})

    const [userInfo, setUserInfo] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword : ''
    })

    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e) => {

      const {errors, isValid} = formValidation();
      if(isValid){
          createUser(userInfo)
        e.target.reset();
        setUserInfo({
            displayName: '',
            email: '',
            password: '',
            confirmPassword : ''
        })

        setErrors({});
      }
      else{
          setErrors(errors)
      }
        e.preventDefault();
    }

    const formValidation = () => {
        const errors = {};
        const {displayName, email, password, confirmPassword} = userInfo;
      if(displayName.length < 4){
            errors.name = 'your name is too small please provide full name'
        }else if(displayName.length > 14){
            errors.name = 'Your name is too long please provide name 4 to 14 letters'
        }
        if(!( /\S+@\S+\.\S+/.test(email))){
            errors.email = 'Invalid email please provide valid email'
        }
        if(!(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{4,})$/.test(password))){
            errors.password = 'please provide at lest 4 letters that have contain 1 uppercase 1 number';
        }
        if(password !== confirmPassword){
            errors.confirmPassword = 'do not match password and confirm password'
        }

        return {
            errors,
            isValid : Object.keys(errors).length === 0
        }
    }




    const {displayName, email, password, confirmPassword} = userInfo;
    // console.log(errors)
    if(!user.success){
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                    <span>Sign up with your email and password</span>
                    <form className="sign-up-form" onSubmit={handleSubmit}>
                        <FormInput
                            type='text'
                            name='displayName'
                            value={displayName}
                            handleChange={handleChange}
                            label='Display Name'
                            error = {errors.name}
                            required
                        />
                         <FormInput
                            type='email'
                            name='email'
                            value={email}
                            handleChange={handleChange}
                            label='Email'
                            error = {errors.email}
                            required
                        />
                         <FormInput
                            type='password'
                            name='password'
                            value={password}
                            handleChange={handleChange}
                            label='Password'
                            error = {errors.password}
                            required
                        />
                         <FormInput
                            type='password'
                            name='confirmPassword'
                            value={confirmPassword}
                            handleChange={handleChange}
                            label='Confirm Password'
                            error = {errors.confirmPassword}
                            required
                        />
                        <button className="btn btn-success" type="submit">submit</button>
                    </form>
                    <span>Already have an account? </span>
                <span onClick={handleLogin} className="login">Login</span>
            </div>
        );
    }
    else{
        return (
            <div>
                <h1>Welcome {user.displayName}</h1>
                <h4 className="text-success">Your account has been created</h4>
            </div>
        );
    }
};

export default SignUp;