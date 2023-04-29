import React from 'react';
import ReactPlayer from 'react-player';
import Commonheader from '../../components/layout/header';
const Video = () => {

  return (
    <div>
    <Commonheader />
    <hr />
      <div>
        <div className='conatiner mt-5 mx-auto d-flex justify-content-center'>
    <ReactPlayer url='https://www.youtube.com/watch?v=C7oebqj3PCY'/>
    
    </div>
    <div className='container'>
    <div className='row mt-5 justify-content-center'>
    <a href='/coursedetails' type='button' className='col-lg-3 btn btn-primary'>Back</a>
    </div>
    </div>
  </div>
  </div>
  );
}

export default Video;

