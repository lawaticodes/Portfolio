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
            <p>BA PHILOSOPHY</p>
          </div>
        </div>
      </div>
    );
	};
};

export default Education;
