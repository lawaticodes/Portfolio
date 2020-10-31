import React from 'react';

import './menu.css';


class Menu extends React.Component {
	render() {
    return(
      <div>
        <div className="menu-header">
          <p className="title">MENU</p>
        </div>
        <div className="menu-content">
          <p className="icon-link" onClick={this.props.clickAbout}>ABOUT</p>
          <p className="icon-link" onClick={this.props.clickWorkExperience}>SOFTWARE ENGINEERING WORK EXPERIENCE</p>
          <p className="icon-link" onClick={this.props.clickEducation}>FORMAL EDUCATION</p>
          <p className="icon-link" onClick={this.props.clickProjects}>PERSONAL PROJECTS AND SELF STUDY</p>
          <p className="icon-link" onClick={this.props.clickOther}>OTHER WORK EXPERIENCE & EXTRACURRICULAR ACHIEVEMENTS</p>
        </div>
      </div>
    );
	};
};

export default Menu;
