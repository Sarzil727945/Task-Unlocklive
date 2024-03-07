import React from 'react';
import cat from '../../images/cat.png'
import coffe from '../../images/coffe.png'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'

const NewCreations = () => {
     return (
          <div>
               <div className=' text-center lg:w-[36rem] mx-auto'>
                    <i className='w-[100px] text-[#86371C] pb-1' style={{
                         backgroundImage: 'linear-gradient(to right, #fff 0%, #86371C 100%, #fff 0%)',
                         backgroundPosition: 'bottom',
                         backgroundSize: '100% 1px',
                         backgroundRepeat: 'no-repeat'
                    }}>
                         SHOWCASE
                    </i>


                    <h2 className=' text-[#270A05] text-3xl font-serif mt-4'>Our Chefs New Creations</h2>
                    <p className=' py-4'>Behold the extraordinary creations born from the synergy of our users' ingenuity and the transformative power of AI, a testament to boundless innovation.</p>
               </div>
               <div className=' py-8 px-6'>
                    <div className='flex font-serif justify-center items-center'>
                         <p className=' border border-[#86371C] text-[#86371C] lg:px-3 px-2 py-1 rounded-2xl'>
                              All
                         </p>
                         <p className=' lg:ps-10 ps-1'>Burger</p>
                         <p className=' lg:px-12 px-2'>Drinks</p>
                         <p>Pizza</p>
                         <p className=' lg:px-12 px-2'>Dinner</p>
                         <p>Lunch</p>
                         <p className=' lg:px-12 px-2'>Cookies</p>
                         <p>Bakery</p>
                    </div>
               </div>
               <div className=' pb-10'>
                    <div className=' lg:px-20 px-5'>
                         <div className=' lg:flex justify-center lg:px-7'>
                              <div>
                                   <img width='100%' className=' lg:h-auto  h-56 lg:pe-4' src={cat} />
                              </div>
                              <div className=' lg:mt-0 mt-5 '>
                                   <img width='100%' className='lg:h-auto  h-56' src={coffe} />
                              </div>
                         </div>
                         <div className=' lg:flex py-6 justify-center'>
                              <div>
                                   <img width='100%' className=' lg:h-auto  h-56' src={img1} />
                              </div>
                              <div className=' lg:mt-0 my-5 lg:px-4'>
                                   <img width='100%' className='lg:h-auto  h-56' src={img2} />
                              </div>
                              <div className=' lg:mt-0 my-5'>
                                   <img width='100%' className='lg:h-auto  h-56' src={img3} />
                              </div>
                         </div>
                    </div>
               </div>
          </div >
     );
};

export default NewCreations;