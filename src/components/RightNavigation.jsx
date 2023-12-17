import React from "react";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Button } from "@mui/material";

const RightNavigation = () => {
  return (
    <>
      <div className="h-screen sticky top-0 py-2 border-l">
        <div className="flex flex-col gap-4">
          {/* search and dark functionalities  */}
          <div className="flex items-center gap-6 ml-1 shadow-sm rounded-md p-4">
            <div className="flex items-center relative">
              <input
                type="text"
                placeholder="Search here..."
                className="border rounded-md pl-2 pr-10 text-sm font-semibold outline-none  h-10 w-full"
              />
              <SearchOutlinedIcon className="absolute text-gray-600 right-2 cursor-pointer" />
            </div>
            <div className="cursor-pointer">
              <WbSunnyOutlinedIcon />
            </div>
          </div>
          {/* verification  */}
          <div className="space-y-5 shadow-sm rounded-md p-6 ml-1">
            <h1 className="text-xl font-bold tracking-widest">
              Get verified <VerifiedIcon className="text-blue-400" />
            </h1>
            <p className="text-sm font-bold text-gray-600">
              Subscribe to unlock more features
            </p>
            <Button
              sx={{
                width: "100%",
                bgcolor: "#1e88e5",
                color: "white",
                borderRadius: "20px",
              }}
              variant="contained"
            >
              Get Verified
            </Button>
          </div>
        </div>
        {/* live sessions  */}
        <div className="ml-1 space-y-4">
          <h1 className="text-md font-semibold  ">Whats new tell us...</h1>
          <div className="flex flex-col gap-2 bg-black/10 p-2 rounded-md">
            <p className="text-gray-500 font-semibold text-xs">
              Live score IND and AUS world cup
            </p>
            <p className="text-sm font-semibold">
              <span className="text-blue-600 tracking-widest">IND</span> VS{" "}
              <span className="text-yellow-600 tracking-widest">AUS</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default RightNavigation;
