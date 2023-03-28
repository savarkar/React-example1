import React from 'react';
import DashboardCard from '../../components/common/DashboardCard';

type Props = {};

const HomePage = (props: Props) => {
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
    </div>
  );
};

export default HomePage;