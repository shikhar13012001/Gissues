import React from "react";
import { Typography, Grid, Button, Link } from "@mui/material";
import { BsTerminal } from "react-icons/bs";
import { FaCodeBranch } from "react-icons/fa";
import CodeCard from "../codeCard";
import { useMediaQuery } from "@mui/material";
import { FontSizes } from "../../fonts";
const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width:800px)");
  return (
    <Grid
      container
      columns={12}
      sx={{ mt: 10, display: "flex", flexWrap: "wrap-reverse" }}
    >
      <Grid
        item
        xs={12}
        md={8}
        lg={8}
        sx={
          isMobile
            ? { display: "flex", flexDirection: "column", alignItems: "center" }
            : {}
        }
      >
        <Typography
          variant="h1"
          fontSize={FontSizes.Heading}
          sx={{ fontWeight: "bolder", textAlign: isMobile ? "center" : null }}
        >
          Built for <BsTerminal /> <br />
          Open source Developers <FaCodeBranch />
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 3, width: "80%", textAlign: isMobile ? "center" : null }}
        >
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
              backgroundColor: "#2dba5f",
              padding: "10px 15px",
              color: "#fff",
            }}
            disableElevation={true}
          >
            Get Started
          </Button>
        </Link>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        lg={4}
        sx={{
          display: isMobile ? "none" : "grid",
          placeContent: "center",
          mb: 5,
        }}
      >
        <CodeCard />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
