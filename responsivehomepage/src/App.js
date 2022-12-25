import './App.css';
import React, { Component } from 'react';
import NavBar from "./components/navbar/NavBar.js";
import Button from './components/button/Button';
import image_1 from "./assets/hero-image.svg";
import TestimonalCard from './components/testimonalCard/TestimonalCard';
import CourseCard from './components/courseCard/CourseCard';
import instagram from "./assets/instagram.svg";
import facebook from "./assets/facebook.svg";



class App extends Component {

  render() {
    return (
      <div className='app'>
        <div className='hero-container'>
     
     <NavBar />
  
   <div className='hero-section'>
      
      <div className='left-section'>
          
          <h2> Learn the art of Game Dev</h2>
          <p> This is a comprehensive course on Game Development. You will learn everything from generating an idea to publishing your games to different platforms.</p>
          
          <Button color={"orange"}  children={"Enroll Now"}/>
        
  
  
      </div>
      <div className='right-section'>
          
      <img src={image_1} alt="resim"/>
      
        </div>
        
     
      
  
  
   </div>
     
  
 
  
      </div>
  
     <section>
      <div className='testimonal-container'>
      
      <div className='testimonal-left'>
      
       <TestimonalCard  text={"This is a great course. It helped me a lot. Thank you :)"} name={"Jane Cooper"} job={" Developer, Sony"} />

  
       <TestimonalCard text={"Amazing Work! Well done!"} color={"bgcolor"} margincomponent={"margincomponent"} name={"Jacob Jones"} job={"Designer, Facebook"} />

   


       <div className='testimonalborder'>
        
        </div>

        
        </div>

       <div className='testimonal-right'>

        <h2>What our students say</h2>
        <p> All students get access to all the videos and also the source code of the projects. </p>
        <p> You will also have access to a private Discord channel where you can discuss your doubts.</p>
        <Button color={"orange2"} children={"Learn More"}/>
        
       </div>
     

      </div>
     </section>

     <div className='course-section'>

      <h2>Our Courses</h2>
     <div className='course-section-component'>
      <CourseCard img={"imgcourse-1"} txt={"Game Design Essentials"}/>
      <CourseCard img={"imgcourse-2"} txt={"Unity Game Engine Fundamentals"}/>
      <Button children={"All Courses"} color={"btnAllCourse"}/>
     </div>
     </div>


  <div className='app-section'>
    
    <h2>Get our App</h2> 
    <p>You can use our App for better experience on smartphones</p>
  
    <div className='app-section-component'>
      
      <Button children={"App Store"} color={"bgcolorapp"}/>
      <Button children={"Google Play"} color={"bcolorgoogle"} />
    </div>
  

  </div>

  <section className='footer'>
  
    <div className='links-container'>
      
      <ul className='links'>
        <li className='link'><h1>Quick Links</h1>
        <a href="/">About Us</a>
        <a href="/">Contact Us</a>
        <a href="/">Privacy Policy</a>
        <a href="/"> Terms & Conditions</a>
        </li>
       
        <li className='link '><h1>Course</h1>
        <a href="/">Log In</a>
        <a href="/"> Download</a>
        <a href="/">All Courses</a>
        
        </li>
        <li className='link'><h1>Contact Us</h1>
        <a className="link-a" href="/">contact@email.com</a>
         <div className='social'>
          <img src={facebook} alt="facebook"/>
          <img src={instagram} alt="instagram"/>
         </div>
         <input type="text" placeholder='Email Adress'/>
          
    
        </li>
      </ul>

 
    </div>

    <p>This website is developed by FatmaDurak © 2022 </p>


  </section>




      </div>
    )
  }
}


export default App;