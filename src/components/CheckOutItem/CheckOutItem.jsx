import React from 'react';
import './CheckOutItem.css';
import cardImg from '../assets/cardImg.png'

const CheckOutItem = ({course, removeItemFromCart, handleSelectCourse, handleRemoveCourse}) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={cardImg} alt=""/>
            </div>
            <span className="name">{course.title}</span>
            <span className="quantity">
                <div onClick={() => removeItemFromCart(course)} className="arrow">&#10094;</div>
                <span className="value">{course.quantity}</span>
                <div onClick={()=> handleSelectCourse(course)} className="arrow">&#10095;</div>
            </span>
            <span className="price">{course.price}</span>
            <div onClick={()=> handleRemoveCourse(course)} className="remove-button">
                &#10005;
            </div>
        </div>
    );
};

export default CheckOutItem;