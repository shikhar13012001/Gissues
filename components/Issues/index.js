import { Typography, Grid, Button, Link, Box, Chip } from "@mui/material";
import React from "react";
import { BiGitPullRequest } from "react-icons/bi";
import { VscIssues } from "react-icons/vsc";
import { RiShoppingBasket2Line } from "react-icons/ri";
const IssueCardComponent = () => {
  return (
    <Grid
      container
      columns={12}
      sx={{
        width: "100%",
        border: "1px solid grey",
        padding: 2,
        borderRadius: 1,
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="body1"
          component="div"
          sx={{ fontWeight: "light", color: "gray", fontFamily: "monospace" }}
        >
          <BiGitPullRequest color="green" size={24} />{" "}
          @shikhar13012001/BlackBird{" "}
          <Chip label="open" sx={{ color: "green", width: "8em" }} />
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bolder", fontFamily: "monospace" }}
        >
          #1: Fix the bug
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{ mt: 3, width: "80%", fontFamily: "monospace" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          euismod, urna eu tincidunt consectetur, nisl nisi aliquet nunc,
          euismod aliquam nisl nunc euismod nisl...
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          endIcon={<VscIssues />}
          sx={{
            mt: 3,
            backgroundColor: "#6cc644",
            padding: "10px 15px",
            color: "#fff",
            boxShadow: "none",
            mr: 2,
          }}
        >
          View Issue
        </Button>
        <Button
          variant="outlined"
          color="primary"
          endIcon={<RiShoppingBasket2Line />}
          sx={{
            mt: 3,
            padding: "10px 15px",
            color: "black",
            boxShadow: "none",
          }}
        >
          Save issue to your basket
        </Button>
      </Grid>
    </Grid>
  );
};
export default IssueCardComponent;
