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
        <div className="header">
          <p>FULL NAME</p>
        </div>
        <div>
          <div className="description">
            <h3>ABOUT</h3>
            <p>{placeholderText}</p>
          </div>
        </div>
        <div className="contact-details">
          <h3>CONTACT DETAILS</h3>
          <p>Mobile: 07123456789</p>
          <p>Email: fullname@example.com</p>
          <p>Location: London, United Kingdom</p>
        </div>
        <div className="links">
          <h3>LINKS</h3>
          <p>LinkedIn: linkedin.com/in/fullname</p>
          <p>GitHub: github.com/fullname</p>
        </div>
      </div>
    );
	};
};

export default About;
