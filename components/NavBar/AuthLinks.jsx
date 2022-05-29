import React from "react";
import { Button ,Stack} from "@mui/material";
import Link from "next/link";
const AuthLinks = () => {
  return (
    <Stack direction={"row"} spacing={5}>
      <Link href="/register">
        <Button
          sx={{color: "black", p: "10px 15px" }}
        >
          Register
        </Button>
      </Link>
      <Link href="/login">
        <Button
        variant="contained"
          sx={{ backgroundColor: "black", color: "white", p: "10px 15px" }}
        >
          Login
        </Button>
      </Link>
    </Stack>
  );
};

export default AuthLinks;
