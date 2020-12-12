import React from 'react';
import CheckOutItem from '../CheckOutItem/CheckOutItem';
import './CheckOut.css'

const CheckOut = ({selectedCourse, removeItemFromCart, handleSelectCourse, handleRemoveCourse}) => {

    const totalPrice = selectedCourse.reduce((sum, course)=> sum + course.quantity*parseInt(course.price.replace(/\$|,/g, '')), 0)
    return (
        <div className="container">
            <div className="checkout-page">
                <div className="checkout-header">
                    <div className="header-block">
                        <span>Product</span>
                    </div>
                    <div className="header-block">
                        <span>Description</span>
                    </div>
                    <div className="header-block">
                        <span>Quantity</span>
                    </div>
                    <div className="header-block">
                        <span>Price</span>
                    </div>
                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </div>
                {
                    selectedCourse.map(course => (
                        <CheckOutItem 
                        key={course.id} 
                        course={course} 
                        handleSelectCourse={handleSelectCourse} 
                        handleRemoveCourse={handleRemoveCourse}
                        removeItemFromCart={removeItemFromCart}
                        />
                    ))
                }
                <div className="total">
                 <span>Total: ${totalPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;