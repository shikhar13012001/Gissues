import { Box } from "@mui/material";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import NavLinks from "./NavLinks";
import AuthLinks from "./AuthLinks";
const NavBar = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", alignItems: "center", gap: 10 }}>
      <AiFillGithub size={60} />
      <Box sx={{ display: "flex", justifyContent: "space-between",width:'100%' }}>
        <NavLinks />
        <AuthLinks />
      </Box>
    </Box>
  );
};
export default NavBar;
