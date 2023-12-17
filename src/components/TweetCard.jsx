import React from "react";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

const TweetCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  const handleDelete = () => {
    console.log("deleted");
    handleClose();
  };

  return (
    <>
      <div className="p-4 w-full">
        {/* tweet header  */}
        <div className="w-full flex justify-between space-x-4">
          {/* avatar section  */}
          <div className="flex gap-4">
            <Avatar
              className="cursor-pointer"
              onClick={() => navigate("/profile")}
            />
            <div className="">
              <p className="text-sm font-semibold">Yenosh</p>
              <p className="text-sm font-medium text-gray-500">@dulla93</p>
            </div>
          </div>
          <div className="">
            <Button
              sx={{ borderRadius: "10px" }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleDelete}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Delete</MenuItem>
              <MenuItem onClick={handleClose}>Edit</MenuItem>
            </Menu>
          </div>
        </div>
        {/* content  */}
        <div className="p-2">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold p-2 mx-2">
              Yenosh is here to entertain you ok
            </p>
            <div className="p-4 w-full">
              <img
                className="bg-gray-400 rounded-md p-4 object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-2">
          <div className="flex items-center justify-around">
            <div className="space-x-2 cursor-pointer group">
              <ChatBubbleOutlineOutlinedIcon />
              <span className="text-sm font-semibold">54</span>
            </div>
            <div className="space-x-2 cursor-pointer group">
              <RepeatOutlinedIcon />
              <span className="text-sm font-semibold">54</span>
            </div>
            <div className="space-x-2 cursor-pointer group">
              <FavoriteBorderOutlinedIcon
                className={`${true ? "text-red-500" : "text-gray-600"}`}
              />
              <span className="text-sm font-semibold">345</span>
            </div>
            <div className="space-x-2 cursor-pointer group">
              <ThumbUpOffAltOutlinedIcon />
              <span className="text-sm font-semibold">544</span>
            </div>
            <div className="space-x-2 cursor-pointer group">
              <CloudUploadOutlinedIcon />
              <span className="text-sm font-semibold">904</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TweetCard;
