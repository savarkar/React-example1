import React from 'react';
import DashboardCard from '../../components/common/DashboardCard';
import { useNavigate  } from 'react-router-dom';
import { Link } from 'react-router-dom';

type Props = {};

const HomePage = (props: Props) => {
  const navigate = useNavigate();

// learningHistory = () => {
//   navigate("/mylearnings");
//   };
  return (
    <div>
      <div style={{display: "flex", justifyContent: "space-around", marginBottom: "15px"}}>
        <DashboardCard cardName="My Reaward Box" percentage="75" onClick="rewardBox()" />
        <DashboardCard cardName="My Subscriptions Tokens" percentage="50" onClick="subscriptions()" />
      </div>
      <div style={{display: "flex", justifyContent: "space-around", marginBottom: "15px"}}>
        <DashboardCard cardName="My Participation History" onClick="participationHistory()" />
        <DashboardCard cardName="Genius Box - What's New ?" onClick="geniusBox()" />
      </div>
      <div style={{display: "flex", justifyContent: "space-around", marginBottom: "15px"}}>
        {/* <DashboardCard cardName="My Courses" onClick="{learningHistory}" /> */}
        <Link to = '/mylearnings'><button className='btn p-2 mt-4 btn-info custom-btn'>My Courses</button></Link>

      </div>
    </div>
  );
};

export default HomePage;