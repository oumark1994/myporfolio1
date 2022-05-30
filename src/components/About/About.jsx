import React,{useState,useEffect,useContext} from 'react'
import {motion} from 'framer-motion'
import './About.scss'
import { images } from '../../constants'
import { themeContext } from '../../Context'


const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>


      <div className="app__profiles1" style={{backgroundColor:darkMode?"#000" : ""}} id="about">
      <h2 className="head-text" style={{display:'block',width:'100%',color:darkMode?"#fff":""}}>About  <span>Me</span></h2>


          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item">        
            <img src={images.profile1} alt="about_image" />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item " id='hello'>        
            <h2 className="bold-text " style={{ marginTop: 20 }}>About me</h2>
            <p className="p-text " style={{ marginTop: 10 }}>Full Sack developer with 5 years on hands-on experience
designing ,developing and implementing applications and solutions using a range of technologies and programming
languages.Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full
Stack Developer</p>
    <motion.a  whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}><a href='./myresume.pdf' id='cv' download>Download CV</a>
</motion.a>
          </motion.div>
       
      </div>
    
    </>
  )
}

export default About