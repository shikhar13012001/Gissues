import { Container, Typography } from "@mui/material";
import React from "react";
import Error from "../public/Error.png";
import Image from "next/image";

const ErrorPage = () => {
  return (
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
  );
};

export default ErrorPage;
