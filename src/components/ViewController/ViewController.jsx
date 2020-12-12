import React from 'react';
import './ViewController.css'

const ViewController = ({changeView}) => {
    return (
            <>
                <button title="gird-view" onClick={()=> changeView("grid-view")} className="icon btn"><i className="fas fa-th-large"></i></button>
                <button title="list-view" onClick={()=> changeView("list-view")} className="icon btn"><i className="fas fa-list"></i></button>
            </>
    );
};

export default ViewController;