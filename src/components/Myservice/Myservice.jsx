import React,{useState,useEffect,useContext} from 'react'
import {motion} from 'framer-motion'
import './Myservice.scss'
import { images } from '../../constants'
import { themeContext } from '../../Context'


const Myservice = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    const abouts = [
        {title:'Web and mobile apps',description:'I build Android / IOS apps, websites, Web apps, Native apps, and more.',imageUrl:images.mobile2},
        {title:'Desktop applications',description:'I create desktop applications using variety of programming languages and techniques.',imageUrl:images.desk2},
        {title:'Graphic Design',description:'I also undertake graphic design services of all design types & formats.',imageUrl:images.grahp1},
        {title:'Training',description:'I train people programming in general,microsoft office and graphic design.',imageUrl:images.web1}

    ]
  return (
    <>
      <h2 className="head-text" id='services' style={{color:darkMode?"#fff":""}}>My offered<span> Services</span> <br /></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imageUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default Myservice