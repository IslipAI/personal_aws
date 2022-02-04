import React, { Component } from 'react';
import './Home.css'


class Home extends Component{
    render(){
        return(
            <div className="home">
                <div className="homeContent">
                        <h1 className='hello'>Hello<br/>I'm Alex,<br/>fullstack developer.</h1>
                </div>
            </div>
        )
    }
}
export default Home;