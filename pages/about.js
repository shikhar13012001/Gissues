import { Stack, Typography, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Contact from "../public/files/contact.png";
import Image from "next/image";
import MarqueeComponent from "../components/About/index";
const AboutUs = () => {
  return (
    <Container>
      <Typography variant="h1" sx={{ m: 5, fontWeight: "bold" }}>
        Gissues
      </Typography>
      <Typography variant="h5" sx={{ m: 5, fontFamily: "monospace" }}>
        Gissues is a web application that allows you to search for issues in
        GitHub. It is built for new developers who want to learn more about
        GitHub and open source.
      </Typography>
      <Paper
        sx={{
          m: 5,
          mb: 8,
          width: "80%",
          height: 500,
          fontFamily: "monospace",
          display: "flex",
          margin: "auto",
        }}
        elevation={12}
        className="about-us-image"
      />

      <Stack direction={"row"}>
        <Image src={Contact} width={400} alt="Contact" />
        <Typography variant="h6" sx={{ m: 5, fontFamily: "monospace" }}>
          You can contact me at:
          <strong>never_contact_me@gmail.com</strong>
        </Typography>
      </Stack>
      <Typography variant="h6" sx={{ m: 5, fontFamily: "monospace" }}>
        This project is built on
      </Typography>
      <MarqueeComponent />
      <Typography
        variant="body1"
        sx={{ ml: 5, mt: 5, fontFamily: "monospace" }}
      >
        This product is not affiliated with GitHub in any way.
      </Typography>
      <Typography
        variant="body1"
        sx={{ ml: 5, fontFamily: "monospace", fontWeight: "bold" }}
      >
        This product is completely owned by the developers of @BlackBird.
      </Typography>
    </Container>
  );
};
export default AboutUs;
