import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";

const MarketCard = (props: any) => {
  return (
    <div style={{backgroundColor: "#160721",
      borderRadius: "10px",
      width: "45%",
      height: "10rem",
      padding: "20px"}}>
      <div style={{color: "#9b86ab"}}>{props.name}</div>
      <div style={{display: "flex", justifyContent: "space-between", marginTop: "50px"}}>
        <div style={{borderLeft: "3px solid rgb(54, 24, 89)"}}></div>
        <div style={{color: "#b985e8", fontSize: "40px", lineHeight: "1"}}>{props.value}</div>
      </div>
    </div>
  );
};

export default MarketCard;