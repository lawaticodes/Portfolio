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
          <p>PERSONAL PROJECTS AND SELF STUDY</p>
        </div>
        <div className="experience">
          <div>
            <div className="company-name">
              <p>COMPANY NAME</p>
            </div>
            <div className="date">
              <p>Jan 19 - Dec 19</p>
            </div>
          </div>
          <p>Description: {placeholderText}</p>
        </div>
      </div>
    );
	};
};

export default Projects;
