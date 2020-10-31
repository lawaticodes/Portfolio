import React from 'react';

import './about.css';


class About extends React.Component {
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
        <div className="about-header">
          <p>FULL NAME</p>
        </div>
        <div>
          <div className="description">
            <p>{placeholderText}</p>
          </div>
        </div>
      </div>
    );
	};
};

export default About;
