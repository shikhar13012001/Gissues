import { Stack } from "@mui/material";
import React from "react";
import Link from "next/link";
import { auth } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
const NavLinks = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <Stack direction={"row"} spacing={8}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/issues">
        <a>Issues</a>
      </Link>
      {user && !loading && (
        <Link href="/pr-reviews">
          <a>Pull Requests</a>
        </Link>
      )}
    </Stack>
  );
};

export default NavLinks;
