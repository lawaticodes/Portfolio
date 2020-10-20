import React from 'react';
import { MenuOutlined, MailOutlined } from '@ant-design/icons';

import Menu from './Menu.js';
import Contact from './Contact.js';

import './App.css';


class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false,
      contactIsOpen: false,
    };
    this.clickMenu = this.clickMenu.bind(this);
    this.clickContact = this.clickContact.bind(this);
  };

  clickMenu() {
    if (this.state.menuIsOpen) {
      this.setState({menuIsOpen: false});
    } else {
      this.setState({menuIsOpen: true});
    }
  };

  clickContact() {
    if (this.state.contactIsOpen) {
      this.setState({contactIsOpen: false});
    } else {
      this.setState({contactIsOpen: true});
    }
  };

  render() {
    let content;
    let appBackground;

    if (this.state.menuIsOpen) {
      content = <Menu/>;
      appBackground = "linear-gradient(135deg, rgba(247,141,229,1) 6%, rgba(223,170,247,1) 41%, rgba(210,159,245,1) 74%)";
    } else if (this.state.contactIsOpen) {
      content = <Contact/>;
      appBackground = "linear-gradient(135deg, rgba(247,141,229,1) 6%, rgba(223,170,247,1) 41%, rgba(210,159,245,1) 74%)";
    } else {
      content = "";
      appBackground = "linear-gradient(135deg, rgba(247,141,229,1) 6%, rgba(223,170,247,1) 41%, rgba(210,159,245,1) 74%)";
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
          <MailOutlined className="icon-link" onClick={this.clickContact}/>
        </div>
      </div>
    );
  };
};

export default Portfolio;
