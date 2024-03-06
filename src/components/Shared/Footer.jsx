import React from 'react';
import logo from '../../images/logo.png';


const Footer = () => {
     return (
          <div className=' lg:px-10'>
               <div className='navbar bg-base-100'>
                    <div className='navbar-start'>
                         <img src={logo} alt="" />
                    </div>
                    <div className='navbar-center lg:w-auto w-40'>
                         <img src={logo} alt="" />
                    </div>
                    <div className="navbar-end pt-3">
                         <div className=' flex'>
                              <p className=' lg:ps-2 font-bold'>Sign in</p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Footer;