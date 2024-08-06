import React from 'react'
import './Certificates.css'
import { CertificatesData } from "./CertificatesData"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const Certificates = () => {
  return (
    <section className="certificates container section">
        <h2 className="section__title">My Certificates</h2>
        <span className="section__subtitle">Check out my certificates</span>

        <Swiper className="certificates__container" 
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
          
        }}
        modules={[Pagination]}
        >
            {CertificatesData.map(({id,image,title,description})=>{
                return (
                    <SwiperSlide className="certificate__card" key={id}>
                        <img src={image} alt="" className='certificate__img'/>

                        <h3 className="certificate__title">{title}</h3>
                        <p className="certificate__description">{description}</p>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </section>
  )
}

export default Certificates