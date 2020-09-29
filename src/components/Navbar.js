import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import './Navbar.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Navbar() {
    const [clicked, setClicked] = useState(false);
    function handleClick(e){
        
        setClicked(!clicked);
    }
    return (
        <div className="navbar">
            <div className="navbar_inner">

                <div className="navbar_logo"><Link className="navbar_link" to="/">Detailing</Link>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    {clicked? <CloseIcon className="icon"></CloseIcon> : <MenuIcon className="icon"></MenuIcon>}
                
                </div>
                <div className={clicked? "navbar_buttons active": "navbar_buttons"} onClick={handleClick}>
                    <Link className="navbar_link" to="/">Home</Link>
                    <Link className="navbar_link" to="/services">Services</Link>
                    <Link className="navbar_link" to="/products">Products</Link>
                    <Link className="navbar_link signup" to="/login">Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
