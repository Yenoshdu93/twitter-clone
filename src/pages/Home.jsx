import { Grid } from "@mui/material";

const Home = () => {
  return (
    <>
      <div>
        <Grid
          container
          xs={12}
          className="px-4 lg:px-30 w-full justify-between"
        >
          <Grid xs={0} lg={2.4} className="hidden lg:block w-full relative">
            first part
          </Grid>
          <Grid xs={12} lg={6} className="w-full relative">
            first part
          </Grid>
          <Grid xs={0} lg={3.5} className="hidden lg:block w-full">
            first part
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Home;
