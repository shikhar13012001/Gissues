import React from "react";
import { Typography, Grid, Button, Link } from "@mui/material";
import { BsTerminal } from "react-icons/bs";
import { FaCodeBranch } from "react-icons/fa";
import CodeCard from "../codeCard";
const HeroSection = () => {
  return (
    <Grid container columns={12} sx={{ mt: 10 }}>
      <Grid item xs={8}>
        <Typography variant="h1" sx={{ fontWeight: "bolder" }}>
          Built for <BsTerminal /> <br />
          Open source Developers <FaCodeBranch />
        </Typography>
        <Typography variant="body1" sx={{ mt: 3, width: "80%" }}>
          Gitters is a tool for new Developers to learn how to use Git and
          Contribute to open source projects.
        </Typography>
        <Link href="/issues">
          <Button
            variant="contained"
            color="primary"
            endIcon={<BsTerminal />}
            sx={{
              mt: 3,
              backgroundColor: "#6cc644",
              padding: "10px 15px",
              color: "#fff",
            }}
          >
            Get Started
          </Button>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <CodeCard />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
