import React from 'react';

import './work_experience.css';


class WorkExperience extends React.Component {
	render() {
    let placeholderText = `Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
       ut aliquip ex ea commodo consequat. Duis aute irure dolor in
       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
       culpa qui officia deserunt mollit anim id est laborum.`;

    return(
      <div>
        <div className="header">
          <p>SOFTWARE ENGINEERING WORK EXPERIENCE</p>
        </div>
        <div>
          <div className="languages">
            <p>Python</p>
          </div>
          <div className="frameworks">
            <p>Django</p>
          </div>
          <div className="databases">
            <p>PostgreSQL</p>
          </div>
          <div className="libraries">
            <p>Pandas</p>
          </div>
        </div>
        <div>
          <p>COMPANY NAME</p>
          <p>Jan 19 - Dec 19</p>
          <p>{placeholderText}</p>
        </div>
      </div>
    );
	};
};

export default WorkExperience;
