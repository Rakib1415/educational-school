
import React, {useState, useEffect, createContext} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Baner from './components/Baner/Baner.jsx'
import Navbar from './components/Navbar/Navbar';
import MainArea from './components/MainArea/MainArea';
import CountArea from './components/CountArea/CountArea';
import CheckOut from './components/CheckOut/CheckOut';
import fakeData from './components/data/index'
import GridView from './components/GridVeiw/GridView';
import CourseDetails from './components/CourseDetails/CourseDetails';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart } from './components/utilites/databaseManager';
import SignInSignUp from './components/SignInSignUp/SignInSignUp';

import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase/firebase-auth'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

firebase.initializeApp(firebaseConfig);
export const myContext = createContext();

function App() {
  const [selectedCourse, setSelectedCourse] = useState([])
  const [courses, setCourses] = useState([])

  const [user, setUser] = useState({
    displayName : '',
    email : '',
    password : '',
    confirmPassword: '',
    photoURL: '',
    isSignIn : false,
    success : false,
    error : ""
  })

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleSignInWithGoogle = () =>{
    firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
      const {displayName, email, photoURL} = res.user;
      setUser({
        isSignIn:true,
        displayName,
        email,
        photoURL,
        success : true
      })
    })
    .catch(error => {
      setUser({
        ...user,
        error : error.message
      })
    })
  
  }

  const handleSignInWithEmailAndPassword = (signInInfo) =>{
    const {email , password} = signInInfo
    console.log(email, password)
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((res) => {
    const {displayName, email} = res.user
  setUser({
    ...user,
    displayName,
    email,
    isSignIn : true,
    success : true,
    error : ''
  })
  })
  .catch((error) => {
    setUser({
      ...user,
      error : error.message,
      isSignIn : false,
    success : false
    })
  });
  
  }

const handleSignOut = () => {
  firebase.auth().signOut()
  .then(()=> {
    setUser({
      displayName : '',
      email : '',
      photoURL: '',
      isSignIn : false,
      success:false,
      error :''
    })
  })
  .catch(error => {
    console.log(error.message)
  })
}

const createUser = newUser =>{
 
  firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
  .then((res) => {
    const {email, password} = res.user
    updateName(newUser.displayName)
    setUser({
      ...user,
      email,
      password,
      displayName: newUser.displayName,
      success : true,
      error : ''
    });
  })
  .catch((error) => {
    setUser({
      ...user,
      success : false,
      error: error.message
    })
  });
  
}

const updateName = name => {
  const user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name
}).then(function() {
  console.log("Update successful")
}).catch(function(error) {
  console.log(error)
});
}

  useEffect(()=>{
    setCourses(fakeData.slice(0,12));
    const saveCart = getDatabaseCart()
    const courseKeys = Object.keys(saveCart);
    const cartCourses = courseKeys.map(key => {
      const course = fakeData.find(c => c._id === key)
      course.quantity = saveCart[key];
      return course;
    });
    setSelectedCourse(cartCourses)
  },[])
  const handleSelectCourse = course =>{
    const sameCourse = selectedCourse.find(c => c.index === course.index);
    // console.log(sameCourse)
    let newCart ;
    let count = 1;
    if(sameCourse){
      count = sameCourse.quantity + 1;
      sameCourse.quantity = count;
      const others = selectedCourse.filter(c => c.index !== course.index);
      newCart = [...others, sameCourse]
    }
    else{
      course.quantity = 1;
      newCart = [...selectedCourse, course]
    }
    setSelectedCourse(newCart);
    addToDatabaseCart(course._id, count)
  }

  const handleRemoveCourse = item => {
    const courseItems = selectedCourse.filter(course => course._id !== item._id);
    setSelectedCourse(courseItems)
    removeFromDatabaseCart(item._id);
  }

  const removeItemFromCart = (item) => {
    const sameCourse = selectedCourse.find(c => c._id === item._id);

    let newCart;

    if(sameCourse.quantity === 1){
      const courses = selectedCourse.filter(c => c.index !== item.index);
      setSelectedCourse(courses)
      removeFromDatabaseCart(item._id)
    }
    else{
      sameCourse.quantity = sameCourse.quantity - 1;
      const others = selectedCourse.filter(c => c.index !== item.index);
      newCart = [...others, sameCourse]
      setSelectedCourse(newCart);
      addToDatabaseCart(sameCourse._id, sameCourse.quantity)
    }
    
  }
  // console.log(user)
  const totalCourses = selectedCourse.reduce((sum, course)=> sum + course.quantity,0);
  return (
    <myContext.Provider value={[handleSignInWithGoogle, handleSignOut, user]}>
      <Router>
        <Navbar totalCourses={totalCourses} selectedCourse={selectedCourse}/>
        <Switch>
        <Route exact path="/">
        <Baner/>
         <div className="container mr-5">
           <h1 className="text-center my-3 text-primary">Our best and awesome courses </h1>
         <GridView showButton={false} courses={courses}/>
         </div>
        </Route>
        <PrivateRoute path="/checkout"> 
        <CheckOut 
        selectedCourse={selectedCourse} 
        handleSelectCourse={handleSelectCourse} 
        handleRemoveCourse={handleRemoveCourse}
        removeItemFromCart={removeItemFromCart}
        />
        </PrivateRoute>
        <Route exact path="/AllCourses">
          <MainArea handleSelectCourse={handleSelectCourse}/>
        </Route>
        <Route path="/AllCourses/:id">
          <CourseDetails totalCourses={totalCourses} handleSelectCourse={handleSelectCourse} removeItemFromCart={removeItemFromCart}/>
        </Route>
        <Route path="/login">
          <SignInSignUp handleSignInWithEmailAndPassword = {handleSignInWithEmailAndPassword} createUser={createUser}/>
        </Route>
        </Switch>
        <CountArea/>
      </Router>
      
    </myContext.Provider>
  );
}

export default App;
