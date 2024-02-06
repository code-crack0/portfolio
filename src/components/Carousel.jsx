import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa";

const CardCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Sample data for the cards
  const cardsData = [
    { id: 1, title: 'Youtube Clone', description: 'This a youtube clone which is built using React,MUI and Rapid API to fetch the videos.',link:'https://youtubeclone954.vercel.app',link2:'https://github.com/code-crack0/youtube_clone',icons:[<FaReact size={30} color='blue'/>,<SiMui size={30} color='blue'/>,<TbApi size={30} color='blue'/>] },
    { id: 2, title: 'CarHop', description: 'This app utilizes a Car API to help you filter out cars and look at different car specifications to choose your next car',link:"https://car-application-one.vercel.app",link2:"https://github.com/code-crack0/car_application",icons:[<FaReact size={30} color='blue'/>,<SiNextdotjs size={30} color='blue'/>,] },
    { id: 3, title: 'REST API', description: 'This is a REST API which utilizes JWT authentication and mongodb as a database.',link:"https://github.com/code-crack0/REST_API",link2:"https://github.com/code-crack0/REST_API",icons:[<FaNode size={40} color='blue'/>] },
    
  ];

  return (
    <section>
    <h1 className="text-4xl max-w-[1450px] text-white font-bold mb-4 mx-auto p-8">Projects</h1>
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={10000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      className='max-w-[1250px] mx-auto'
      >
      {cardsData.map(card => (
          <div key={card.id} className="p-4 ml-[20px] mr-[20px] h-[200px] font-serif bg-white rounded shadow">
            <div className='flex justify-between'>
                <h3 className="text-lg text-black  font-semibold">{card.title}</h3>
                <div className='flex'>
                    <a target="_blank" href={card.link} className='text-gray-500 hover:scale-50'><FaExternalLinkAlt/></a>
                    <a target='_blank' href={card.link2} className='text-gray-500 ml-2 hover:scale-50'><FaGithub/></a>
                </div>
            </div>
            <p className="text-gray-600 italic mb-2">{card.description}</p> 
            <p className='flex gap-2'>
                {card?.icons?.map(icon => (
                    <span className='text-gray-500'>{icon}</span>
                )
                )}
            </p>
        </div>
      ))}
    </Carousel>
      </section>
  );
};

export default CardCarousel;
