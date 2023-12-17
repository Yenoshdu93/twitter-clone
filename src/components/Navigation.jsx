import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { navigationMenu } from "../data/Notification.js";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logout");
    handleClose();
  };
  return (
    <>
      <div className="sticky top-0 h-screen flex flex-col justify-around border-r p-2">
        <div onClick={() => navigate("/")} className="py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="1px"
            y="1px"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            className="cursor-pointer hover:bg-black/20 duration-300  px-2 py-1 rounded-md"
          >
            <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
          </svg>
        </div>
        <div className="">
          {navigationMenu.map((item, i) => (
            <Link
              className="flex items-center py-2 pl-2 space-x-6 hover:bg-black/10 rounded-md duration-500 group"
              key={i}
              to={item.path}
            >
              <span>
                {" "}
                {<item.icon className="group-hover:text-blue-400" />}
              </span>
              <span className="text-sm font-semibold">{item.title}</span>
            </Link>
          ))}
        </div>
        <div>
          <Button
            sx={{
              width: "100%",
              bgcolor: "#1e88e5",
              color: "white",
              py: "10px",
              borderRadius: "20px",
            }}
            variant="contained"
          >
            Tweet
          </Button>
        </div>
        <div className="flex items-center gap-1 cursor-pointer duration-500 hover:bg-black/10 py-2 px-1 rounded-md">
          <Avatar />
          <div>
            <p className="text-sm font-bold">Yenoshdulla</p>
            <p className="text-xs text-gray-500">yenosh@gmail.com</p>
          </div>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <p className="text-xs font-semibold text-gray-600">more</p>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleLogout}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navigation;
