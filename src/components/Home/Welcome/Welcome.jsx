import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './welcomeStyles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import layout from '../../../images/Layer 1 1.png'
import Double from '../../../images/Double.png'
import Hazelnut from '../../../images/Hazelnut.png'
import Coconut from '../../../images/Coconut.png'


export default function Welcome() {
     return (
          <div className='lg:px-28 px-5'>
               <div>
                    <Swiper
                         spaceBetween={30}
                         pagination={{
                              clickable: true,
                         }}
                         autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                         }}
                         modules={[Autoplay, Pagination]}
                         className="mySwiper"
                    >
                         <SwiperSlide>
                              <div className=' lg:flex justify-center items-center'>
                                   <div className=' lg:w-[44%]'>
                                        <div className=' text-start'>
                                             <i className=' text-[#270A05]'>WELCOME TO OUR</i>
                                             <h2 className=' text-7xl mb-2 text-[#270A05]'>Unlocklive</h2>
                                             <h3 className=' text-3xl text-[#270A05]'>Elevating Your Coffee Experience</h3>
                                             <p className=' text-[14px]  py-6'>Unlocklive  embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.</p>
                                        </div>
                                        <div className=' flex items-center'>
                                             <div className='lg:w-[166px]  text-center lg:mx-0 mx-auto  py-4 '>
                                                  <div className=' border py-2 rounded-lg bg-[#86371C]'>
                                                       <small className=' text-white'>EXPLORE OUR MENU</small>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className=' flex'>
                                                       <div className="avatar-group -space-x-6 rtl:space-x-reverse ms-8">
                                                            <div className="avatar">
                                                                 <div className="w-12">
                                                                      <img src={Coconut} />
                                                                 </div>
                                                            </div>
                                                            <div className="avatar">
                                                                 <div className="w-12">
                                                                      <img src={Hazelnut} />
                                                                 </div>
                                                            </div>
                                                            <div className="avatar">
                                                                 <div className="w-12">
                                                                      <img src={Double} />
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className=' text-start ms-3'>
                                                            <h1 className=' font-semibold text-2xl text-[#270A05]'>1200+</h1>
                                                            <p className=' text-sm'>Tasty Variant Coffee</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className=' lg:w-[55%]'>
                                        <img className=' lg:h-[455px] lg:w-[100%]' src={layout} alt="" />
                                   </div>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>
                              <div className=' lg:flex justify-center items-center'>
                                   <div className=' lg:w-[44%]'>
                                        <div className=' text-start'>
                                             <i className=' text-[#270A05]'>WELCOME TO OUR</i>
                                             <h2 className=' text-7xl mb-2 text-[#270A05]'>Unlocklive</h2>
                                             <h3 className=' text-3xl text-[#270A05]'>Elevating Your Coffee Experience</h3>
                                             <p className=' text-[14px]  py-6'>Unlocklive  embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.</p>
                                        </div>
                                        <div className=' flex items-center'>
                                             <div className='lg:w-[166px]  text-center lg:mx-0 mx-auto  py-4 '>
                                                  <div className=' border py-2 rounded-lg bg-[#86371C]'>
                                                       <small className=' text-white'>EXPLORE OUR MENU</small>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className=' flex'>
                                                       <div className="avatar-group -space-x-6 rtl:space-x-reverse ms-8">
                                                            <div className="avatar">
                                                                 <div className="w-12">
                                                                      <img src={Coconut} />
                                                                 </div>
                                                            </div>
                                                            <div className="avatar">
                                                                 <div className="w-12">
                                                                      <img src={Hazelnut} />
                                                                 </div>
                                                            </div>
                                                            <div className="avatar">
                                                                 <div className="w-12">
                                                                      <img src={Double} />
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className=' text-start ms-3'>
                                                            <h1 className=' font-semibold text-2xl text-[#270A05]'>1200+</h1>
                                                            <p className=' text-sm'>Tasty Variant Coffee</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className=' lg:w-[55%]'>
                                        <img className=' lg:h-[455px] lg:w-[100%]' src={layout} alt="" />
                                   </div>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>
                              <div className=' lg:flex justify-center items-center'>
                                   <div className=' lg:w-[44%]'>
                                        <div className=' text-start'>
                                             <i className=' text-[#270A05]'>WELCOME TO OUR</i>
                                             <h2 className=' text-7xl mb-2 text-[#270A05]'>Unlocklive</h2>
                                             <h3 className=' text-3xl text-[#270A05]'>Elevating Your Coffee Experience</h3>
                                             <p className=' text-[14px]  py-6'>Unlocklive  embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.</p>
                                        </div>
                                        <div className=' flex items-center'>
                                             <div className='lg:w-[166px]  text-center lg:mx-0 mx-auto  py-4 '>
                                                  <div className=' border py-2 rounded-lg bg-[#86371C]'>
                                                       <small className=' text-white'>EXPLORE OUR MENU</small>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className=' flex'>
                                                       <div className="avatar-group -space-x-6 rtl:space-x-reverse ms-8">
                                                            <div className="avatar">
                                                                 <div className="w-12">
                                                                      <img src={Coconut} />
                                                                 </div>
                                                            </div>
                                                            <div className="avatar">
                                                                 <div className="w-12">
                                                                      <img src={Hazelnut} />
                                                                 </div>
                                                            </div>
                                                            <div className="avatar">
                                                                 <div className="w-12">
                                                                      <img src={Double} />
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className=' text-start ms-3'>
                                                            <h1 className=' font-semibold text-2xl text-[#270A05]'>1200+</h1>
                                                            <p className=' text-sm'>Tasty Variant Coffee</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className=' lg:w-[55%]'>
                                        <img className=' lg:h-[455px] lg:w-[100%]' src={layout} alt="" />
                                   </div>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>
                              <div className=' lg:flex justify-center items-center'>
                                   <div className=' lg:w-[44%]'>
                                        <div className=' text-start'>
                                             <i className=' text-[#270A05]'>WELCOME TO OUR</i>
                                             <h2 className=' text-7xl mb-2 text-[#270A05]'>Unlocklive</h2>
                                             <h3 className=' text-3xl text-[#270A05]'>Elevating Your Coffee Experience</h3>
                                             <p className=' text-[14px]  py-6'>Unlocklive  embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.</p>
                                        </div>
                                        <div className=' flex items-center'>
                                             <div className='lg:w-[166px]  text-center lg:mx-0 mx-auto  py-4 '>
                                                  <div className=' border py-2 rounded-lg bg-[#86371C]'>
                                                       <small className=' text-white'>EXPLORE OUR MENU</small>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className=' flex'>
                                                       <div className="avatar-group -space-x-6 rtl:space-x-reverse ms-8">
                                                            <div className="avatar">
                                                                 <div className="w-12">
                                                                      <img src={Coconut} />
                                                                 </div>
                                                            </div>
                                                            <div className="avatar">
                                                                 <div className="w-12">
                                                                      <img src={Hazelnut} />
                                                                 </div>
                                                            </div>
                                                            <div className="avatar">
                                                                 <div className="w-12">
                                                                      <img src={Double} />
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className=' text-start ms-3'>
                                                            <h1 className=' font-semibold text-2xl text-[#270A05]'>1200+</h1>
                                                            <p className=' text-sm'>Tasty Variant Coffee</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className=' lg:w-[55%]'>
                                        <img className=' lg:h-[455px] lg:w-[100%]' src={layout} alt="" />
                                   </div>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>
                              <div className=' lg:flex justify-center items-center'>
                                   <div className=' lg:w-[44%]'>
                                        <div className=' text-start'>
                                             <i className=' text-[#270A05]'>WELCOME TO OUR</i>
                                             <h2 className=' text-7xl mb-2 text-[#270A05]'>Unlocklive</h2>
                                             <h3 className=' text-3xl text-[#270A05]'>Elevating Your Coffee Experience</h3>
                                             <p className=' text-[14px]  py-6'>Unlocklive  embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.</p>
                                        </div>
                                        <div className=' flex items-center'>
                                             <div className='lg:w-[166px]  text-center lg:mx-0 mx-auto  py-4 '>
                                                  <div className=' border py-2 rounded-lg bg-[#86371C]'>
                                                       <small className=' text-white'>EXPLORE OUR MENU</small>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className=' flex'>
                                                       <div className="avatar-group -space-x-6 rtl:space-x-reverse ms-8">
                                                            <div className="avatar">
                                                                 <div className="w-12">
                                                                      <img src={Coconut} />
                                                                 </div>
                                                            </div>
                                                            <div className="avatar">
                                                                 <div className="w-12">
                                                                      <img src={Hazelnut} />
                                                                 </div>
                                                            </div>
                                                            <div className="avatar">
                                                                 <div className="w-12">
                                                                      <img src={Double} />
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className=' text-start ms-3'>
                                                            <h1 className=' font-semibold text-2xl text-[#270A05]'>1200+</h1>
                                                            <p className=' text-sm'>Tasty Variant Coffee</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className=' lg:w-[55%]'>
                                        <img className=' lg:h-[455px] lg:w-[100%]' src={layout} alt="" />
                                   </div>
                              </div>
                         </SwiperSlide>
                    </Swiper>
               </div>
          </div>
     );
}
