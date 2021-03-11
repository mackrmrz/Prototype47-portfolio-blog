import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Project from './projectItem';

class PortfolioGrid extends Component {
  componentDidMount() {
    this.props.getProjects();
  }


  render() {
    return (
      <div className="list-of-projects grid container">
        <div className="row align-items-center">
          {this.props.projects.map((item, id) => {
            return (
              <div className="list-of-projects-card cards col-lg-4 col-md-6">
                <Project key={id} {...item} />
              </div>
            );
          })}
        </div>
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
