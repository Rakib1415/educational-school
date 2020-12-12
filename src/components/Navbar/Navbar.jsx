import React, {useState} from 'react';
import Navs from "../../nav";
import CustomLink from '../CustomLink/CustomLink';
import NavItem from '../NavItem/NavItem';
import './Navbar.css'

import {ReactComponent as ShoppingIcon} from  '../assets/11.2 shopping-bag.svg.svg'
import CartDropDown from '../CartDropDrown/CartDropDown';

const NavbarPractice = ({totalCourses, selectedCourse}) => {
    const [navbar, setNavbar] = useState(false);
    const [dropDown, setDropDown] = useState(false)

    const toggleDropDown = () => {
        setDropDown(!dropDown);
    }

    

    const changeBackground = () => {
        // console.log(window.scrollY)
        if(window.scrollY >= 60){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    // console.log(navbar)
    window.addEventListener("scroll", changeBackground);
    return (
        <nav className={`navbar navbar-expand-md navbar-light sticky-top ${navbar ? "bg-primary": ""}`}>
         <div className="container">
         <CustomLink linkStyle="navbar-brand" path="/"><i class="fas fa-graduation-cap"></i> OnlineEducation</CustomLink>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="myNav">
                <ul className="navbar-nav ml-auto">
                    {
                        Object.keys(Navs).map(item => (
                            <NavItem
                            key={item}
                            item={Navs[item]}
                            />
                        ))
                    }
                       <li className="nav-item" style={{padding:"0px 30px"}}>
                            <CustomLink  linkStyle="nav-link">
                                <div onClick={toggleDropDown} className="cart-icon">
                                    <ShoppingIcon className="shopping-icon"/>
                                    <span className="item-count">{totalCourses}</span>
                                </div>
                             </CustomLink>
                         </li>
                </ul>
            </div>
            {
                dropDown ? (<CartDropDown toggleDropDown={toggleDropDown} selectedCourse={selectedCourse}/>) : null
            }
         </div>
        </nav>
    );
};

export default NavbarPractice;