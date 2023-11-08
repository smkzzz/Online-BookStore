import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import ContentLoader from "react-content-loader";

export default function Carousel({items,loading}) {
  return (
    <>
      <div className="hidden xl:block">
      <Swiper
        slidesPerView={3}
        loop={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-11/12 mt-10"
      >
        {loading ? (
          <div className="grid grid-cols-3 gap-6">
          <ContentLoader 
    speed={0.5}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#0f172a"
    foregroundColor="#1e293b"
    
  >
    <rect x="15" y="125" rx="2" ry="2" width="210" height="333" /> 
    <rect x="-140" y="97" rx="2" ry="2" width="561" height="279" />
  </ContentLoader>
  <ContentLoader 
    speed={0.5}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#0f172a"
    foregroundColor="#1e293b"
    
  >
    <rect x="15" y="125" rx="2" ry="2" width="210" height="333" /> 
    <rect x="-140" y="97" rx="2" ry="2" width="561" height="279" />
  </ContentLoader>
  <ContentLoader 
    speed={0.5}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#0f172a"
    foregroundColor="#1e293b"
    
  >
    <rect x="15" y="125" rx="2" ry="2" width="210" height="333" /> 
    <rect x="-140" y="97" rx="2" ry="2" width="561" height="279" />
  </ContentLoader>
          </div>
        ) : (
          items.map((e) => (
            <SwiperSlide key={e.id} className=" group  hover pt-0 relative flex flex-row ">
              <div className="w-[350px] text-gray-800 ">asd</div>
              <span className="bg-slate-900 rounded:lg pl-32 p-4 pt-6 pr-10 flex flex-col gap-6 shadow-lg">
                <span className="text-xl font-bold">{e.title}</span>
                <span className="ml-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio ducimus quibusdam magni iste eveniet quasi exercita
                </span>
                <a className="hover:bg-rose-600 cursor-pointer text-md p-2 self-center border-2 border-white">
                  BUY NOW
                </a>
              </span>
              <img
                src={e.image}
                className="shadow-lg z-10 left-5 top-1 transform  group-hover:skew-x-[20deg] duration transition-transform skew-x-[5deg] border-4 border-white absolute w-44"
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
      </div>
      <div className="xl:hidden">
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-11/12 mt-10"
      >
        {loading ? (
          <>
           <ContentLoader 
          speed={2}
          width={400}
          height={460}
          viewBox="0 0 400 460"
          backgroundColor="#0f172a"
          foregroundColor="#1e293b"
         
        >
          <rect x="15" y="125" rx="2" ry="2" width="210" height="333" /> 
          <rect x="-140" y="97" rx="2" ry="2" width="561" height="279" />
        </ContentLoader>
        <ContentLoader 
          speed={2}
          width={400}
          height={460}
          viewBox="0 0 400 460"
          backgroundColor="#0f172a"
          foregroundColor="#1e293b"
         
        >
          <rect x="15" y="125" rx="2" ry="2" width="210" height="333" /> 
          <rect x="-140" y="97" rx="2" ry="2" width="561" height="279" />
        </ContentLoader>
        <ContentLoader 
          speed={2}
          width={400}
          height={460}
          viewBox="0 0 400 460"
          backgroundColor="#0f172a"
          foregroundColor="#1e293b"
         
        >
          <rect x="15" y="125" rx="2" ry="2" width="210" height="333" /> 
          <rect x="-140" y="97" rx="2" ry="2" width="561" height="279" />
        </ContentLoader>
          </>
        ) : (
          items.map((e) => (
            <SwiperSlide key={e.id} className="  group cursor-pointer pt-0 relative flex flex-row ">
              <div className="w-[350px] text-gray-800 ">asd</div>
              <span className="bg-slate-900 rounded:lg pl-32 p-4 pt-6 pr-10 flex flex-col gap-6 shadow-lg">
                <span className="text-xl font-bold">{e.title}</span>
                <span className="ml-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio ducimus quibusdam magni iste eveniet quasi exercita
                </span>
                <a className="hover:bg-rose-600 text-md p-2 self-center border-2 border-white">
                  BUY NOW
                </a>
              </span>
              <img
                src={e.image}
                className="group-hover:skew-x-[20deg] duration transition-transform  shadow-lg z-10 left-5 top-1 transform  skew-x-[5deg] border-4 border-white absolute w-44"
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
      </div>
    </>
  );
}
