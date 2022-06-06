import React, { useState, useEffect,useContext } from 'react';
import { motion } from 'framer-motion';
import { themeContext } from "../../Context";



import './Skills.scss';
import { images } from '../../constants';

const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [experiences, setExperiences] = useState([{year:'2019',works:[{name:'Junior Developer & Lecture',desc:'I worked at ipmc as Junior Developer and Assistant Lecture',company:'IPMC'}]},
  {year:'2020',works:[{name:'Full stack Developer',desc:'I worked at DevTeam as Fullstack developer',company:'DevTeam'}]},
  {year:'2021',works:[{name:'CEO & Full stack Developer',desc:'I am the CEO and Full stack developer and  at Chadotec',company:'CHADOTEC'}]}
]);
  const [skills, setSkills] = useState([{name:'Javascript',icon:images.javascript},{name:'Html/Css',icon:images.htmlcss},
  {name:'Python',icon:images.python},{name:'Java',icon:images.java},{name:'Git',icon:images.git},{name:'Laravel',icon:images.laravel},
  {name:'Django',icon:images.django},{name:'Mysql',icon:images.mysql},{name:'MongoDB',icon:images.mongo},{name:'Git',icon:images.git},{name:'Php',icon:images.php},
  {name:'Wordpress',icon:images.wordpress},{name:'React',icon:images.react}
]);

  useEffect(() => {
    
    // client.fetch(query).then((data) => {
      setExperiences(experiences);
    // });

    // client.fetch(skillsQuery).then((data) => {
      setSkills(skills);
    // });
  }, []);

  return (
    <>
      <h2 className="head-text" id='skills'>Technical Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill,Iindex) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex" key={skill.index}
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp" style={{backgroundColor:darkMode?"#000":""}}>
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text" style={{color:darkMode?"#fff":""}}>Company:{work.company}</h4>
                      <p className="p-text">Title:{work.name}</p>
                    </motion.div>
                    <div
                
                      style={{color:darkMode?"#fff":"",boxShadow:'0px 0px 0px 0.5px #fff'}}

                    >
                      {work.desc}
                    </div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills

