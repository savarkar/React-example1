import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";
import Sidebox from "../common/Sidebox";
import backgroundImage from "../../assets/images/background.gif";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Box
        component="nav"
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0
        }}
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: "100vh",
          backgroundColor: colorConfigs.mainBg,
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center"
        }}
      >
        <Toolbar />
        <div style={{maxWidth: "620px", margin: "auto"}}>
          <Outlet />
        </div>
      </Box>
      <Box sx={{
          width: sizeConfigs.sidebox.width,
          flexShrink: 0,
          backgroundColor: colorConfigs.sidebox.bg,
          zIndex: 9999,
          borderLeft: "1px solid #ffffff"
        }}>
        <Sidebox />
      </Box>
    </Box>
  );
};

export default MainLayout;