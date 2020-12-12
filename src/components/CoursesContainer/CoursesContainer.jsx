import React, {useState} from 'react';
import Controllers from '../Controllers/Controllers';
import ViewCourses from '../ViewCourses/ViewCourses';
import './CoursesContainer.css'

const CoursesContainer = ({view, select, selectChange, changeView, courses, visible, loadMore, addToSelectItem}) => {
    // console.log(courses)
    
    return (
        <div>
            <Controllers
             changeView={changeView}
             select={select}
             selectChange={selectChange}
             />
            <hr/>
            <ViewCourses 
            view={view} 
            visible={visible} 
            loadMore={loadMore} 
            changeView={changeView} 
            courses={courses}
            addToSelectItem={addToSelectItem}
            />
        </div>
    );
};

export default CoursesContainer;