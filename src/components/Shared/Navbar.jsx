import React from 'react';
import loveImg from '../../images/heart.svg';
import logo from '../../images/logo.png';
import admin from '../../images/Admin.svg';

const Navbar = () => {
     return (
          <div className=' lg:px-10 border-b-2'>
               <div className="navbar bg-base-100">
                    <div className="lg:navbar-start">
                         <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pt-3">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </div>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                                   <li><a>Home</a></li>
                                   <li>
                                        <details>
                                             <summary>Pages</summary>
                                             <ul className="p-2">
                                                  <li><a>Pages1</a></li>
                                                  <li><a>Pages2</a></li>
                                             </ul>
                                        </details>
                                   </li>
                                   <li>
                                        <details className=' font-bold'>
                                             <summary>Menu</summary>
                                             <ul className="p-2">
                                                  <li><a>Menu1</a></li>
                                                  <li><a>Menu2</a></li>
                                             </ul>
                                        </details>
                                   </li>
                                   <li className=' font-bold'><a>Contact</a></li>
                              </ul>
                         </div>
                         <div className="navbar-start hidden lg:flex" style={{ width: '55%' }}>
                              <ul className="menu menu-horizontal px-1 font-bold">
                                   <li><a> Home</a></li>
                                   <li>
                                        <details>
                                             <summary>Pages</summary>
                                             <ul className="p-2">
                                                  <li><a>Pages1</a></li>
                                                  <li><a>Pages2</a></li>
                                             </ul>
                                        </details>
                                   </li>
                                   <li>
                                        <details className=' font-bold'>
                                             <summary>Menu</summary>
                                             <ul className="p-2">
                                                  <li><a>Menu1</a></li>
                                                  <li><a>Menu2</a></li>
                                             </ul>
                                        </details>
                                   </li>
                                   <li className=' font-bold'><a>Contact</a></li>
                              </ul>
                         </div>
                    </div>

                    <div className='navbar-center lg:w-auto w-40'>
                         <img src={logo} alt="" />
                    </div>

                    <div className="navbar-end pt-3">
                         <div className=' flex justify-center items-center lg:pe-10'>
                              <button className="btn btn-ghost btn-circle">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                              </button>
                              <button className="btn btn-ghost btn-circle">
                                   <img src={loveImg} alt="" />
                              </button>
                              <button tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                   <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">4</span>
                                   </div>
                              </button>
                         </div>

                         <div className=' flex'>
                              <img src={admin} alt="" />
                              <p className=' lg:ps-2 font-bold'>Sign in</p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;