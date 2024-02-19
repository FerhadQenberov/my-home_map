import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img from '../../assets/img/image.png'
import { useNavigate } from "react-router-dom";
const CardHome = ({item}) => {
  const Navigate=useNavigate()
  if (item) {
    const {announcement_type:{name}}=item
    
  }
 
 
  
  // const imageSlide = [
  //   {
  //     img: "img/ev1.jpg",
  //   },
  //   {
  //     img: "img/ev2.jpg",
  //   },
  //   {
  //     img: "img/ev3.jpg",
  //   },
  //   {
  //     img: "img/ev4.jpg",
  //   },
  // ];
  return (
    <>
      <div className=" max-w-[384px]  min-h-[467px] rounded-1lg overflow-hidden text-btnColor font-normal">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className=" rounded-1lg w-full h-[260px]">
              <img
                src={img}
                layout="fill"
                alt="card-img"
            
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
           
            <div className="relative rounded-1lg w-full h-[260px]">
              <img
                src="/img/image.png"
                layout="fill"
                alt="card-img"
              
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="bg-[#F9FDFF] p-4 ">
          <div className="flex pb-3  text-[16px] font-semibold">
            <img
              src="/card-img/location.svg"
              width={24}
              height={24}
              alt="card-location"
              objectFit="cover"
            />
            <h2 className="ml-2">{item?.address?.region?.name} <span>{item?.address?.village?.name}</span></h2>
          </div>
        
          <div className="flex pb-1  max-w-[300px] min-w-[100px] justify-between">
            <div className="flex space-x-2">
              <img
                src="card-img/konstruktor.svg"
                width={24}
                height={24}
                alt="card-img"
                objectFit="cover"
              />
              <p>3 otaqlı</p>
            </div>
            <div className="flex space-x-2">
              <img
                src="/card-img/home-icon.svg"
                width={24}
                height={24}
                alt="card-img"
                objectFit="cover"
              />
              <p>Mənzil</p>
            </div>
          </div>
          <div className="flex pb-1 max-w-[300px] min-w-[100px] justify-between">
            <div className="flex space-x-2 ">
              <img
                src="card-img/konstruktor.svg"
                width={24}
                height={24}
                alt="card-img"
                objectFit="cover"
              />
              <p>3 otaqlı</p>
            </div>
            <div className="flex space-x-2">
              <img
                src="/card-img/mertebe.svg"
                width={24}
                height={24}
                alt="card-img"
                objectFit="cover"
              />
              <p>7/16</p>
            </div>
          </div>
          <div className="flex pt-2 max-w-[300px] min-w-[100px] justify-between items-center">
            <button onClick={()=>Navigate(`/details/${item?.id}`)} className="bg-btnColor text-white w-[140px] h-[48px] text-[14px] font-semibold rounded-1lg">
             
              Daha ətraflı
            </button>
            <span className="text-btnColor font-semibold">{item?.price} ₼</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHome;
