import React from 'react';
import { Input, Button } from 'antd';

import './gateway.css';


class Gateway extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidPassword: false,
    };
    this.submit = this.submit.bind(this);
  };

  submit() {
    const validPasswords = ["TEST_PASSWORD"];
    let password = document.getElementById("password").value;

    if (validPasswords.includes(password)) {
      this.setState({invalidPassword: false});
      this.props.unlock();
    } else {
      this.setState({invalidPassword: true});
    }
  };

	render() {
    let invalidPasswordError;

    if (this.state.invalidPassword) {
      invalidPasswordError = "This password is invalid. Please try again.";
    } else {
      invalidPasswordError = "";
    }

    return(
      <div className="gateway">
        <div className="prompt">
          <h2>THIS WEBSITE IS PASSWORD PROTECTED.</h2>
          <Input id="password" placeholder="Please enter a valid password to access the content."/>
          <Button className="submit" onClick={this.submit}>Submit</Button>
        </div>
        <div className="error">
          <p>{invalidPasswordError}</p>
        </div>
      </div>
    );
	};
};

export default Gateway;
