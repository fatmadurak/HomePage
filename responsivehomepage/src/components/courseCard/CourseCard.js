import React from 'react';
import "../courseCard/coursecard.css";

 const CourseCard = ({img,txt}) => {
  return (
    <div className={`course-card ${img}`}>

    <p> {txt}</p>
     

    </div>
  )
}
export default CourseCard;