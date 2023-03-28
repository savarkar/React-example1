import { ListItemButton, ListItemIcon } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";
import { RootState } from "../../redux/store";
import { RouteType } from "../../routes/config";

type Props = {
  item: RouteType;
};

const SidebarItem = ({ item }: Props) => {
  const { appState } = useSelector((state: RootState) => state.appState);
  const activeDot = <svg height="12" width="12" style={{marginLeft: "12px"}}>
    <circle cx="6" cy="6" r="3" stroke="#C085EE" stroke-width="2" fill="#C085EE" />
  </svg>

  return (
    item.sidebarProps && item.path ? (
      <ListItemButton
        component={Link}
        to={item.path}
        sx={{
          "&: hover": {
            backgroundColor: colorConfigs.sidebar.hoverBg
          },
          // backgroundColor: appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
          color: appState === item.state ? colorConfigs.sidebar.activeColor : colorConfigs.sidebar.color,
          paddingY: "12px",
          paddingX: "24px"
        }}
      >
        <ListItemIcon sx={{
          color: appState === item.state ? colorConfigs.sidebar.activeColor : colorConfigs.sidebar.color
        }}>
          {item.sidebarProps.icon && item.sidebarProps.icon}
        </ListItemIcon>
        {item.sidebarProps.displayText} {appState === item.state ? activeDot : ''}
      </ListItemButton>
    ) : null
  );
};

export default SidebarItem;