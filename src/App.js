import { MenuOutlined, MailOutlined } from '@ant-design/icons';
import React from 'react';

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

    if (this.state.menuIsOpen) {
      content = "";
    } else if (this.state.contactIsOpen) {
      content = "";
    } else {
      content = "";
    }

    return (
      <div className="main-body">
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
