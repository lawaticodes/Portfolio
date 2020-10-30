import React from 'react';
import { Input, Button } from 'antd';

import './Contact.css';


class Contact extends React.Component {
	render() {
    return(
      <div className="contact-form">
        <div className="contact-header">
          <p className="text">CONTACT FORM</p>
        </div>
        <div className="contact-content">
          <div className="prompt">
            <p>NAME:</p>
            <Input className="input personal-info" placeholder="Please enter your full name."/>
          </div>
          <div className="prompt">
            <p>MOBILE:</p>
            <Input className="input personal-info" placeholder="Please enter your modile number."/>
          </div>
          <div className="prompt">
            <p>EMAIL:</p>
            <Input className="input personal-info" placeholder="Please enter your email address."/>
          </div>
          <div className="prompt">
            <p>MESSAGE:</p>
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
