import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './mylearnings.css'
import { display } from '@mui/system';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
type Props = {};

const MyLearnings = (props: Props) => {
    const [value, setValue] = React.useState('1');

  const handleChangeTab= (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
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
        <div className="wrap">
            <div className="item">
            <img src="https://img.icons8.com/color/48/null/pdf.png"/>
            <p><b>Dummy text dhkjd mdsfsdfa</b></p>
            <p>test ddhjd</p>
            </div> 
            <div className="item">
            <img src="https://img.icons8.com/color/48/null/calendar--v1.png"/>
            <p><b>Dummy text dhkjd mdsfsdfa</b></p>
            <p>test ddhjd</p>
            </div>
            <div className="item">
            <img src="https://img.icons8.com/color/48/null/questions.png"/>
            <p><b>Dummy text dhkjd mdsfsdfa</b></p>
            <p>test ddhjd</p>
            </div>
            </div>
            <div className="wrap">
            <div className="item">
            <img src="https://img.icons8.com/color/48/null/questions.png"/>
            <p><b>Dummy text dhkjd mdsfsdfa</b></p>
            <p>test ddhjd</p>
            </div>
            <div className="item">
            <img src="https://img.icons8.com/color/48/null/questions.png"/>
            <p><b>Dummy text dhkjd mdsfsdfa</b></p>
            <p>test ddhjd</p>
            </div>
            <div className="item">
            <img src="https://img.icons8.com/color/48/null/questions.png"/>
            <p><b>Dummy text dhkjd mdsfsdfa</b></p>
            <p>test ddhjd</p>
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

                
</div> 
            </div>
        </TabPanel>
        <TabPanel value="2">
          <p>LogIn</p>
        </TabPanel>
        <TabPanel value="3">
          <p>zxczxz czxzxcx</p>
        </TabPanel>
      </TabContext>
    </Box>
   
          </div>
          </>
          
  );
};

export default MyLearnings;