import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className='nav-wrapper blue darken-1 '>
        <a href='/' className='brand-logo'>
          Logo
        </a>
        <ul className='right hide-on-med-and-down'>
          <li>
            <a href='/'>Link1</a>
          </li>
          <li>
            <a href='/'>Link2</a>
          </li>
          <li>
            <a href='/'>Link3</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
