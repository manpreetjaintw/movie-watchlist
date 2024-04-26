import React, { useEffect, useState } from "react";
import WatchList from "../../watchlist/WatchList";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../component/card/Cards";
import { Box, Container, Grid, Typography } from "@mui/material";
import { BasicButton } from "../../component/button";
import { searchFilter, watchListRemove } from "../../redux/action/index";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import "./watchlistscreen.css";

function WatchListScreen() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const watchListData = useSelector((state) => state.UserReducer.watchData);
  const user = JSON.parse(localStorage.getItem("token"))
  const keys = Object.keys(watchListData);
  let key = keys.filter(item => item === user)
  const data = user && (watchListData[user] || []);

  const [filterData, setFilterData] = useState(data);

  const removBtn = {
    backgroundColor: "black",
    color: "#fff",
    fontSize: "16px",
    position: "absolute",
    top: "1px",
    left: "1px",
    border: "none",
    padding: "10px",
  };

  function handleRemove(id) {
    dispatch(watchListRemove(id));
  }

  useEffect(() => {
    if (search !== '') {
      const updatedSearch = data?.filter((item) => item.Title.toLowerCase().includes(search.toLowerCase()));
      setFilterData(updatedSearch);
    } else {
      setFilterData(data);
    }
  }, [search, data]);

  

  return (
    <>
    
      <Container maxWidth="xxl">
        <Grid container spacing={2}>
          <WatchList setSearch={setSearch} />
          <Grid item lg={9} md={9}>
            <Box className="movieBox" sx={{ py: 2 }}>
              <Typography variant="h2">
                {" "}
                Movies by Tom Cruise{" "}
                <EditOutlinedIcon
                  style={{ marginLeft: "10px", fontSize: "18px" }}
                />{" "}
              </Typography>
              <Typography className="aboutPara">
                About this watchlist
              </Typography>
              <Typography>
                This list lorem ipsum dolor et blah blah blah
              </Typography>
            </Box>
            <Grid container gap={4.5}>
              {filterData?.map((item, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={2.5}
                  md={2.5}
                  lg={2}
                  xl={2.1}
                  sx={{ position: "relative" }}
                >
                  <Cards
                    style={{
                      width: "100%",
                      margin: "auto",
                      border: "1px solid #eee",
                      boxShadow: "0px 0px 10px 0px #e5e0e0",
                      padding: "0px",
                      height: "100%",
                    }}
                    image={item.Poster}
                    title={item.Title}
                    userId={item.Year}
                  />
                  <BasicButton
                    handleClick={() => handleRemove(item.imdbID)}
                    style={removBtn}
                    title="remove"
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default WatchListScreen;
