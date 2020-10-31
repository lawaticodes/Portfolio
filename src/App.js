import React from 'react';
import { MenuOutlined } from '@ant-design/icons';

import About from './pages/about.js';
import Education from './pages/education.js';
import Menu from './navigation/menu.js';
import Projects from './pages/projects.js';
import WorkExperience from './pages/work_experience.js';

import './App.css';


const about = "About";
const workExperience = "Work Experience";
const education = "Education";
const projects = "Projects";


class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false,
      displayPage: about,
    };
    this.closeMenu = this.closeMenu.bind(this);
    this.clickMenu = this.clickMenu.bind(this);
    this.clickAbout = this.clickAbout.bind(this);
    this.clickWorkExperience = this.clickWorkExperience.bind(this);
    this.clickEducation = this.clickEducation.bind(this);
    this.clickProjects = this.clickProjects.bind(this);
  };

  closeMenu() {
    this.setState({menuIsOpen: false});
  };

  clickMenu() {
    if (this.state.menuIsOpen) {
      this.closeMenu();
    } else {
      this.setState({menuIsOpen: true});
    }
  };

  clickAbout() {
    this.setState({displayPage: about});
    this.closeMenu();
  };

  clickWorkExperience() {
    this.setState({displayPage: workExperience});
    this.closeMenu();
  };

  clickEducation() {
    this.setState({displayPage: education});
    this.closeMenu();
  };

  clickProjects() {
    this.setState({displayPage: projects});
    this.closeMenu();
  };

  render() {
    let content;
    let appBackground;

    if (this.state.menuIsOpen) {
      content = <Menu displayPage={this.state.displayPage} clickAbout={this.clickAbout} clickWorkExperience={this.clickWorkExperience} clickEducation={this.clickEducation} clickProjects={this.clickProjects}/>;
      appBackground = "linear-gradient(135deg, rgba(247,141,229,1) 5%, rgba(223,170,247,1) 50%, rgba(210,159,245,1) 80%)";
    } else {
      if (this.state.displayPage === workExperience) {
        content = <WorkExperience/>;
        appBackground = "linear-gradient(135deg, rgba(247,141,229,1) 8%, rgba(223,170,247,1) 52%, rgba(210,159,245,1) 91%)";
      } else if (this.state.displayPage === education) {
        content = <Education/>;
      } else if (this.state.displayPage === projects) {
        content = <Projects/>;
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
