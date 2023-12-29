import { Stack, Typography, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Contact from "../public/files/contact.png";
import Image from "next/image";
import MarqueeComponent from "../components/About/index";
import Layout from "../components/Layout";
const AboutUs = () => {
  return (
    <Layout title={"About Us"}>
      <Container sx={{ width: "100%", margin: 0 }}>
        <Typography
          variant="h1"
          sx={{ m: { lg: 5, sm: 1 }, fontWeight: "bold" }}
        >
          Gissues
        </Typography>
        <Typography
          variant="h5"
          sx={{ m: { lg: 5, xs: 1 }, fontFamily: "monospace" }}
        >
          Gissues is a web application that allows you to search for issues in
          GitHub. It is built for new developers who want to learn more about
          GitHub and open source.
        </Typography>
        <Paper
          sx={{
            m: { lg: 5, sm: 1 },
            fontFamily: "monospace",
            display: "flex",
            margin: "auto",
            width: "100%",
          }}
          elevation={12}
          className="about-us-image"
        />

        <Stack direction={{ xs: "column", lg: "row" }} sx={{ width: "100%" }}>
          <div style={{ width: "100%", height: 300 }}>
            <img
              src={Contact.src}
              alt="Contact"
              style={{
                width: "100%",
                height: "100%",
                position: "relative", // This is important property otherwise image will not be visible
                objectFit: "contain",
              }}
            />
          </div>
          <Typography variant="h6" sx={{ fontFamily: "monospace" }}>
            You can contact me at:
            <br />
            <strong>shikhar13012001.apply@gmail.com</strong>
          </Typography>
        </Stack>
        <Typography variant="h6" sx={{ fontFamily: "monospace" }}>
          This project is built on
        </Typography>
        <MarqueeComponent />
        <Typography variant="body1" sx={{ mt: 5, fontFamily: "monospace" }}>
          This product is not affiliated with GitHub in any way.
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 4, fontFamily: "monospace", fontWeight: "bold" }}
        >
          This product is completely owned by the developers of @BlackBird.
        </Typography>
      </Container>
    </Layout>
  );
};
export default AboutUs;
