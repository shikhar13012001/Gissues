import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import _ from "lodash";
import SearchContext from "./IssueContext";
export default function SearchIssues() {
  const { setSearchData } = React.useContext(SearchContext);
  const handleChange = _.debounce((e) => {
    e.preventDefault();
    console.log(e.target.value);
    setSearchData({ keyword: e.target.value });
  }, 500);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Paper
      component="form"
      elevation={0}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        mb: 5,
        border: "2px solid black",
      }}
      onSubmit={handleSubmit}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Issues"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={handleChange}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
