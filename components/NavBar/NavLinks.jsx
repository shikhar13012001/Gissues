import { Stack } from "@mui/material";
import React from "react";
import Link from "next/link";
const NavLinks = () => {
  return (
    <Stack direction={"row"} spacing={8}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/issues">Issues</Link>
      <Link href="/pr-reviews">Pull Requests</Link>
    </Stack>
  );
};

export default NavLinks;
