import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './Navbar.css'
import {Link} from "react-scroll";


class Navbar extends Component{

    render(){
        return(
            <nav className="container">
                <ul className="navbar">
                    <li>
                        <Link activeClass="active" to="home" spy={true} smooth={true}><i className="fas fa-home"></i></Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="about" spy={true} smooth={true}><i className="far fa-user"></i></Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="skills" spy={true} smooth={true}><i className="fas fa-hammer"></i></Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="contact" spy={true} smooth={true}><i className="far fa-envelope"></i></Link>
                    </li> 
                </ul>
            </nav>
        )
    }
}

export default Navbar;