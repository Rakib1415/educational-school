import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../../App';
import './CustomLink.css'

const CustomLink = ({children, path, linkStyle}) => {
    const [,handleSignOut,] = useContext(myContext);
    return (
        <>
        <Link onClick={children === 'LogOut' && handleSignOut}
        to={path}
        className={`${linkStyle==="navbar-brand" ? "logo navbar-brand": "nav-link link"}`}
        >
        {children}
        </Link>    
        </>
    );
};

export default CustomLink;