import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='container'>
          <footer className='row'>
            <div className='header col-md-auto'>
              {/* copywright logo */}
              Copywright Prototype47
            </div>
            <div className='social-media-icons col-md-auto'>
              <Link to='/cars'>
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to='/twitter'>
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to='/youtube'>
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
        </footer>
        </div>
      </div>
    )
  }
}

export default Footer;
