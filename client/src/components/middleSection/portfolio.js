import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Project from './projectItem';

class PortfolioGrid extends Component {
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    return (
      <div className="list-of-projects grid">
        {this.props.projects.map((item, key) => {
          return <div className='list-of-projects__cards'><Project key={key} {...item} /></div>;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { projects } = state.projects;
  return {
    projects
  };
}
PortfolioGrid = connect(mapStateToProps, actions)(PortfolioGrid);
export default PortfolioGrid;
