import React from 'react';

import './gateway.css';


class Gateway extends React.Component {
	render() {
    return(
      <div className="gateway">
        <div>
          <p>THIS WEBSITE IS PASSWORD PROTECTED</p>
        </div>
        <div>
          <p>Please enter a valid password to access the content.</p>
        </div>
      </div>
    );
	};
};

export default Gateway;
