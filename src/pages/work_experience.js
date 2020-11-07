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
      <div className="work-experience">
        <div className="header">
          <p>SOFTWARE ENGINEERING WORK EXPERIENCE</p>
        </div>
        <div className="listings">
          <div className="listing">
            <h3>LANGUAGES</h3>
            <p>Python</p>
          </div>
          <div className="listing">
            <h3>FRAMEWORKS</h3>
            <p>Django</p>
          </div>
        </div>
        <div className="listings">
          <div className="listing">
            <h3>DATABASES</h3>
            <p>PostgreSQL</p>
          </div>
          <div className="listing">
            <h3>LIBRARIES</h3>
            <p>Pandas</p>
          </div>
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
          <p>{placeholderText}</p>
        </div>
        <div className="experience last-experience">
          <div>
            <div className="company-name">
              <p>COMPANY NAME</p>
            </div>
            <div className="date">
              <p>Jan 19 - Dec 19</p>
            </div>
          </div>
          <p>{placeholderText}</p>
        </div>
      </div>
    );
	};
};

export default WorkExperience;
