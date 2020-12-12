import React from 'react';
import {coursesCategory} from '../../courses/index'
import CategoryItem from '../CategoryItem/CategoryItem';

const CourseCategories = ({category, totalCourse, changeCategory}) => {
    return (
        <div className="list-group" id="list-tab" role="tablist">
            {
                Object.keys(coursesCategory).map(c => (
                    <CategoryItem key={c} item={coursesCategory[c]} category={category} changeCategory={changeCategory} totalCourse={totalCourse}/>
                ))
            }
            
        </div>
    );
};

export default CourseCategories;