import React from "react";
import { Link } from "react-router-dom";
import PortfolioGrid from "./middleSection/portfolio";


const Showcase = () => {
    
    return(
        <div className='landing-page'>
            <header className="showcase">
                <div className="container showcase-inner">
                    <div className="about-container">
                        <div className="image">
                        </div>
                    </div>
                    <h1>Hi My Name is Javier Quesada</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Velit accusantium et nam, quibusdam ad dignissimos neque mollitia labore rerum tempora temporibus voluptas magni? 
                        Magnam consectetur iusto hic ipsum neque fugiat.
                    </p>
                    <Link to="/about"  className='btn'>Read More</Link>
                </div>
            </header>
            <PortfolioGrid/>
        </div>
    )
}


export default Showcase;