import React from "react";
import { Typography, Grid, Button, Link, Box } from "@mui/material";
import Issues from "../components/Issues";
const IssuesPage = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <h1>issues</h1>
      <Issues />
    </Box>
  );
};
export default IssuesPage;
