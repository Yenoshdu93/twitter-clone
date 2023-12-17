import { Grid } from "@mui/material";
import Navigation from "../components/Navigation";
import HomePage from "../components/HomePage";
import RightNavigation from "../components/RightNavigation";
import { Route, Routes } from "react-router-dom";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <>
      <div>
        <Grid container className="px-4 lg:px-32 w-full justify-between">
          {/* Navigation */}
          <Grid
            item
            xs={12}
            sm={false}
            lg={2.4}
            className="hidden lg:block w-full relative"
          >
            <Navigation />
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} sm={12} md={12} lg={6} className="w-full relative">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Grid>

          {/* Right Navigation */}
          <Grid
            item
            xs={12}
            sm={false}
            md={false}
            lg={3}
            className="hidden lg:block w-full relative"
          >
            <RightNavigation />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Home;
