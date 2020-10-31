import React from 'react';

import './about.css';


class About extends React.Component {
	render() {
    return(
      <div>
        <div className="about-header">
          <p className="title">FULL NAME</p>
        </div>
        <div>
          <p>ABOUT</p>
        </div>
      </div>
    );
	};
};

export default About;
