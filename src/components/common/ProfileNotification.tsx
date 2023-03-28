import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { ListItemButton, ListItemIcon } from "@mui/material";

const ProfileNotification = (props: any) => {
  return (
    <div>
      <div>
        <ListItemIcon sx={{
        color: "#C085EE"
        }}>
          <NotificationsOutlinedIcon />
        </ListItemIcon>
      </div>
    </div>
  );
};

export default ProfileNotification;