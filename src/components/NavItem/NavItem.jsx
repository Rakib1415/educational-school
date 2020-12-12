import React, {useContext} from 'react';
import { myContext } from '../../App';
import CustomLink from '../CustomLink/CustomLink';
import './NavItem.css'

const NavItem = ({item}) => {
    const [,,user] = useContext(myContext)
    // console.log(user)
    if(item === 'Login'){
        item = user.isSignIn ? 'LogOut' : 'Login'
   }
    return (
        <>
        <li className="nav-item" style={{padding:"0px 30px"}}>
            <CustomLink  linkStyle="nav-link" path={item==='Home' ? '/' : `/${item.replace(/\s/g, '')}`}>
                {item}
            </CustomLink>
        </li>
        </>
    );
};

export default NavItem;