import React from 'react';
import CartItem from '../CartItem/CartItem';
import CategoryItem from '../CategoryItem/CategoryItem';
import './CartDropDown.css'
import {withRouter} from 'react-router-dom'
const CartDropDown = ({selectedCourse, toggleDropDown, history}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    selectedCourse.length ? (selectedCourse.map(course => <CartItem key={course._id} course={course}/>)
                    ): (<h5>Your Cart is Empty</h5>)
                }
            </div>
            <button onClick={() => {
                history.push("/checkout");
                toggleDropDown();
                }} className="btn btn-primary">Go To CheckOut</button>
        </div>
    );
};

export default withRouter(CartDropDown);