import React from 'react';

import './projects.css';


class Projects extends React.Component {
	render() {
    let placeholderText = `Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
       ut aliquip ex ea commodo consequat. Duis aute irure dolor in
       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
       culpa qui officia deserunt mollit anim id est laborum.`;

    return(
      <div className="projects">
        <div className="header">
          <p>PERSONAL PROJECTS</p>
        </div>
        <div className="project">
          <div>
            <div className="project-name">
              <p>PROJECT NAME</p>
            </div>
            <div className="date">
              <p>Jan 19 - Dec 19</p>
            </div>
          </div>
          <p>Languages: Python</p>
          <p>Frameworks: Django</p>
          <p>Aim: The aim of this project was to consolidate my Python skills.</p>
          <p>Description: {placeholderText}</p>
          <p>Repository link: linkedin.com/in/fullname</p>
          <p>Demo link: linkedin.com/in/fullname</p>
        </div>
        <div className="project">
          <div>
            <div className="project-name">
              <p>PROJECT NAME</p>
            </div>
            <div className="date">
              <p>Jan 19 - Dec 19</p>
            </div>
          </div>
          <p>Languages: Python</p>
          <p>Frameworks: Django</p>
          <p>Aim: The aim of this project was to consolidate my Python skills.</p>
          <p>Description: {placeholderText}</p>
          <p>Repository link: linkedin.com/in/fullname</p>
          <p>Demo link: linkedin.com/in/fullname</p>
        </div>
        <div className="header">
          <p>SELF STUDY</p>
        </div>
        <div className="project">
          <p>Activity</p>
          <p>{placeholderText}</p>
        </div>
        <div className="project last-project">
          <p>Activity</p>
          <p>{placeholderText}</p>
        </div>
      </div>
    );
	};
};

export default Projects;
