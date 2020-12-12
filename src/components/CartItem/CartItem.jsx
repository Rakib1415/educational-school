import React from 'react';
import './CartItem.css';
import cardImg from '../assets/cardImg.png'
const CartItem = ({course}) => {
    // console.log(course)
        return (
            <div className="cart-item">
                <img src={cardImg} alt="image"/>
                <div className="item-details">
                    <span className="name">{course.title}</span>
                    <span className="price">{course.quantity} X {course.price}</span>
                </div>
            </div>
        );
   
};

export default CartItem;