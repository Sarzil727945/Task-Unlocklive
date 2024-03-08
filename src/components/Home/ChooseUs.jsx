import React from 'react';

const ChooseUs = () => {
     return (
          <div className=' lg:px-28 px-5 lg:pt-28'>
               <div className=' lg:flex  items-center'>
                    <div className=' lg:w-[34rem] w-full text-center lg:text-start'>
                         <div className=' flex justify-center lg:justify-start'>
                              <div style={{
                                   backgroundImage: 'linear-gradient(to right, #fff 0%, #86371C 100%, #fff 0%)',
                                   backgroundPosition: ' left',
                                   backgroundSize: '100% 2px',
                                   backgroundRepeat: 'no-repeat'
                              }}>
                                   <p className=' w-10'></p>
                              </div>
                              <div className=' px-5'>
                                   <i className='w-[100px] text-[#86371C] pb-1'>
                                        Why Choose Us
                                   </i>
                              </div>
                         </div>
                         <h2 className=' text-[#270A05] text-4xl font-serif my-3'>Choosing Unlocklive, A Taste of Perfection</h2>
                         <p>Unlocklive takes pride in the art of roasting, transforming raw coffee beans into a symphony of aromatic notes and rich flavors.</p>
                         <div className=' lg:flex py-5'>
                              <div className=' border-2 text-center p-8 rounded-lg'>
                                   <h2 className=' font-bold text-2xl'>20+</h2>
                                   <p>Years Experience</p>
                              </div>
                              <div className=' border-2 text-center p-9 rounded-lg lg:mx-2 my-3 lg:my-0'>
                                   <h2 className=' font-bold text-2xl'>100+</h2>
                                   <p>Master Chefs</p>
                              </div>
                              <div className=' border-2 text-center p-8 rounded-lg'>
                                   <h2 className=' font-bold text-2xl'>30+</h2>
                                   <p>Achievements</p>
                              </div>
                         </div>
                         <p>
                              Your choice to savor our coffee is an invitation to experience the epitome of craftsmanship, flavor, and dedication.
                         </p>
                         <div className='w-[166px]  text-center lg:mx-0 mx-auto  py-4'>
                              <div className=' border py-2 border-[#86371C] rounded-lg'>
                                   <p className=' font-semibold text-[#86371C]'>Explore Our Menus</p>
                              </div>
                         </div>
                    </div>
                    <div className=' lg:navbar-end'>
                         <img className=' w-full rounded-lg lg:ms-32' src="https://s3-alpha-sig.figma.com/img/9132/134d/ac64020d08e24b89a95899b5b747b2bf?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dt3HoHletcJp~mtZCctofY40cVxeHDp9Nx5FI3NDPUmGonSfV7eIwPF2mm4rId6QP-UXWoJrsBfILq61NoFfL6EgiQ-0HIeDvcYWH1lAKRQvpYTznPuIzC9TTO3QPv0gG4bCXajDZ3s3nlIId-IJSl3HxT7hyOtBZt9-CMTDO1Rzo3l20dynUmUca0gJAa5PfJYwj8y7ntmcMcCCZR26vkE0WMUOkQbyZmRkW-AzQIE8VkVN1-1Zv4neCCraUn9Xk0e4R7rUAvBYqU6cTwEsP2RHY9sDoZBeTSu7VWv9otkP~h8-sunNGM0peYODsWE5BLeLcEt7CnfLPgTwmT8QuQ__" alt="" />
                    </div>
               </div>
          </div>
     );
};

export default ChooseUs;