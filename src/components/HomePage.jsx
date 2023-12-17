import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Avatar, Button } from "@mui/material";
import CollectionsIcon from "@mui/icons-material/Collections";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TweetCard from "./TweetCard";

const validation = Yup.object().shape({
  content: Yup.string().min(10).required("Tweet required"),
});

const HomePage = () => {
  const [imgUpload, setImgupload] = useState(false);
  const [selectImg, setSelectImg] = useState("");

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    validationSchema: validation,
    onSubmit,
  });

  const imgUploaer = (e) => {
    setImgupload(true);
    const imgUrl = e.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectImg(imgUrl);
    setImgupload(false);
  };

  return (
    <>
      <div className="space-y-6 p-2">
        <div className="flex flex-col space-y-4">
          <h1 className="text-sm lg:text-xl font-semibold">Home</h1>
          <div className="flex space-x-4">
            <Avatar />
            <form
              autoComplete="off"
              onSubmit={formik.handleSubmit}
              className="grow"
            >
              <div>
                <input
                  name="content"
                  type="text"
                  className="w-full h-10 px-2 rounded-md bg-black/5 border-none outline-none text-sm "
                  placeholder="Wanna tell us new"
                  value={formik.values.content}
                  onChange={formik.handleChange}
                />
                {formik.errors.content && formik.touched.content && (
                  <p className="text-xs text-blue-400 py-2">
                    {formik.errors.content}
                  </p>
                )}
              </div>
              {/* img  */}
              <div></div>
              {/* img and other content */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-4">
                  <label className="cursor-pointer">
                    <CollectionsIcon className="text-blue-400" />
                    <input
                      type="file"
                      name="image"
                      className="hidden"
                      onChange={imgUploaer}
                    />
                  </label>
                  <LocationOnIcon />
                  <GraphicEqIcon />
                </div>
                <Button
                  sx={{
                    fontWeight: "bold",
                    bgcolor: "#1e88e5",
                    color: "white",
                    borderRadius: "20px",
                  }}
                  variant="contained"
                  type="submit"
                >
                  Tweet
                </Button>
              </div>
            </form>
          </div>
          {/* tweet section  */}
          <div className="w-full">
            {[1, 1, 1, 1, 1].map((item, i) => (
              <TweetCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
