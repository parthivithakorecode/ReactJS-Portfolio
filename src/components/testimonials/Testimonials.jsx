import React from 'react';

import { GiAchievement } from 'react-icons/gi';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
     
      name: 'Merit in Senior Secondary Examination ',
      
      test: 'Achieved a Meritorious Percentage of 97.80% in my Senior Secondary Class 12th Examination from Rajasthan Board of Secondary Education in June 2021 ',
    },
    {
      id: 2,
     
      name: 'Anchoring and Public Speaking',
       test: "I have had the pleasure of Anchoring and show-casing my public speaking talent at various occasions like the 3 Week Induction Program - First year - Pehla Kadam and have participated and won various awards in many debate competitions",
    },
    {
      id: 3,
      name: 'Hackathons and Coding Contests',
            test: 'I have actively and successfully participated in various Hackathons like Service-now Women Code to Win Hackathon and Wells Fargo IIT Madras Hackathon. Moreover I have shown my skillset in various coding contest and was in the top 10% coders in the CodeChef Starters 72 contest. ',
    },
    {
      id: 4,
      name: 'Singer and Polyglot ',
      
       test: "I have taken part in several singing competitions and have received numerous singing honours, including the Park Avenue Regional Award. I am a beginning multilingual with intermediate Sanskrit and Korean skills.",
    },
    
  ];
  return (
    <section id="testmonials">
      
      <h2>Co-Curricular Activities and Achievements</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination, Navigation,Scrollbar]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        
        effect 
        
        
        Scrollbar ={{draggable : true}}

        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <GiAchievement />
            </a>
          </div>
          <h3 className='client__name'>{test.name}</h3>
          <h4 className="client__review">{test.test}</h4>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials