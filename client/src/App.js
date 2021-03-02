import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//COMPONENTS
import Showcase from "./components/header";
import Navbar from "./components/Navbar/navbar";
import AboutMe from "./components/about";
import ContactPage from "./components/contact/contactPage";
import CarsCollector from "./components/carsCollection/carsCollection";
import CollectorFormPage from "./components/carsCollection/collectorFormPage";
import Footer from "./components/footer/footer";

//ACTIONS
import store from "./store";
import { userLoad } from "./actions/userAction";
import { connect } from "react-redux";
import * as actions from './actions'
import history from './history';


class App extends Component {
  componentDidMount() {
    store.dispatch(() => userLoad());
  }

  authRoute = () =>{
    return [<Route path='/collectorFormPage' component={CollectorFormPage}/> ]
  }

  render() {
    return (
      <div className="app">
        <Router history={history}>
          <Navbar loggedInStatus={this.props.isValidated} logOut={() => {this.props.logout()}}/>
          <Switch>
            <Route exact path="/" component={Showcase} />
            <Route path="/cars" component={CarsCollector} />
            <Route path='/about' component={AboutMe}/>
            { this.props.isValidated === true ? this.authRoute() : null}
            <Route path="/contact" component={ContactPage} />
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isValidated: state.user.isValidated
  }
};

export default connect(mapStateToProps, actions)(App);
