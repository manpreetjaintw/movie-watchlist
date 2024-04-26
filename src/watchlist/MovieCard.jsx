import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";
import BasicInput from "../component/input/BasicInput";
import { BasicButton } from "../component/button";
import { fetchData, watchListData } from "../redux/action/index";
import Cards from "../component/card/Cards";

export default function MovieCard() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [error, setError] = useState("")
  const userEmail = JSON.parse(localStorage.getItem('token'));

  const dataShow = useSelector((state) => state.UserReducer.data) || [];

  const isList = useSelector((state) => state?.UserReducer?.watchData);


  const user = JSON.parse(localStorage.getItem("token"))
  const data = user && (isList[user] || []);

  const SearchInputStyle = {
    width: "97%",
    height: "30px",
    border: "1px solid #cdc9c9",
    borderRadius: "6px",
    position: "relative",
    padding: "0px 10px 0px 10px",
    outline: "none",
  };

  const searchBtn = {
    width: "80px",
    height: "34px",
    backgroundColor: "#F44336",
    color: "white",
    fontSize: "16px",
    position: "absolute",
    right: "0px",
    top: "15px",
    border: "none",
    borderRadius: "6px",
    zIndex: "999",
    cursor: "pointer"
  };
  const addBtn = {
    backgroundColor: "black",
    color: "#fff",
    fontSize: "16px",
    position: "absolute",
    top: "1px",
    left: "1px",
    border: "none",
    padding: "10px"
  };
  const disabledAddBtn = {
    ...addBtn,
    backgroundColor: "gray",
    cursor: "not-allowed",
  };


  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
    setError("")
  }

  function handleClick() {

    if (search?.length <= 0) {
      setError('Please Insert Movie Name')
    }
    if (search?.length > 0) {
      dispatch(fetchData(search))
      if (dataShow?.length > 0) {
        setError('')
      } else {
        setError('Movie not Found')
      }
    }
  }

  function handleAdd(id) {
    const movieAdd = dataShow.find(item => item.imdbID === id);
    if (movieAdd) {
      const dispatchData = {
        "movieAdd": movieAdd,
        "token": userEmail
      }
      dispatch(watchListData(dispatchData));
    }

  }
  const disbaleBtn = (id) => {
    return data?.find(item => item.imdbID === id)
  }


  return (
    <>
      <Box className="wrapper">
        <Box
          className="mainContent"
          sx={{
            py: 2,
          }}
        >
          <Box
            sx={{
              border: "1px solid #d31103",
              px: 2,
              py: 2,
              borderRadius: "5px",
              backgroundColor: "#fbfbfb"
            }}
          >
            <Typography className="heading">
              Welcome to <Typography>Watchlists</Typography>
            </Typography>
            <Typography>
              Browse movies, add them to watchlists and share them with friends.
            </Typography>
            <Typography>
              Just click the <Typography sx={{
                backgroundColor: "black",
                display: "inline-block",
                color: "#fff",
                height: "20px",
                width: "20px",
                textAlign: "center",
                lineHeight: "18px"
              }}>+</Typography> to add a movie, the poster to see more details or
              to mark the movies as watched.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            py: 2,
            position: "relative",
          }}
        >
          <BasicInput
            onChange={handleChange}
            style={SearchInputStyle}
            value={search}
            placeholder="Search by title"
          />
          <BasicButton
            handleClick={handleClick}
            title="Search"
            style={searchBtn}
          />
        </Box>

        <Grid container gap={4.5}>
          {dataShow?.map((item, index) => (
            <Grid item key={index} xs={12} sm={2.5} md={2.5} lg={2} xl={2.1} sx={{ position: "relative" }}>
              <Cards
                style={{ width: "100%", margin: "auto", border: "1px solid #eee", boxShadow: "0px 0px 10px 0px #e5e0e0", padding: "0px", height: "100%" }}
                image={item.Poster}
                title={item.Title}
                userId={item.Year}
              />
              <BasicButton
                handleClick={() => handleAdd(item.imdbID)}
                title="+"
                disabled={disbaleBtn(item.imdbID)}
                style={disbaleBtn(item.imdbID) ? disabledAddBtn : addBtn}
              />
            </Grid>
          ))}
        </Grid>
        {(error && dataShow?.length === 0) &&
          <Box>
            <Typography sx={{ fontSize: "20px", color: "red", fontWeight: 500 }}>{error}.......</Typography>
          </Box>}
      </Box>
    </>
  );
}
