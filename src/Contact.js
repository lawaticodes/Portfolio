import React from 'react';
import { Input } from 'antd';

import './Contact.css';


class Contact extends React.Component {
	render() {
    return(
      <div className="contact-form">
        <div className="contact-header">
          <p>GET IN TOUCH</p>
        </div>
        <div className="contact-content">
          <div className="prompts">
            <p>NAME:</p>
            <p>MOBILE:</p>
            <p>EMAIL:</p>
            <p>MESSAGE:</p>
          </div>
          <div className="inputs">
            <Input className="personal-info" placeholder="Please enter your full name"/>
            <Input className="personal-info" placeholder="Please enter your modile number"/>
            <Input className="personal-info" placeholder="Please enter your email address"/>
            <Input className="message" placeholder="Please enter a message"/>
          </div>
        </div>
        <div>
          <p>SEND</p>
        </div>
      </div>
    );
	};
};

export default Contact;
