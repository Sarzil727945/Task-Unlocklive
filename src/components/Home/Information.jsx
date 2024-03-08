import React from 'react';
import Section from '../../images/Overview Section.png'

const Information = () => {
     return (
          <div className=' bg-[#FFFAF2] lg:h-60 my-20'>
               <div className=' lg:px-28 px-5 '>
                    <div className=' lg:flex justify-between'>
                         <div>
                              <img src={Section} alt="" className="mx-auto" />
                         </div>
                         <div className=' lg:text-start text-center lg:pt-16 pt-10'>
                              <h2 className=' font-semibold text-xl mb-3'>Our Opening Hours</h2>
                              <p>Mon - Sat: 07:00 - 18:00</p>
                              <p>Only Sun: 09:00 - 14:00</p>
                         </div>

                         <div className=' text-center lg:pt-8 '>
                              <div className='lg:border-l-2 lg:border-e-2 px-20 py-10'>
                                   <div>
                                        <h2 className=' font-semibold text-xl mb-3 '>Our Live Location</h2>
                                        <p>848 A 28TH ST, Brooklyn</p>
                                        <p>New York, UK</p>
                                   </div>
                              </div>
                         </div>
                         <div className=' lg:text-end text-center lg:pt-16 pt-10 lg:pb-0 pb-10'>
                              <h2 className=' font-semibold text-xl mb-3'>Book A Table Now</h2>
                              <p>+1 318-254-6849</p>
                              <p>+1 452-754-6579</p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Information;