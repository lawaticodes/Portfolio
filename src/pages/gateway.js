import React from 'react';
import { Input, Button } from 'antd';

import './gateway.css';


class Gateway extends React.Component {
	render() {
    return(
      <div className="gateway">
        <h2 className="gateway-title">THIS WEBSITE IS PASSWORD PROTECTED.</h2>
        <Input id="password" placeholder="Please enter a valid password to access the content."/>
        <Button className="submit">Submit</Button>
      </div>
    );
	};
};

export default Gateway;
