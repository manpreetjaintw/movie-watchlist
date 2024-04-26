import React from "react";
import { Container, Grid } from "@mui/material";
import WatchList from "../../watchlist/WatchList";
import MovieCard from "../../watchlist/MovieCard";

function MainScreen() {
  return (
    <>
      <Container maxWidth="xxl">
        <Grid container spacing={2}>
            <WatchList />
          <Grid item lg={9} md={9}>
            <MovieCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default MainScreen;
