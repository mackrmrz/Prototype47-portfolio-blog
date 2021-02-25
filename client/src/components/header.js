import React from "react";
import { Link } from "react-router-dom";
import PortfolioGrid from "./middleSection/portfolio";


const Showcase = () => {
    
    return(
        <div className='landing-page'>
            <header className="showcase">
                <div className="showcase-inner">
                    <div className="about-container container">
                        <div className="image img-fluid">
                        </div>
                        <div className='ro'>
                            <h2 className='col-sm-12'>Hi My Name is Javier Quesada</h2>
                            <p className='text-align-center'>
                               This is my story
                            </p>
                        </div>
                        <Link to="/about"  className='btn'>Read More</Link>
                    </div>
                </div>
            </header>
            <PortfolioGrid/>
        </div>
    )
}


export default Showcase;