import React from 'react';
import Commonheader from '../../components/layout/header';
import './allcourses.css'
import dd from '../../assets/images/engineering-supplies-blueprint.png';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'; 


    type Props = {};

    const CourseDetails = (props: Props) => {
        const [value, setValue] = React.useState('1');
    
      const handleChangeTab= (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };
    
      const handleChangecorosel = (event: React.SyntheticEvent, newValues: string) => {
        setValue(newValues);
      };
    
  return (
    <>

    <div>
      <Commonheader />
      <div className='bg-home'>
      <div className="container h-100 mt-5 p-3">
<div className="d-flex flex-column justify-content-center h-100 ">
  <span style={{width:'40px',height:'40px'}} className='border rounded-circle p-2 text-center'><i className="fa fa-angle-left"></i></span>
    <h2 className='mt-5 mb-4'>Physics</h2>
    <p>Learn fundamental principles of Physics.</p>
    <p className='mt-4 mb-4'>Offered by</p>
    <p>25,463 already enrolled</p>
    <div className='d-flex justify-content-between'>
        <div className='col-md-4 row no-flexwrap h-50'>
            <div className='col-md-6 mb-2'>
                 <a className="btn btn-primary px-5">Enroll</a>
            </div>
            <div className='col-md-6'>
            <a className="btn btn-primary px-4">Rate Course</a>
        </div>
        </div>
        <div className='col-md-2'>
            <div className='rounded-pill btn-primary p-3 text-center'>
            <i className='far fa-comment-alt'></i> Live Chat
</div>            
        </div>
    </div>
  </div>
</div>  </div>
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-8'>
    <Box sx={{ width: '100%', typography: 'body1' }} className="tabs-section">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
            <Tab label="About Course" value="1" />
            <Tab label="Instructor" value="2" />
            <Tab label="Syllabus" value="3" />
            <Tab label="FAQ" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
           <p className='display-5'> About Course </p>
           <p>test hgjhgjh jhhgjhgh</p>
           <div className="bg-light mt-5 p-4">
         <h5 className="white-text">What you wil learn</h5>

    <ol>
  <li>Cras justo odiszo</li>
  <li>Cras justo odio</li>
  <li>Cras justo odio</li>
</ol>

  </div>
            </TabPanel>
            <TabPanel value="2">
                sf fkfns fssdlknfsdlk
            </TabPanel>
            <TabPanel value="3">
                f;llfwew
            </TabPanel>
            <TabPanel value="4">
                f;llfwew
            </TabPanel>
    </TabContext>
    </Box></div>
    <div className='col-md-4'>
    <div className="row">
                        <div className="col-md-2 how-img">
                            <img src="https://image.ibb.co/dDW27U/Work_Section2_freelance_img1.png" className="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div className="col-md-10">
                            <p className='fw-bolder'>Flexible deadlines</p>        
                        <p className="fw-small">Freedom to work on ideal projects. GetLance.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 how-img">
                            <img src="https://image.ibb.co/dDW27U/Work_Section2_freelance_img1.png" className="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div className="col-md-10">
                            <p className='fw-bolder'>100% Online</p>        
                        <p className="fw-small">Freedom to work on ideal projects. GetLance.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 how-img">
                            <img src="https://image.ibb.co/dDW27U/Work_Section2_freelance_img1.png" className="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div className="col-md-10">
                            <p className='fw-bolder'>Beginer Level</p>        
                        <p className="fw-small">Freedom to work on ideal projects. GetLance.</p>
                        </div>
                    </div>
    </div>
    </div>
   </div> 
<div className='container mt-2'>
<section className="our-webcoderskull padding-lg">
  <div className="container">
    <div className="row heading heading-icon">
        <h2>Instructors</h2>
    </div> 
    <ul className="row mt-5">
      <li className="col-12 col-md-6 col-lg-3">
          <div className="cnt-block equal-hight" >
            <figure><img src="http://www.webcoderskull.com/img/team4.png" className="img-responsive" alt=""/></figure>
            <h3><a href="http://www.webcoderskull.com/">Teachers Name</a></h3>
            <p>Professor in Physics </p>
          </div>
      </li>
      <li className="col-12 col-md-6 col-lg-3">
          <div className="cnt-block equal-hight">
            <figure><img src="http://www.webcoderskull.com/img/team1.png" className="img-responsive" alt=""/></figure>
            <h3><a href="#">Teachers Name </a></h3>
            <p>Professor in Physics </p>
          </div>
      </li>
      <li className="col-12 col-md-6 col-lg-3">
          <div className="cnt-block equal-hight">
            <figure><img src="http://www.webcoderskull.com/img/team4.png" className="img-responsive" alt="" /></figure>
            <h3><a href="http://www.webcoderskull.com/">Teachers Name </a></h3>
            <p>Professor in Physics </p>
          </div>
       </li>
      <li className="col-12 col-md-6 col-lg-3">
          <div className="cnt-block equal-hight" >
            <figure><img src="http://www.webcoderskull.com/img/team2.png" className="img-responsive" alt="" /></figure>
            <h3><a href="http://www.webcoderskull.com/">Teachers Name </a></h3>
            <p>Professor in Physics </p>
          </div>
      </li>
    </ul>
  </div>
   </section>

</div>
<div className="container bg-light p-5">
<div className="ibox-content forum-container">

<div className="forum-title mb-4">
    <h3 className='text-center'>Syllabus</h3>
</div>

<div className="forum-item active">
    <div className="row border p-2 rounded border-dark mb-4">
    <div className="col-md-2 forum-info text-primary-emphasis">
            <span className="views-number">
                Week
            </span>
            <div>
                <p className='text-bold h2'>1</p>
            </div>
        </div>
        <div className="col-md-8">
            <p className="h4">Chapter 1</p>
            <div className="forum-sub-title">Summary</div>
        </div>

        <div className="col-md-2 forum-info">
            <span className="views-number h6">
                Durtion: 10 min
            </span>
        </div>
    </div>
    <div className="row border p-2 rounded border-dark mb-4">
    <div className="col-md-2 forum-info text-primary-emphasis">
            <span className="views-number">
                Week
            </span>
            <div>
                <p className='text-bold h2'>2</p>
            </div>
        </div>
        <div className="col-md-8">
            <p className="h4">Chapter 2</p>
            <div className="forum-sub-title">Summary</div>
        </div>

        <div className="col-md-2 forum-info">
            <span className="views-number h6">
                Durtion: 10 min
            </span>
        </div>
    </div>
    
</div>
</div>

    </div>


    <div className="wrapper bg-white rounded shadow">
    <div className="h2 text-center fw-bold mb-5">Frequently Asked Questions</div>
    {/* <div className="h3 text-primary text-center">How can we help you?</div> */}
    {/* <div className="d-flex justify-content-center">
        <div className="search w-75 d-flex align-items-center"> <span className="fas fa-search text-dark"></span> 
        <input type="text" className="form-control" placeholder="Describe your issue" />
        </div>
    </div> */}
    <div className="accordion accordion-flush border-top border-start border-end" id="myAccordion">
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"> When will I have access to the lectures and assignments? </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne"
                data-bs-parent="#myAccordion">
                <div className="accordion-body p-0">
                    <ul className="list-unstyled m-0">
                        <li><a href="#">Adding Snippets</a></li>
                        <li><a href="#">Accessing Color Palette</a></li>
                        <li><a href="#">Searching Snippets</a></li>
                        <li><a href="#">How to use online editor tools</a></li>
                        <li><a href="#">Upgrading Pro</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"> What will I get if I purchase the Certificate? </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne"
                data-bs-parent="#myAccordion">
                <div className="accordion-body p-0">
                    <ul className="list-unstyled m-0">
                        <li><a href="#">How to upgrade to pro</a></li>
                        <li><a href="#">Benifits of Pro</a></li>
                        <li><a href="#">Payment methods to get Pro</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"> BBBootstrap Tools </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse border-0"
                aria-labelledby="flush-headingOne" data-bs-parent="#myAccordion">
                <div className="accordion-body p-0">
                    <ul className="list-unstyled m-0">
                        <li><a href="#">How to use Pro Online Editor</a></li>
                        <li><a href="#">Know Gradient generator</a></li>
                        <li><a href="#">Using Beautifier</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour"> Download Snippets </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne"
                data-bs-parent="#myAccordion">
                <div className="accordion-body p-0">
                    <ul className="list-unstyled m-0">
                        <li><a href="#">How to download snippets</a></li>
                        <li><a href="#">Donate to Author</a></li>
                        <li><a href="#">Donation methods</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive"> BBBootstrap Icons </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne"
                data-bs-parent="#myAccordion">
                <div className="accordion-body p-0">
                    <ul className="list-unstyled m-0">
                        <li><a href="#">Adding icons to snippets</a></li>
                        <li><a href="#">Fontawesome Icons</a></li>
                        <li><a href="#">Material Design</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix"> Policy & copyrights </button>
            </h2>
            <div id="flush-collapseSix" className="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne"
                data-bs-parent="#myAccordion">
                <div className="accordion-body p-0">
                    <ul className="list-unstyled m-0">
                        <li><a href="#">BBBootstrap Guidelines</a></li>
                        <li><a href="#">BBBootstrap Policies</a></li>
                        <li><a href="#">Copyright and right management</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>

  </>
)
}
export default CourseDetails;