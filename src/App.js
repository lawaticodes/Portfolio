import React from 'react';
import { MenuOutlined } from '@ant-design/icons';

import Education from './pages/education.js';
import Gateway from './pages/gateway.js';
import Menu from './navigation/menu.js';
import Other from './pages/other.js';
import Projects from './pages/projects.js';
import WorkExperience from './pages/work_experience.js';
import About from './pages/about.js';

import './App.css';


const workExperience = "Work Experience";
const education = "Education";
const projects = "Projects";
const other = "Other";
const about = "About";


class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locked: true,
      menuIsOpen: false,
      displayPage: about,
    };
    this.closeMenu = this.closeMenu.bind(this);
    this.clickMenu = this.clickMenu.bind(this);
    this.clickWorkExperience = this.clickWorkExperience.bind(this);
    this.clickEducation = this.clickEducation.bind(this);
    this.clickProjects = this.clickProjects.bind(this);
    this.clickOther = this.clickOther.bind(this);
    this.clickAbout = this.clickAbout.bind(this);
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

  clickOther() {
    this.setState({displayPage: other});
    this.closeMenu();
  };

  clickAbout() {
    this.setState({displayPage: about});
    this.closeMenu();
  };

  render() {
    let content;
    let appBackground;

    if (this.state.menuIsOpen) {
      content = <Menu displayPage={this.state.displayPage} clickAbout={this.clickAbout} clickWorkExperience={this.clickWorkExperience} clickEducation={this.clickEducation} clickProjects={this.clickProjects} clickOther={this.clickOther}/>;
      appBackground = "linear-gradient(135deg, rgba(247,141,229,1) 5%, rgba(223,170,247,1) 50%, rgba(210,159,245,1) 80%)";
    } else {
      if (this.state.displayPage === workExperience) {
        content = <WorkExperience/>;
        appBackground = "linear-gradient(135deg, rgba(247,141,229,1) 8%, rgba(223,170,247,1) 52%, rgba(210,159,245,1) 91%)";
      } else if (this.state.displayPage === education) {
        content = <Education/>;
        appBackground = "linear-gradient(135deg, rgba(247,141,229,1) 11%, rgba(223,170,247,1) 36%, rgba(210,159,245,1) 88%)";
      } else if (this.state.displayPage === projects) {
        content = <Projects/>;
        appBackground = "linear-gradient(135deg, rgba(247,141,229,1) 13%, rgba(223,170,247,1) 67%, rgba(210,159,245,1) 85%)";
      } else if (this.state.displayPage === other) {
        content = <Other/>
        appBackground = "linear-gradient(135deg, rgba(247,141,229,1) 9%, rgba(223,170,247,1) 74%, rgba(210,159,245,1) 93%)";
      } else {
        content = <About/>;
        appBackground = "linear-gradient(135deg, rgba(247,141,229,1) 6%, rgba(223,170,247,1) 41%, rgba(210,159,245,1) 74%)";
      }
    }

    if (this.state.locked) {
      return (
        <Gateway/>
      );
    } else {
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
    }
  };
};

export default Portfolio;
