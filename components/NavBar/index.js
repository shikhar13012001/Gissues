import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import NavLinks from "./NavLinks";
import AuthLinks from "./AuthLinks";
import Drawer from "../Drawer";
const NavBar = () => {
  const isMobile = useMediaQuery("(max-width:700px)");
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 10,
        height: "100px",
      }}
    >
      <AiFillGithub size={60} />
      <Box
        sx={{
          display: "flex",
          justifyContent: isMobile ? "flex-end" : "space-between",
          width: "100%",
        }}
      >
        {isMobile ? (
          <Drawer />
        ) : (
          <>
            <NavLinks />
            <AuthLinks />
          </>
        )}
      </Box>
    </Box>
  );
};
export default NavBar;
