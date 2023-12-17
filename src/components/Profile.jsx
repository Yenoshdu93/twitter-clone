import React from "react";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";

const Profile = () => {
  const navigate = useNavigate();

  const handlerEdit = () => {
    console.log("first");
  };

  const handleFollow = () => {
    console.log("first");
  };
  return (
    <>
      <div>
        {/* header  */}
        <section className="sticky top-0 w-full shadow-md h-12 flex items-center space-x-5 rounded-md">
          <span>
            <ArrowBackIosOutlinedIcon
              className="cursor-pointer"
              onClick={() => navigate(-1)}
            />
          </span>
          <h1 className="text-2xl font-semibold text-gray-500">Yenoshdulla</h1>
        </section>
        <section>
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="img"
            className="w-[100%] h-[16rem] rounded-md mt-2 object-cover"
          />
        </section>
        <section className="pl-10">
          <div className="flex flex-start items-center justify-between ">
            <Avatar
              src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
              alt="profile"
              sx={{ width: "10rem", height: "10rem", border: "4px solid gray" }}
              className="transform -translate-y-20 cursor-pointer"
            />

            {true ? (
              <Button
                onClick={handlerEdit}
                variant="contained"
                sx={{
                  borderRadius: "10px",
                  paddingX: "10px",
                  paddingY: "8px",
                  color: "white",
                  bgcolor: "#1DA1F2",
                }}
              >
                Edit Profile
              </Button>
            ) : (
              <Button
                onClick={handleFollow}
                variant="contained"
                sx={{
                  borderRadius: "10px",
                  paddingX: "10px",
                  paddingY: "8px",
                  color: "white",
                  bgcolor: "#1DA1F2",
                }}
              >
                {true ? "follow" : "unfollow"}
              </Button>
            )}
          </div>
        </section>
      </div>
    </>
  );
};
export default Profile;
