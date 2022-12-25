import React from 'react'
import "./testimonalcard.css";


 const TestimonalCard=({text,color,margincomponent,name,job})=> {
  return (
    <div className={`testimonal-card ${margincomponent} `}>
       
     
      
       <div className={`content ${color} `}>
       <p >{text}
       </p>
            
         </div>
       <span className='name' style={{display:"block"}}>{name}</span>
       <span className='job'>{job} </span>
        
    
      


    </div>
  )
}
export default TestimonalCard;