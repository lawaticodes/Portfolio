import React from 'react';

import './Menu.css';


class Menu extends React.Component {
	render() {
    return(
      <div className="menu">
        <div className="menu-header">
          <p className="text">MENU</p>
        </div>
        <div>
          <p>ABOUT</p>
          <p>SOFTWARE ENGINEERING WORK EXPERIENCE</p>
          <p>PROJECTS</p>
          <p>SELF STUDY</p>
          <p>FORMAL EDUCATION</p>
          <p>OTHER WORK EXPERIENCE & EXTRACURRICULAR ACHIEVEMENTS</p>
        </div>
      </div>
    );
	};
};

export default Menu;
