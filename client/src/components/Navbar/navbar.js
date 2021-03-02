import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Container,
  Navbar,
  Nav
} from 'react-bootstrap';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignUpModal from '../Modal/singUpModal';


const Navs = (props) => {
  const [toggleNav, setToggleNav] = useState(false);
  const [modal, setModal] = useState(false);

  //FUNCTIONS TO HOOKS
  const toggleModal = () => setModal(!modal);
  const closeModal = () => setModal(false);

  const setNavExpanded = (expanded) => {
    setToggleNav(expanded);
  };

  const closeNav = () => {
    setToggleNav(false);
  };

  //Hidden Links
  const authLinks = (route, title) => {
    return <NavLink to={route} className='portfolio-manager'>{title}</NavLink>;
  };

  return (
    <div>
      <Container fluid>
        <Navbar bg="light" expand="md" expanded={toggleNav} className="row">
          <Navbar.Toggle
            onClick={() => setToggleNav(toggleNav ? false : 'expanded')}
          />
          <Navbar.Collapse id="nav-toggle" className="text-center navigation">
            <Nav className="mr-auto">
              <NavLink
                to="/"
                onClick={() =>
                  setTimeout(() => {
                    setToggleNav(false);
                  }, 150)
                }
                activeClassName="item"
                className='link'
              >
                <h4>home</h4>
              </NavLink>
              <NavLink
                to="/about"
                onClick={() =>
                  setTimeout(() => {
                    setToggleNav(false);
                  }, 150)
                }
                activeClassName="item"
                className='link'
              >
                <h4>About</h4>
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() =>
                  setTimeout(() => {
                    setToggleNav(false);
                  }, 150)
                }
                activeClassName="item"
                className='link'
              >
                <h4>Contact</h4>
              </NavLink>
              <NavLink
                to="/cars"
                onClick={() =>
                  setTimeout(() => {
                    setToggleNav(false);
                  }, 150)
                }
                activeClassName="item"
                className='link'
              >
                <h4>Collection</h4>
              </NavLink>
            </Nav>
          </Navbar.Collapse>

          {props.loggedInStatus === true ? (
            authLinks('./collectorFormPage', 'Add a car')
          ) : (
            <Link to="/" onClick={toggleModal} className="login-link-login">
              <i className="fas fa-sign-in-alt"></i>
            </Link>
          )}

          <Navbar.Brand>
            {props.loggedInStatus === true ? (
              <Link to='/' className='logout-link' onClick={props.logOut}>
                <i className="logout fas fa-sign-out-alt"></i>
              </Link>
            ) : (
              <div className="nav-brand brand">Prototype47</div>
            )}
          </Navbar.Brand>
        </Navbar>
      </Container>
      <SignUpModal
        modalState={modal}
        escModal={toggleModal}
        close={closeModal}
      />
    </div>
  );
};


export default Navs;
