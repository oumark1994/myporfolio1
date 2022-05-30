import React, { useState, useEffect,useContext } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { themeContext } from "../../Context";


// import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';

import './Testimonial.scss';
import { images } from '../../constants';

const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([{imgUrl:images.user2,name:'NII JOY',feedback:'I love the good work ,i recommend',company:'IPMC'},
  {imgUrl:images.user1,name:'Oumar Telly',feedback:'Great job done for us ,we really appreciate',company:'DotTechnology'},
]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
 
      setTestimonials(testimonials);

    // });
  }, []);

  return (
    <div className='app__testimonial' style={{backgroundColor:darkMode?"#000" : ""}}>
      {testimonials.length && (
        <>
              <h2 className="head-text" style={{marginBottom:'2rem',color:darkMode?"#fff":""}}>Client’s Feedback <span>About Me</span></h2>

          <div className="app__testimonial-item app__flex">
          <img src={(testimonials[currentIndex].imgUrl)} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

  
    </div>
  );
};

export default Testimonial;
