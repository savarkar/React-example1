import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './mylearnings.css'
import Tabs from '@mui/material/Tabs';
import { display } from '@mui/system';
//import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css"; 
import reactslider from '../student/Product-Slider';
//import {Swiper, SwiperSlide} from 'swiper/react';
import { Card, Button } from 'react-bootstrap';
import cApp from '../student/Product-Slider';
//import Carousel from '../student/Product-Slider';
import Commonheader from '../../components/layout/header';
type Props = {};

const MyLearnings = (props: Props) => {
  const [value, setValue] = React.useState('1');

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleChangecorosel = (event: React.SyntheticEvent, newValues: string) => {
    setValue(newValues);
  };

  return (
    <>
      <Commonheader />
      <div className='learning-headsection'>
        <div className='container'>
          <h4>My Learnings</h4>
        </div>

        <div className='row pt-5'>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active text-white fs-5" href="/all-courses">All Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fs-5" href="/my-courses">My Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fs-5" href="/my-wishlist">Wishlist</a>
            </li>
          </ul>
        </div> </div>
      <div className='container'>
        <div></div>
        <div className="wrap row">
          <div className="item">
            <div><img src="https://img.icons8.com/color/48/null/pdf.png" /></div>
            <p><b>Saved PDF or Notes</b></p>
            <p>Download</p>
          </div>
          <div className="item">
            <div><img src="https://img.icons8.com/color/48/null/calendar--v1.png" /></div>
            <p><b>Schedule Live Lecture</b></p>
            <p>Schedule your live lectures</p>
          </div>
          <div className="item ">
            <div><img src="https://img.icons8.com/color/48/null/questions.png" /></div>
            <p><b>Question papers</b></p>
            <p>download ..</p>
          </div>
        </div>
        <div className="wrap row">
          <div className="item">
            <div><img src="https://img.icons8.com/color/48/null/questions.png" /></div>
            <p><b>Contact Teacher</b></p>
            <p>View Profile</p>
          </div>
          <div className="item">
            <div><img src="https://img.icons8.com/color/48/null/questions.png" /></div>
            <p><b>My Growth</b></p>
            <p>My learning quee</p>
          </div>
          <div className="item ">
            <div><img src="https://img.icons8.com/color/48/null/questions.png" /></div>
            <p><b>Messages</b></p>
            <p>Student messages</p>
          </div>
        </div>
        <div className='post-sec'>
          <h3>Post your questions/ doubts here</h3>
          <textarea className='custom-textarea' rows={5} placeholder="Write Something...">

          </textarea>
          <center>
            <button type='submit' >SUBMIT</button>
          </center>
        </div>
      </div>
      <div className='course-scrolsection container-fluid'>


        <div className="container">
          <h4>Your Viewing Couse</h4>
          <div className="row pb-2 mb-4 mt-5" >
            <div className="col-lg-3 col-md-6 mb-5">
              {/* <!-- Card--> */}
              <div className="card rounded shadow-sm border-0">
                <div className="card-body p-0">
                  <img src="Fff" alt="" className="img-fluid d-block mx-auto mb-3" />
                  <div className='p-3 card-body-inner'>
                    <div className='row'>
                      <h5 className='col-md-6'>
                        testt
                      </h5>
                      <div className='col-md-6 d-flex justify-content-between'>
                      </div>
                    </div>

                    <p className="small text-muted font-italic">Teachers Name:</p>
                    <div className='row s'>
                      <div className="col-md-6">1. Ramesh</div>
                      <div className="col-md-6">2. Suresh</div>
                      <div className="col-md-6">2. Kuresh</div>
                      <div className="col-md-6">2. Naresh</div>
                    </div>
                    <div className='row mt-3'>
                      <div className="col-md-6 d-flex">
                        <div className='col-md-7'> <p>Local rating: </p></div>
                        <ul className="col-md-5 list-inline small">
                          <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                          <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                          <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                          <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                          <li className="list-inline-item m-0"><i className="fa fa-star-o text-success"></i></li>
                        </ul>
                      </div>
                      <div className="col-md-6 d-flex flex-nowrap">
                        <div className='col-md-7'> <p>Global rating: </p></div>
                        <ul className="col-md-5 list-inline small">
                          <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                          <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                          <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                          <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                          <li className="list-inline-item m-0"><i className="fa fa-star-o text-success"></i></li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex col-md-4 ">
                        <p className='fw-bold h6 theme-color'>Price: $8</p>
                      </div>
                      <div className="d-flex col-md-8 justify-content-around">
                        <span><i className="fa fa-signal text-success"></i> Beginer</span>
                        <span>10 Weeks</span>
                      </div>

                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-3 col-xs-12">
              <div className="single_footer">
                <h5>Courses</h5>
                <ul>
                  <li><a href="#">Lorem Ipsum</a></li>
                  <li><a href="#">Simply dummy text</a></li>
                  <li><a href="#">The printing and typesetting </a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-3 col-xs-12">
              <div className="single_footer">
                <h5>Services</h5>
                <ul>
                  <li><a href="#">Lorem Ipsum</a></li>
                  <li><a href="#">Simply dummy text</a></li>
                  <li><a href="#">The printing and typesetting </a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="single_footer single_footer_address">
                <h5>Page Link</h5>
                <ul>
                  <li><a href="#">Lorem Ipsum</a></li>
                  <li><a href="#">Simply dummy text</a></li>
                  <li><a href="#">The printing and typesetting </a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="single_footer single_footer_address">
                <h5>Subscribe today</h5>
                {/* <div className="signup_form">                           
                                <form action="#" className="subscribe">
                                    <input type="text" className="subscribe__input" placeholder="Enter Email Address" />
                                    <button type="button" className="subscribe__btn"><i className="fas fa-paper-plane"></i></button>
                                </form>
                            </div> */}
              </div>
              <div className="social_profile w-75">
                <ul>
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                </ul>
                <ul className='mt-4 pt-3'>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <h4 className='text-white'>Global Genius Index (G2I)</h4>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <p className="copyright">Copyright © 2023 <a href="#">My Learnind</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default MyLearnings;