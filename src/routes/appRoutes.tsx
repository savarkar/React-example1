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

const appRoutes: RouteType[] = [
  {
    index: true,
    path: "/",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Main Menu",
      icon: <HomeOutlinedIcon />
    }
  },

  // {
  //   path: "/installation",
  //   element: <InstallationPage />,
  //   state: "installation",
  //   sidebarProps: {
  //     displayText: "Installation",
  //     icon: <FileDownloadOutlinedIcon />
  //   }
  // },
  //This section belongs to Student Dash Boards
  {
    path: "/student",
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
        path: "/student/GeniusBox",
        element: <GeniusBox />,
        state: "student.geniusBox",
        sidebarProps: {
          displayText: "Genius Box"
        },
      },
      {
        path: "/student/PartcipationHistory",
        element: <PartcipationHistory />,
        state: "student.partcipationHistory",
        sidebarProps: {
          displayText: "Partcipation History"
        }
      },
      {
        path: "/student/RewardBox",
        element: <RewardBox />,
        state: "student.rewardBox",
        sidebarProps: {
          displayText: "Reward Box"
        },
      },
      {
        path: "/student/SubscriptionToken",
        element: <SubscriptionToken />,
        state: "student.subscriptionToken",
        sidebarProps: {
          displayText: "Subscription Token"
        },
      }
    ]
  },
//This section belongs to Instructor Dash Boards
{
  path: "/instructor",
  element: <Instructor />,
  state: "instructor",
  sidebarProps: {
    displayText: "Instructor",
    icon: <DriveFileMoveOutlinedIcon />
  },
  child: [
    {
      index: true,
      element: <Instructor />,
      state: "student.index"
    },
    // {
    //   path: "/instructor/Courses",
    //   element: <Courses />,
    //   state: "instructor.courses",
    //   sidebarProps: {
    //     displayText: "Courses"
    //   },
    // },
    {
      path: "/instructor/PartcipationHistory",
      element: <PartcipationHistory />,
      state: "instructor.partcipationHistory",
      sidebarProps: {
        displayText: "Student Connect"
      }
    },
    {
      path: "/instructor/RewardBox",
      element: <RewardBox />,
      state: "instructor.rewardBox",
      sidebarProps: {
        displayText: "Upcoming Courses"
      },
    },
    {
      path: "/instructor/SubscriptionToken",
      element: <SubscriptionToken />,
      state: "instructor.subscriptionToken",
      sidebarProps: {
        displayText: "TaaS Challenge"
      },
    }
  ]
},
//This section belongs to Parent Dash Boards
{
  path: "/parent",
  element: <Parent />,
  state: "parent",
  sidebarProps: {
    displayText: "Parent",
    icon: <DriveFileMoveOutlinedIcon />
  },
  child: [
    {
      index: true,
      element: <Parent />,
      state: "parent.index"
    },
    {
      path: "/parent/GeniusBox",
      element: <GeniusBox />,
      state: "parent.geniusBox",
      sidebarProps: {
        displayText: "Student Report"
      },
    },
    {
      path: "/parent/PartcipationHistory",
      element: <PartcipationHistory />,
      state: "parent.partcipationHistory",
      sidebarProps: {
        displayText: "Connect Instructor"
      }
    },
    {
      path: "/parent/RewardBox",
      element: <RewardBox />,
      state: "parent.rewardBox",
      sidebarProps: {
        displayText: "Post Query"
      },
    },
    {
      path: "/parent/SubscriptionToken",
      element: <SubscriptionToken />,
      state: "parent.subscriptionToken",
      sidebarProps: {
        displayText: "Feedback"
      },
    }
  ]
},
//This section belongs to Admin Dash Boards
{
  path: "/admin",
  element: <Admin />,
  state: "admin",
  sidebarProps: {
    displayText: "Admin",
    icon: <DriveFileMoveOutlinedIcon />
  },
  child: [
    {
      index: true,
      element: <Admin />,
      state: "admin.index"
    },
    {
      path: "/admin/GeniusBox",
      element: <GeniusBox />,
      state: "admin.geniusBox",
      sidebarProps: {
        displayText: "Student Analytics"
      },
    },
    {
      path: "/admin/PartcipationHistory",
      element: <PartcipationHistory />,
      state: "admin.partcipationHistory",
      sidebarProps: {
        displayText: "Instructor Analytics"
      }
    },
    {
      path: "/admin/RewardBox",
      element: <RewardBox />,
      state: "admin.rewardBox",
      sidebarProps: {
        displayText: "Parent Analytics"
      },
    },
    {
      path: "/admin/SubscriptionToken",
      element: <SubscriptionToken />,
      state: "admin.subscriptionToken",
      sidebarProps: {
        displayText: "Course Analytics"
      },
    }
  ]
},
  {
    path: "/resources",
    element: <ResourcesPageLayout />,
    state: "resources",
    sidebarProps: {
      displayText: "Resources",
      icon: <FolderOutlinedIcon />
    },
    child: [
      {
        path: "/resources/alert",
        element: <AlertPage />,
        state: "resources.alert",
        sidebarProps: {
          displayText: "Alert"
        },
      },
      {
        path: "/resources/button",
        element: <ButtonPage />,
        state: "resources.button",
        sidebarProps: {
          displayText: "Button"
        }
      }
    ]
  },
  {
    path: "/message",
    element: <MessagePage />,
    state: "message",
    sidebarProps: {
      displayText: "Message",
      icon: <MessageOutlinedIcon />
    }
  },
  {
    path: "/logout",
    element: <LogoutPage />,
    state: "logout",
    sidebarProps: {
      displayText: "Log Out",
      icon: <LogoutOutlinedIcon />
    }
  },
  
];

export default appRoutes;