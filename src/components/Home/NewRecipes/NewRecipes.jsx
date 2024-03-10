import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Navigation} from 'swiper/modules';
import Bargar from '../../../images/bargar.png';
import Pita from '../../../images/pita.png';

export default function App() {
  return (
    <div className=' bg-[#FFFAF2] justify-center items-center '>
      <div className=' lg:px-20 px-5 lg:relative py-20'>
        <div className=' lg:w-96 bg-[#FFFAF2] z-10 lg:absolute'>
          <div className=' flex justify-start'>
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
                New Recipes
              </i>
            </div>
          </div>
          <h2 className=' text-[#270A05] text-4xl font-serif my-3'>Taste Our New Recipe</h2>
          <p>Malesuada cursus a tincidunt volutpat posuere lacinia. Congue malesuada lacus pharetra ut vel amet. Amet turpis suspendisse porttitor scelerisque amet dolor et. Nisi ac vitae tortor lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing eu sit ornare imperdiet viverra sit vel. </p>
          <p className=' pt-4'>
            There are many variations of passages of Lorem Ipsum form any injected humour, or randomised words which don't look
            slightly believable.
          </p>
        </div>
        <div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            navigation={true}
            modules={[ Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Bargar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Pita} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Bargar} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </ div>
  );
}
