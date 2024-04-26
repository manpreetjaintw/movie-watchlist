import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import BasicInput from "../component/input/BasicInput";
import { BasicButton } from "../component/button";
import "./watchlist.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import { watchLogout } from "../redux/action";

function WatchList({ setSearch }) {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const WatchListSearchStyle = {
    width: "90%",
    height: "30px",
    fontSize: "14px",
    padding: "0px 10px",
    border: "1px solid #e3dfdf",
    margin: "15px 0px",
  };
  const MyListBtn = {
    width: "90%",
    fontSize: "16px",
    backgroundColor: "transparent",
    border: "none",
    textAlign: "left",
  };
  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function handleClick() {
    navigate("/watchlistscreen ");
  }

  function handleLogout() {
    localStorage.removeItem("token");
    dispatch(watchLogout())
    navigate("/login")
  }
  function handleClickHome() {
    navigate("/mainscreen")
  }


  return (
    <>
      <Grid item lg={3} md={3} xm={12} xs={12}>
        <Box className="mainBox">
          <Typography className="headingWatchList">Watchlist</Typography>
          <BasicInput
            style={WatchListSearchStyle}
            placeholder="Search"
            onChange={handleChange}
          />
          <Typography className="homeHeading" onClick={handleClickHome}>
            <AddHomeOutlinedIcon style={{ marginRight: "7px" }} />
            Home
          </Typography>
          <Typography
            sx={{
              borderBottom: "1px solid #ddd",
              mb: 2,
            }}
          ></Typography>
          <Box className="searchList">
            <BasicButton
              style={MyListBtn}
              title="My Lists"
              handleClick={handleClick}
            />
          </Box>
           <div className="userBtn">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick1}
            >
              <PermIdentityIcon /> Guest
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Box>
      </Grid>
    </>
  );
}
export default WatchList;
