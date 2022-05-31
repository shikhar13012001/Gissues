import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const AboutUs = () => {
  return (
    <Container>
      <Typography variant="h1" sx={{ m: 5, fontWeight: "bold", }}>
        Gissues
      </Typography>
      <Typography variant="h5" sx={{ m: 5,fontFamily:'monospace' }}>
        Gissues is a web application that allows you to search for issues in
        GitHub. It is built for new developers who want to learn more about
        GitHub and open source.
      </Typography>
      <Typography variant="body1" sx={{ ml:5, mt: 5,fontFamily:'monospace' }}>
          This product is not affiliated with GitHub in any way.         
          </Typography>
          <Typography variant="body1" sx={{ ml:5,fontFamily:'monospace',fontWeight:'bold' }}>
              This product is completely owned by the developers of @BlackBird.
              </Typography>

    </Container>
  );
};
export default AboutUs;
