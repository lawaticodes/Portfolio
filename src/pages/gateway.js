import React from 'react';
import { Input, Button } from 'antd';

import './gateway.css';


class Gateway extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  };

  submit() {
    const validPasswords = ["TEST_PASSWORD"];
    let password = document.getElementById("password").value;

    if (validPasswords.includes(password)) {
      this.props.unlock();
    } else {
      let todo;
    }
  };

	render() {
    return(
      <div className="gateway">
        <h2 className="gateway-title">THIS WEBSITE IS PASSWORD PROTECTED.</h2>
        <Input id="password" placeholder="Please enter a valid password to access the content."/>
        <Button className="submit" onClick={this.submit}>Submit</Button>
      </div>
    );
	};
};

export default Gateway;
