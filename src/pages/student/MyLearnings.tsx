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
import {Card, Button } from 'react-bootstrap';
import cApp from '../student/Product-Slider';
import Carousel from '../student/Product-Slider';

type Props = {};

const MyLearnings = (props: Props) => {
    const [value, setValue] = React.useState('1');

  const handleChangeTab= (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleChangecorosel = (event: React.SyntheticEvent, newValues: string) => {
    setValue(newValues);
  };

  return (
    <><div className='learning-headsection'>
        <div className='container'>
          <h4>My Learnings</h4>
          </div>
      </div>
      <div className='container'>
              
            <Box sx={{ width: '100%', typography: 'body1' }} className="tabs-section">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
            <Tab label="All Courses" value="1" />
            <Tab label="My Courses" value="2" />
            <Tab label="Wishlist" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <div className="wrap row">
            <div className="item">
            <div><img src="https://img.icons8.com/color/48/null/pdf.png"/></div>
            <p><b>Saved PDF or Notes</b></p>
            <p>Download</p>
            </div> 
            <div className="item">
            <div><img src="https://img.icons8.com/color/48/null/calendar--v1.png"/></div>
            <p><b>Schedule Live Lecture</b></p>
            <p>Schedule your live lectures</p>
            </div>
            <div className="item ">
            <div><img src="https://img.icons8.com/color/48/null/questions.png"/></div>
            <p><b>Question papers</b></p>
            <p>download ..</p>
            </div>
            </div>
            <div className="wrap row">
            <div className="item">
            <div><img src="https://img.icons8.com/color/48/null/questions.png"/></div>
            <p><b>Contact Teacher</b></p>
            <p>View Profile</p>
            </div>
            <div className="item">
            <div><img src="https://img.icons8.com/color/48/null/questions.png"/></div>
            <p><b>My Growth</b></p>
            <p>My learning quee</p>
            </div>
            <div className="item ">
            <div><img src="https://img.icons8.com/color/48/null/questions.png"/></div>
            <p><b>Messages</b></p>
            <p>Student messages</p>
            </div>
            </div>
            <div className='post-sec'>
                    <h3>Post your questions/ doubts here</h3>
                    <textarea className='custom-textarea' cols={70} rows={5} placeholder="Write Something...">

                    </textarea>
                    <center>
                        <button type='submit' >SUBMIT</button>
                    </center>
            </div>
            <div className='course-scrolsection'>
                   <h4>Your Viewing Couse</h4>

                   <div className="container text-center my-3">
                      <p>ff</p>
                  </div> 
                  <div className='container py-4 px-4 justify-content-center'>

          </div>
            </div>
        </TabPanel>
        <TabPanel value="2">
          <p>ju</p>
          <Carousel />
        </TabPanel>
        <TabPanel value="3">
          <p>zxczxz czxzxcx</p>
        </TabPanel>
      </TabContext>
    </Box>
   
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