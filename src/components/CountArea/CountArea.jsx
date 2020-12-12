import React from 'react';
import {useCountUp} from 'react-countup';
import './CountArea.css'

const CountArea = () => {
    const {countUp, start} = useCountUp({
        end:1000,
        duration:5,
        startOnMount: false
    })

    const countStarting = () => {
        if(window.scrollY > 1500){
            // console.log('Start countUp')
            start();
        }
    }
    
        window.addEventListener('scroll', countStarting)
   
    return (
        <div className="count-area">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="countUp d-flex justify-content-center align-items-center">
                                <div className="icon">
                                    <span className="flat-icon">
                                    <i class="fas fa-user-graduate"></i>
                                    </span>
                                </div>
                                <div className="text">
                                    <h3>
                                       {countUp}
                                    </h3>
                                    <h4>ONLINE COURSES</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="countUp d-flex align-item-center">
                                <div className="icon">
                                    <span className="flat-icon">
                                    <i class="fas fa-user-graduate"></i>
                                    </span>
                                </div>
                                <div className="text">
                                    <h3>{countUp}</h3>
                                    <h4>STUDENTS ENROLLED</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="countUp d-flex align-item-center">
                                <div className="icon">
                                    <span className="flat-icon">
                                    <i class="fas fa-user-graduate"></i>
                                    </span>
                                </div>
                                <div className="text">
                                    <h3>{countUp}</h3>
                                    <h4>EXPERTS INSTRUCTORS</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="countUp d-flex align-item-center">
                                <div className="icon">
                                    <span className="flat-icon">
                                    <i class="fas fa-user-graduate"></i>
                                    </span>
                                </div>
                                <div className="text">
                                    <h3>{countUp}</h3>
                                    <h4>HOURS CONTENT</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountArea;