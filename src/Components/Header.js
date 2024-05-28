import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [showOptions, setShowOptions] = useState(false);

  const handleExpand = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div>
      <navbar className="header">
        <div className='imageheader'>
          <img src="https://wiculty.com/wp-content/uploads/2023/08/Wiculty-2022-New-Logo-3.png" alt="Wiculty Logo" height="30px" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        {showOptions ? (
          <div className='options'>
            <ul>
              <li>Conference page</li>
              <li>Interview questions</li>
              <li>Contact us</li>
              <li>Login</li>
            </ul>
          </div>
        ) : (
          <button className="expand-button" onClick={handleExpand}>
            Expand
          </button>
        )}
      </navbar>
    </div>
  );
}

export default Header;
