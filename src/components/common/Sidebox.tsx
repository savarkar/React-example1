import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import MarketCard from "./MarketCard";
import ProfileNotification from "./ProfileNotification";

const Sidebox = () => {
  return (
    <>
      <div style={{padding: "20px 24px"}}>
        <ProfileNotification />
      </div>
      <div>
        <div style={{color: "#C085EE", margin: "0 15px 15px", fontSize: "18px"}}>Global Genius Index(G2I) Market Update</div>
        <div style={{display: "flex", justifyContent: "space-evenly", marginBottom: "10px"}}>
          <MarketCard name="20-25 Years" value="8754" />
          <MarketCard name="15-20 Years" value="12023" />
        </div>
        <div style={{display: "flex", justifyContent: "space-evenly", marginBottom: "10px"}}>
          <MarketCard name="10-15 Years" value="873456" />
          <MarketCard name="05-10 Years" value="23674" />
        </div>
      </div>
    </>
  );
};

export default Sidebox;