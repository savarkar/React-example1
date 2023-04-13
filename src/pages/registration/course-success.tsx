import * as React from 'react';
import './registration-thankyou.css';
import { Link } from 'react-router-dom';

type Props = {};
const CourseSuccss = (props: Props) => {

    return (
        <div className="content">
        <div className="wrapper-1">
          <div className="wrapper-2">
            <h1>Thank you !</h1>
            <p>Your course registration is success </p>
            <a href='/all-courses' className="btn btn-primary go-home">
            GO 
            </a>
          </div>
      </div>
      </div>
      
      
        )
}
export default CourseSuccss;
