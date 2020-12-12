import React from 'react';
import './Baner.css'
const Baner = () => {
    return (
        <div className="baner">
            {/* <video
            autoPlay
            loop
            muted
            style={{
                width: "100%",
                zIndex:"-1",
                objectFit:"cover"
            }}
            >
                <source src={myVideo} type="video/mp4"/>
                
            </video> */}

            {/* <img style={{
                width: "100%",
                zIndex:"-1",
                backgroundSize:"cover"
            }} src={bannerImg} alt="banner"/> */}

            <div className="container banner-inner d-flex flex-column justify-content-center">
                <h1 className="title">Online Learning <br/> platform</h1>
                <p>Build skills with courses, certificates, and degree online from world-class universities and companies.</p>
                <div className="button">
                <a href="#" className="btnStyle">join for free</a>
                </div>
            </div>
        </div>
    );
};

export default Baner;