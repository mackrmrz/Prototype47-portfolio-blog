import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import store from '../../store';
import {
  Container,
  Navbar,
  Nav,
  Modal,
  Form,
  ModalBody,
  Button
} from 'react-bootstrap';
import SignUpModal from '../Modal/singUpModal';
import CollectorFormPage from '../carsCollection/collectorFormPage';

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
                <h4>Blog</h4>
              </NavLink>
            </Nav>
          </Navbar.Collapse>

          {props.loggedInStatus === true ? (
            authLinks('./collectorFormPage', 'Add a car')
          ) : (
            <Link to="/" onClick={toggleModal} className="login-link__login">
              <h4>Login</h4>
            </Link>
          )}

          <Navbar.Brand>
            {props.loggedInStatus === true ? (
              <Link onClick={props.logOut}>Logout</Link>
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

// Navs = connect(null, actions)(Navs);
export default Navs;
