import React from 'react';
import Double from '../../images/Double.png'
import Hazelnut from '../../images/Hazelnut.png'
import Salted from '../../images/Salted.png'
import Coconut from '../../images/Coconut.png'


const CoffeeMenu = () => {
     return (
          <div className=' my-20'>
               <div className=' text-center lg:w-[36rem] mx-auto '>
                    <div className=' flex justify-center'>
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
                                   Coffee Menu
                              </i>
                         </div>
                         <div style={{
                              backgroundImage: 'linear-gradient(to left, #fff 0%, #86371C 100%, #fff 0%)',
                              backgroundPosition: ' left',
                              backgroundSize: '100% 2px',
                              backgroundRepeat: 'no-repeat'
                         }}>
                              <p className=' w-10'></p>
                         </div>
                    </div>
                    <h2 className=' text-[#270A05] text-3xl font-serif mt-2'>Unlocklive Coffee Menu</h2>
               </div>

               <div className=' py-12'>
                    <div className=' lg:px-20 px-5'>
                         <div className=' lg:flex justify-center lg:px-7'>
                              <div className=' flex justify-center items-center border-2 p-4 rounded-xl lg:me-5'>
                                   <div className=' border-2 border-dashed rounded-full border-[#270A05]'>
                                        <div className=' p-1'>
                                             <img width='100%' src={Double} />
                                        </div>
                                   </div>
                                   <div className=' ps-2 w-[21rem]'>
                                        <h2 className=' text-[#270A05] font-semibold'>Double Espresso x2</h2>
                                        <p>There are many variations of passages Lorem Ipsum form</p>
                                   </div>
                                   <div className=' w-20 px-2'>
                                        <p className=' border-2 border-dotted'> </p>
                                   </div>
                                   <div className=' border-2 border-dashed rounded-full border-[#270A05]'>
                                        <div className=' bg-[#86371C] rounded-3xl p-1'>
                                             <p className=' font-semibold p-2 text-white '>$10</p>
                                        </div>
                                   </div>

                              </div>
                              <div className=' flex justify-center items-center border-2 p-4 rounded-xl lg:my-0 my-4'>
                                   <div className=' border-2 border-dashed rounded-full border-[#270A05]'>
                                        <div className=' p-1'>
                                             <img width='100%' src={Hazelnut} />
                                        </div>
                                   </div>
                                   <div className=' ps-2 w-[21rem]'>
                                        <h2 className=' text-[#270A05] font-semibold'>Hazelnut Heaven Latte</h2>
                                        <p>There are many variations of passages Lorem Ipsum form</p>
                                   </div>
                                   <div className=' w-20 px-2'>
                                        <p className=' border-2 border-dotted'> </p>
                                   </div>
                                   <div className=' border-2 border-dashed rounded-full border-[#270A05]'>
                                        <div className=' bg-[#a7a4a3] rounded-3xl p-1'>
                                             <p className=' font-semibold p-2 text-[#270A05]'>$10</p>
                                        </div>
                                   </div>

                              </div>
                         </div>
                         <div className=' lg:flex justify-center lg:px-7 my-5'>

                              <div className=' flex justify-center items-center border-2 p-4 rounded-xl lg:my-0 my-4 lg:me-5'>
                                   <div className=' border-2 border-dashed rounded-full border-[#270A05]'>
                                        <div className=' p-1'>
                                             <img width='100%' src={Salted} />
                                        </div>
                                   </div>
                                   <div className=' ps-2 w-[21rem]'>
                                        <h2 className=' text-[#270A05] font-semibold'>Salted Caramel Cold Brew</h2>
                                        <p>There are many variations of passages Lorem Ipsum form</p>
                                   </div>
                                   <div className=' w-20 px-2'>
                                        <p className=' border-2 border-dotted'> </p>
                                   </div>
                                   <div className=' border-2 border-dashed rounded-full border-[#270A05]'>
                                        <div className=' bg-[#a7a4a3] rounded-3xl p-1'>
                                             <p className=' font-semibold p-2 text-[#270A05]'>$10</p>
                                        </div>
                                   </div>

                              </div>

                              <div className=' flex justify-center items-center border-2 p-4 rounded-xl lg:my-0 my-4'>
                                   <div className=' border-2 border-dashed rounded-full border-[#270A05]'>
                                        <div className=' p-1'>
                                             <img width='100%' src={Coconut} />
                                        </div>
                                   </div>
                                   <div className=' ps-2 w-[21rem]'>
                                        <h2 className=' text-[#270A05] font-semibold'>Coconut Cream Delight (Summer)</h2>
                                        <p>There are many variations of passages Lorem Ipsum form</p>
                                   </div>
                                   <div className=' w-20 px-2'>
                                        <p className=' border-2 border-dotted'> </p>
                                   </div>
                                   <div className=' border-2 border-dashed rounded-full border-[#270A05]'>
                                        <div className=' bg-[#a7a4a3] rounded-3xl p-1'>
                                             <p className=' font-semibold p-2 text-[#270A05]'>$10</p>
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </div>
                    <div className='w-[130px]  text-center mx-auto py-4'>
                         <div className=' border py-2 border-[#86371C] rounded-lg'>
                              <p className=' font-semibold text-[#86371C]'>View All Menu</p>
                         </div>
                    </div>
               </div>
          </div >
     );
};

export default CoffeeMenu;