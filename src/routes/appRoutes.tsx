import Student from "../pages/student/Student";
import Instructor from "../pages/instructor/Instructor";
import Admin from "../pages/admin/Admin";
import Parent from "../pages/parent/Parent";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import PartcipationHistory from "../pages/student/ParticipationHistory";
import LogoutPage from "../pages/logout/LogoutPage";
import GeniusBox from "../pages/student/GeniusBox";
import Courses from "../pages/instructor/Courses";
import RewardBox from "../pages/student/RewardBox";
import SubscriptionToken from "../pages/student/SubscriptionToken";
import ResourcesPageLayout from "../pages/resources/ResourcesPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AlertPage from "../pages/resources/AlertPage";
import ButtonPage from "../pages/resources/ButtonPage";
import InstallationPage from "../pages/installation/InstallationPage";
import MessagePage from "../pages/message/MessagePage";
import Register from "../pages/registration/registration"
import MyLearnings from "../pages/student/MyLearnings";

const appRoutes: RouteType[] = [
  {
    index: true,
    path: "/dashboard",
    element: <HomePage />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <HomeOutlinedIcon />
    }
  },
  {
    path: "/dashboard/student",
    element: <Student />,
    state: "student",
    sidebarProps: {
      displayText: "Student",
      icon: <DriveFileMoveOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <Student />,
        state: "student.index"
      },
      {
        path: "/dashboard/student/GeniusBox",
        element: <GeniusBox />,
        state: "student.geniusBox",
        sidebarProps: {
          displayText: "Genius Box"
        },
      },
 
    ]
  },
  {
    path: "/dashboard/courses",
    element: <Student />,
    state: "courses",
    sidebarProps: {
      displayText: "Courses",
      icon: <DriveFileMoveOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <Student />,
        state: "student.index"
      },
      {
        path: "/dashboard/courses/GeniusBox",
        element: <GeniusBox />,
        state: "student.geniusBox",
        sidebarProps: {
          displayText: "All Courses"
        },
      },
     
    ]
  },
{
  path: "/dashboard/rewardBox",
  element: <RewardBox />,
  state: "RewardBox",
  sidebarProps: {
    displayText: "My Learnings",
    icon: <LogoutOutlinedIcon />
  }
},
  {
    path: "/dashboard/logout",
    element: <LogoutPage />,
    state: "logout",
    sidebarProps: {
      displayText: "Log Out",
      icon: <LogoutOutlinedIcon />
    }
  },

  
];

export default appRoutes;