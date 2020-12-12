import React from 'react';
import ListItem from '../ListItem/ListItem';

const ListView = ({courses, addToSelectItem}) => {
    return (
        <div className="list-view">
            <ul className="w-100">
                {
                    courses.map(course => (
                        <ListItem addToSelectItem={addToSelectItem} key={course.id} course={course}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default ListView;