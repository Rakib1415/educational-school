import React from 'react';
import './ListItem.css';
import cardImg from '../assets/cardImg.png'

const ListItem = ({course, addToSelectItem}) => {
    const {title, price, category, description} = course
    return (
        <li className="card list-area m-1">
            <div className="course-list">
            <div className="img-container">
            <a href="#">
             <img className="card-image-top" src={cardImg} alt="img"/>
            </a>
            <button onClick={() => addToSelectItem(course)} className="btn awesome-btn">Enroll Now</button>
         </div>
         <div className="card-body">
             <a href="#">
              <h5 className="card-title title" title={category}>{title}</h5>
             </a>
              <p className="description">{description}</p>
             <span className="price">
                {price}
             </span>
         </div>
            </div>
         
     </li>
    );
};

export default ListItem;