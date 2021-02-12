import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Project extends Component {
  render() {
    const { id, title, role, description, project_url, skill } = this.props;

    return (
      <div className="padding">
        <Card className="single-project">
          <Card.Img className="portfolio-image" src={project_url} />
          <Card.Title className="portfolio-title"><h4>{title}</h4></Card.Title>
          <Card.Text className="portfolio-description">
            {description}
            {skill}
          </Card.Text>
        </Card>
      </div>
    );
  }
}

export default Project;
