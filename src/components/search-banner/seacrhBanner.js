import React from "react";
import SearchImg from "../../media/search.png";
import Banner from '../../media/banner.png';
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import "./searchBanner.scss";
import SelectBox from "./select";

function SearchBarSec() {
  return (
    <div className="search-bar-container">
      <div className="seacrh-title-container">
        <div><h1>The Most Exciting jobs</h1></div>
        <div>
          <img src={SearchImg} alt="search-jobs"></img>
        </div>
        <div className="search-box">
          <div className="input-box">
            <span>
              <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            </span>
            <span>
              <TextField
                id="input-with-sx"
                label="Job title or Keyword"
                variant="outlined"
              />
            </span>
          </div>

          <div className="Location-box">
            <span>
              {" "}
              <LocationOnIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            </span>
            <span>
              {" "}
              <SelectBox
                placeHolder="Location"
                labelName="Location"
                menu1="India"
                menu2="Australia"
              />{" "}
            </span>
          </div>

          <div className="remote-box">
            <CircleOutlinedIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <span>
              {" "}
              <SelectBox
                placeHolder="Remote"
                labelName="Remote"
                menu1="India"
                menu2="Australia"
              />{" "}
            </span>
          </div>

          <Button variant="contained" size="large">
            Search
          </Button>
        </div>
      </div>


      <div className="banner-container">
        <img src={Banner} alt="banner-img"></img>

      </div>
    </div>
  );
}

export default SearchBarSec;
