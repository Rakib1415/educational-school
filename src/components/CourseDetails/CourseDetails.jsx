import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.css'
import fakeData from '../data/index'
import cardImg from '../assets/cardImg.png'
import { getDatabaseCart } from '../utilites/databaseManager';


const CourseDetails = ({totalCourses, handleSelectCourse, removeItemFromCart}) => {
    const {id} = useParams();
    const [course, setCourse] = useState({});
    const [count, setCount] = useState(0);
    
    useEffect(()=> {
        const singleCourse = fakeData.find(c => c._id === id);
        setCourse(singleCourse)
    },[]);
    useEffect(()=> {
        const saveCart = getDatabaseCart();
        const key = Object.keys(saveCart).find(k => k===id);
        // console.log(key, saveCart, id)
        if(key){
            setCount(saveCart[key])
        }else{
            setCount(0)
        }
    },[id]);

    const handleCount = (btnSign) => {
        if(btnSign ==="plus"){
            setCount(count + 1)
        }else{
            setCount(count - 1)
        }
    }

    // console.log(count)
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="img-container">
                        <img src={cardImg} alt="img"/>
                    </div>
                </div>
                <div className="col-md-8">
                   <div className="course-details">
                        <h3 className="text-primary">{course.title}</h3>
                        <p className="text-justify">{course.description}</p>
                        <span>{course.price}</span>
                        <p className="my-3"><button onClick={()=> {handleSelectCourse(course); handleCount("plus")}} className="btn btn-primary"><i class="fas fa-plus"></i></button>
                        <span className="mx-2">{count}</span><button onClick={()=> {removeItemFromCart(course); handleCount("minus")}} className="btn btn-primary" disabled={count === 0 ? true : false}><i class="fas fa-minus"></i></button>
                        </p>
                   </div>

                </div>
            </div>
        </div>
    );
};

export default CourseDetails;