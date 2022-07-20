import { Container, Typography } from "@mui/material";
import React from "react";
import Error from "../public/files/Error.png";
import Image from "next/image";
import Layout from "../components/Layout";
const ErrorPage = () => {
  return (
    <Layout title="404 Not Found" description="This Page does not exist">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ textAlign: "center", m: 5, fontWeight: "bold" }}
        >
          404! Oops! Page not found.
        </Typography>
        <Image src={Error} width={400} height={400} alt="Error" />
      </Container>
    </Layout>
  );
};

export default ErrorPage;
