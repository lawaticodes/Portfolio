import React from 'react';
import { MenuOutlined } from '@ant-design/icons';

import About from './about.js';
import Menu from './menu.js';
import WorkExperience from './work_experience.js';

import './App.css';


const about = "About";
const workExperience = "Work Experience";


class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false,
      displayPage: about,
    };
    this.clickMenu = this.clickMenu.bind(this);
  };

  clickMenu() {
    if (this.state.menuIsOpen) {
      this.setState({menuIsOpen: false});
    } else {
      this.setState({menuIsOpen: true});
    }
  };

  render() {
    let content;
    let appBackground;

    if (this.state.menuIsOpen) {
      content = <Menu/>;
      appBackground = "linear-gradient(135deg, rgba(247,141,229,1) 5%, rgba(223,170,247,1) 50%, rgba(210,159,245,1) 80%)";
    } else {
      if (this.state.displayPage === workExperience) {
        content = <WorkExperience/>;
        appBackground = "linear-gradient(135deg, rgba(247,141,229,1) 8%, rgba(223,170,247,1) 52%, rgba(210,159,245,1) 91%)";
      } else {
        content = <About/>;
        appBackground = "linear-gradient(135deg, rgba(247,141,229,1) 6%, rgba(223,170,247,1) 41%, rgba(210,159,245,1) 74%)";
      }
    }

    return (
      <div className="main-body" style={{background: appBackground}}>
        <div className="left-nav">
          <MenuOutlined className="icon-link" onClick={this.clickMenu}/>
        </div>
        <div className="inner-body">
          {content}
        </div>
        <div className="right-nav">
        </div>
      </div>
    );
  };
};

export default Portfolio;
