import React from 'react';
import { Input, Button } from 'antd';

import './Contact.css';


class Contact extends React.Component {
	render() {
    return(
      <div className="contact-form">
        <div className="contact-header">
          <p>CONTACT FORM</p>
        </div>
        <div className="contact-content">
          <div className="prompts">
            <p>NAME:</p>
            <p>MOBILE:</p>
            <p>EMAIL:</p>
            <p>MESSAGE:</p>
          </div>
          <div className="inputs">
            <Input className="input personal-info" placeholder="Please enter your full name."/>
            <Input className="input personal-info" placeholder="Please enter your modile number."/>
            <Input className="input personal-info" placeholder="Please enter your email address."/>
            <Input className="input message" placeholder="Please enter a message."/>
          </div>
        </div>
        <div>
          <Button className="send">Get in touch!</Button>
        </div>
      </div>
    );
	};
};

export default Contact;
