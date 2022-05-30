import React,{useState,useEffect,useContext} from 'react'
import './Work.scss'
import {AiFillEye,AiFillGithub} from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants'
import { themeContext } from '../../Context';




const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    const [works, setWorks] = useState([
        {title:'Agency',description:'I build this complete digital agency from scratch using PHP/LARAVEL FRAMEWORK.',project_Link:"https://www.chadotec.com",imgUrl:images.code4,tags:['Agency','ALL']},
        {title:'Sneakers',description:'Sneaker is complete ecommerce website that shows all kinds of sneakers for sell online',project_Link:"https://www.mysneakers.chadotec.com",imgUrl:images.sneaker,tags:['Ecommerce','ALL']},
        {title:'Real State',description:'Realty is a complete react state apps that shows all properties available for sell or rent around the globe',project_Link:"https://real-g3f6d2o3x-oumark1994.vercel.app/",imgUrl:images.realstate,tags:['Real State','ALL']},
        {title:'Restaurent',description:'A Restaurent website site where foods staffs are sold over.',project_Link:"http://www.myfoods.chadotec.com",imgUrl:images.foody,tags:['Restaurent','ALL']},
{title:'MyPorfolio',description:'This is a complete portfolio website that i build to show case and my skills and services i provide.',project_Link:"http://www.myfoods.chadotec.com",imgUrl:images.myporfolio,tags:['Portfolio','ALL']}
]);

    const [filterWork, setFilterWork] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });


useEffect(() => {

      setFilterWork(works);
   
  }, []);
const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div className='app__works' style={{backgroundColor:darkMode?"#000" : ""}} id="work">
      <div className="app__work-filter">
      <h2 className="head-text"  style={{display:'block',width:'100%',color:darkMode?"#fff":""}}>My Latest  <span>Featured Projects</span></h2>

        {['All','Real State','Portfolio', 'Ecommerce', 'Restaurent', 'Agency'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >

              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
      <a href={`${work.project_Link}`} target="_blank" >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />

                   
                  </motion.div>
                  </a>
                
            
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work
