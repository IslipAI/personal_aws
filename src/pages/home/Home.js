import React, { Component } from 'react';
import './Home.css'


class Home extends Component{
    render(){
        return(
            <div className="home">
                <div className="homeContent">

                    <div className="hello">
                        <h1>Hello<br/>I'm Alex,<br/>fullstack developer.</h1>
                    </div>

                    {/* <div class="homeAnimation">
                        {<IslipThree/> }
                    </div> */}
                </div>
            </div>
        )
    }
}
export default Home;