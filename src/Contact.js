import React from 'react';

import './Contact.css';


class Contact extends React.Component {
	render() {
    return(
      <div className="contact">
        <div className="contact-header">
          <p>GET IN TOUCH</p>
        </div>
        <div>
          <p>NAME:</p>
          <p>MOBILE:</p>
          <p>EMAIL:</p>
          <p>MESSAGE:</p>
        </div>
        <div>
          <p>SEND</p>
        </div>
      </div>
    );
	};
};

export default Contact;
