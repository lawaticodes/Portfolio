import React from 'react';
import { MenuOutlined } from '@ant-design/icons';

import Menu from './Menu.js';

import './App.css';


class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false,
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
        </div>
      </div>
    );
  };
};

export default Portfolio;

// "linear-gradient(135deg, rgba(247,141,229,1) 8%, rgba(223,170,247,1) 52%, rgba(210,159,245,1) 91%)"
