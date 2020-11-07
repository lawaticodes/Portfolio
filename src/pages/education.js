import React from 'react';

import './education.css';


class Education extends React.Component {
	render() {
    return(
      <div className="education">
        <div className="header">
          <p>FORMAL EDUCATION</p>
        </div>
        <div className="degree">
          <h3>UNDERGRADUATE DEGREE</h3>
          <p>BA Philosophy</p>
        </div>
        <div className="a-levels">
          <h3>A-LEVELS</h3>
          <p>Maths</p>
        </div>
        <div className="gcses">
          <h3>GCSES</h3>
          <p>Maths</p>
        </div>
      </div>
    );
	};
};

export default Education;
