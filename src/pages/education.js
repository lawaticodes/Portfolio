import React from 'react';

import './education.css';


class Education extends React.Component {
	render() {
    return(
      <div className="education">
        <div className="header">
          <p>FORMAL EDUCATION</p>
        </div>
        <div className="qualification">
          <div>
            <div className="institution">
              <p>UNDERGRADUATE DEGREE</p>
            </div>
            <div className="date">
              <p>Jan 19 - Dec 19</p>
            </div>
          </div>
          <div className="qualifications">
            <p>BA PHILOSOPHY: 1st</p>
          </div>
        </div>
        <div className="qualification">
          <div>
            <div className="institution">
              <p>A-LEVELS</p>
            </div>
            <div className="date">
              <p>Jan 19 - Dec 19</p>
            </div>
          </div>
          <div className="qualifications">
            <p>Maths: A*</p>
          </div>
        </div>
        <div className="qualification gcses">
          <div>
            <div className="institution">
              <p>GCSES</p>
            </div>
            <div className="date">
              <p>Jan 19 - Dec 19</p>
            </div>
          </div>
          <div className="qualifications">
            <p>Maths: A*</p>
          </div>
        </div>
      </div>
    );
	};
};

export default Education;
