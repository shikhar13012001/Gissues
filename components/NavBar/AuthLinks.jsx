import React from "react";
import { Typography, Button, Stack, Box } from "@mui/material";
import Link from "next/link";
import { app, auth } from "../../firebase.config";
import { BsGithub } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import Popper from "./LogOutPopover";
import Loading from "../../components/Loading";
const AuthLinks = () => {
  const GithubAuth = new GithubAuthProvider();
  const handleGitHubLogin = async () => {
    const credentials = await signInWithPopup(auth, GithubAuth);
    
  };
  const [user, loading, error] = useAuthState(auth);
  if (loading) return <Loading />;
  
  return (
    <Stack direction={"row"} spacing={5}>
      {user ? (
        <Popper user={user} />
      ) : (
        <Button
          variant="contained"
          startIcon={<BsGithub />}
          sx={{ backgroundColor: "black", color: "white", p: "10px 15px" }}
          onClick={handleGitHubLogin}
          disableElevation
        >
          Login
        </Button>
      )}
    </Stack>
  );
};

export default AuthLinks;
