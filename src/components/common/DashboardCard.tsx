import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const DashboardCard = (props: any) => {
  const percentage = props.percentage;
  const progressBar = <div style={{ width: 50, height: 50 }}>
    <CircularProgressbar value={percentage} text={`${percentage}%`}
      counterClockwise
      styles={buildStyles({
        textColor: "#ffffff",
        pathColor: "#ffffff",
        trailColor: "#8755af"
      })} />;
  </div>
  return (
    <div style={{border: `2px solid ${colorConfigs.card.borderColor}`,
      padding: "5px 15px 10px 15px",
      borderRadius: "15px",
      width: "48%", height: "110px"}}>
      <div style={{color: colorConfigs.card.color, fontSize: "20px", marginBottom: "10px"}}>{props.cardName}</div>
      {percentage ? progressBar : ''}
    </div>
  );
};

export default DashboardCard;