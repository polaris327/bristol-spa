import React from 'react';

import HeaderLogo from '../../assets/images/white-logo.png';
import '../../styles/shared.css';

const TopHeader = () => {
  return (
    <div className='top-header'>
      <img className='header-logo' src={HeaderLogo} />
    </div>
  );
};

export default TopHeader;
