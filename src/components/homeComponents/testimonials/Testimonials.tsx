"use client"
import Container from "../Container";
import Headings from "../Headings";
import { testimonials } from "@/lib/data";
import Card from "./Card";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
export default function Testimonials() {
  return (
    <Container>
      <div>
        <Headings heading={"Testimonials"} />
        <div className="relative h-full bg-[#FAFAFA] py-8 px-4">
            <Swiper
        slidesPerView={3}
        spaceBetween={40}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        >
            
            {testimonials.map((testimonial, id) => (
                <SwiperSlide className="pb-8" key={id}>
                <Card
              
              name={testimonial.name}
              title={testimonial.title}
              testimonial={testimonial.testimonial}
              date={testimonial.date}
            />
                </SwiperSlide>
            
          ))}
           

        </Swiper>
        </div>
        
      </div>
    </Container>
  );
}
