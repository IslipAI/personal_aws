import React, { Component } from 'react';
import '../mainscroller/Mainscroller.css';

//Components
import Footer from '../footer/Footer'; 

//Pages 
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Skills from '../pages/skills/Skills';

export default class MainScroller extends Component {
    render() {
        return (
            <div className="mainScroller">
                    <Home/>
                    <About/>
                    <Skills/>
                    <Contact/>
                    <Footer/>
            </div>
        )
    }
}