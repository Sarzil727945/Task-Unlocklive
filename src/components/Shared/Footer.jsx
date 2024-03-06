import React from 'react';
import logo from '../../images/logo.png';
import Background from '../../images/Background.png';
import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialTwitterCircular } from "react-icons/ti";

const Footer = () => {
     return (
          <div className='lg:px-10 py-5' style={{ backgroundImage: `url(${Background})` }}>
               <div className='navbar'>
                    <div className='navbar-start'>
                         <img src={logo} alt="" />
                    </div>
                    <div className='navbar-center pt-2 lg:ps-0 ps-5'>
                         <div className='flex font-bold'>
                              <div>
                                   <p>Terms</p>
                              </div>
                              <div className=' px-2 lg:px-5'>
                                   <p>Privacy</p>
                              </div>
                              <div>
                                   <p>Cookies</p>
                              </div>
                         </div>
                    </div>
                    <div className="navbar-end pt-3">
                         <div className='flex text-4xl'>
                              <div>
                                   <TiSocialLinkedinCircular />
                              </div>
                              <div className=' lg:px-2'>
                                   <TiSocialFacebookCircular />
                              </div>
                              <div>
                                   <TiSocialTwitterCircular />
                              </div>

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Footer;
