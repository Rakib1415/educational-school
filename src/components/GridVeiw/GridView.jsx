import React, {useState} from 'react';
import GridItem from '../GridItem/GridItem';
import './GridView.css'

const GridView = ({courses, showButton, addToSelectItem}) => {
    return (
            <div className="grid-view">
                <ul className="d-flex flex-wrap mb-2">
                {
                    courses.map(course => (
                        <GridItem key={course.id} showButton={showButton} course={course} addToSelectItem={addToSelectItem}/>
                    ))
                }
                </ul>
            </div>
    );
};

export default GridView;