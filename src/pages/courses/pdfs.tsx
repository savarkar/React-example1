import React from 'react';
import ReactPlayer from 'react-player';
import Commonheader from '../../components/layout/header';
import pdf from '../../assets/images/pdf.png';
const Pdf = () => {
  return (
    <div>
    <Commonheader />
    <hr />
      <div>
        <div className='container'>
          <h2 className='py-1 pt-3 fw-bold text-center fs-5 theme-color'>Saved PDF or Notes</h2>
    <div className='row mt-5'>
          <div className='col-lg-2'>
            <img src={pdf} />  
          </div>
          <div className='col-lg-2'>
            <img src={pdf} />  
          </div>
          <div className='col-lg-2'>
            <img src={pdf} />  
          </div>
          <div className='col-lg-2'>
            <img src={pdf} />  
          </div>
          <div className='col-lg-2'>
            <img src={pdf} />  
          </div>
          <div className='col-lg-2'>
            <img src={pdf} />  
          </div>
    </div>
    <div className='row mt-5'>
          <div className='col-lg-2'>
            <img src={pdf} />  
          </div>
          <div className='col-lg-2'>
            <img src={pdf} />  
          </div>
          <div className='col-lg-2'>
            <img src={pdf} />  
          </div>
          <div className='col-lg-2'>
            <img src={pdf} />  
          </div>
    </div>
    </div>
  </div>
  </div>
  );
}

export default Pdf;

