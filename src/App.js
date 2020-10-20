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
    let appBackgroundColor;

    if (this.state.menuIsOpen) {
      content = <Menu/>;
      appBackgroundColor = "black";
    } else if (this.state.contactIsOpen) {
      content = <Contact/>;
      appBackgroundColor = "white";
    } else {
      content = "";
      appBackgroundColor = "black";
    }

    return (
      <div className="main-body" style={{backgroundColor: appBackgroundColor}}>
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
