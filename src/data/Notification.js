import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExploreIcon from "@mui/icons-material/Explore";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupIcon from "@mui/icons-material/Group";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PendingIcon from "@mui/icons-material/Pending";

const navigationMenu = [
  {
    title: "Home",
    icon: HomeIcon,
    path: "/",
  },
  {
    title: "Exoplore",
    icon: ExploreIcon,
    path: "/explore",
  },
  {
    title: "Notification",
    icon: NotificationsIcon,
    path: "/notification",
  },
  {
    title: "Message",
    icon: ChatBubbleOutlineIcon,
    path: "/message",
  },
  {
    title: "Group",
    icon: GroupIcon,
    path: "/group",
  },
  {
    title: "List",
    icon: ListAltIcon,
    path: "/list",
  },
  {
    title: "Verified",
    icon: VerifiedIcon,
    path: "/verified",
  },
  {
    title: "Profile",
    icon: AccountCircleIcon,
    path: "/profile",
  },
  {
    title: "More",
    icon: PendingIcon,
    path: "/more",
  },
];

export { navigationMenu };
