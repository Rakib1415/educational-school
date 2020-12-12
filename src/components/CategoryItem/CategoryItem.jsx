import React from 'react';

const CategoryItem = ({item, category, totalCourse, changeCategory}) => {
    return (
        <>
           <button 
           onClick={() => changeCategory(item)}
           className={`list-group-item list-group-item-action btn ${item === category ? 'active':''}`}>
               <div className="d-flex justify-content-between">
                    <span>{item}</span>
                    {
                        item === category ? (<span class="badge">{totalCourse}</span>) : null
                    }
               </div>
            </button> 
        </>
    );
};

export default CategoryItem;