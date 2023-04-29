import React from 'react';
import ReactPlayer from 'react-player';
import Commonheader from '../../components/layout/header';
import question from '../../assets/images/question-paper.png';
const Questions = () => {
  return (
    <div>
    <Commonheader />
    <hr />
      <div>
        <div className='container'>
          <h2 className='py-1 pt-3 fw-bold text-center fs-5 theme-color'>Question papers</h2>
    <div className='row mt-5'>
          <div className='col-lg-2'>
            <img src={question} />    
          </div>
          <div className='col-lg-2'>
            <img src={question} />  
          </div>  
          <div className='col-lg-2'>
            <img src={question} />  
          </div>  
    </div>
    </div>
  </div>
  </div>
  );
}

export default Questions;

