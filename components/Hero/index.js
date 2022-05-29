import React from "react";
import { Typography, Grid } from "@mui/material";
import { BsTerminal } from "react-icons/bs";
import { FaCodeBranch } from "react-icons/fa";
import CodeCard from "../components/codeCard";
const HeroSection = () => {
  return (
    <Grid container columns={12} sx={{ mt: 10 }}>
      <Grid item xs={8}>
        <Typography variant="h1" sx={{ fontWeight: "bolder" }}>
          Built for <BsTerminal /> <br />
          Open source Developers <FaCodeBranch />
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <CodeCard />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
