import {
  BookmarkIcon,
  ChatIcon,
  CompassIcon,
  FolderIcon,
} from "../assets/icons";

export const SideMenuList = [
  {
    icon: <ChatIcon />,
    title: "Chats",
    path: "/chat",
  },
  {
    icon: <CompassIcon />,
    title: "Settings",
    path: "/settings",
  },
  {
    icon: <FolderIcon />,
    title: "Folder",
    path: "/",
  },
  {
    icon: <BookmarkIcon />,
    title: "Bookmark",
    path: "/",
  },
];
