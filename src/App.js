import './App.css';
import './App.scss';
import Testimonials from "./components/Testimonials/Testimonial";
import Footer from './components/Footer/Footer';
import {themeContext} from './Context';
import {useContext} from 'react';
import Navbar from './components/MyNavigation/Navbar';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Skills from "./components/Skills/Skills";
import Myservice from './components/Myservice/Myservice';
import Experience from './components/Experience/Experience'


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{background:darkMode? 'black': '',color:darkMode? 'white':''}}
    >
      <Navbar/>
   
      <Header/>
      <About/>
      <Experience/>

      <Myservice/>

      <Work/>
      
      <Skills/>

      
      <Testimonials/>
      <Footer/>
     </div>
  );
}

export default App;
