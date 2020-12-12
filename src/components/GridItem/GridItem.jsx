import React from 'react';
import './GridItem.css';
import cardImg from '../assets/cardImg.png';
import {Link} from 'react-router-dom'

const GridItem = (props) => {
    const {title, category, price, _id} = props.course;
    // console.log(_id)
    return (
       <li className="card card-area m-1">
          <div className="card-inner-area">
          <Link className="img-link" to={`/AllCourses/${_id}`}>
               <img className="card-image-top" src={cardImg} alt="img"/>
           </Link>
            {
                props.showButton &&  <button onClick={()=> props.addToSelectItem(props.course)} className="btn custom-btn">Enroll Now</button>
            }
           </div>
           <div className="card-body">
               <Link to={`/AllCourses/${_id}`}>
                <h5 className="card-title title" title={category}>{title}</h5>
               </Link>
               <span className="price">
                  {price}
               </span>
           </div>
           
       </li>
    );
};

export default GridItem;