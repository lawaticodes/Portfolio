import React from 'react';

import './Menu.css';


class Menu extends React.Component {
	render() {
    return(
      <div className="menu">
        <div className="menu-header">
          <p>MENU</p>
        </div>
        <div>
          <p>ABOUT</p>
          <p>SOFTWARE ENGINEERING EXPERIENCES</p>
          <p>PROJECTS</p>
          <p>EDUCATION</p>
          <p>OTHER EXPERIENCES & EXTRACURRICULAR ACTIVITIES</p>
        </div>
      </div>
    );
	};
};

export default Menu;
