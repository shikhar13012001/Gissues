import React from "react";
import { Button, Stack } from "@mui/material";
import { auth } from "../../firebase.config";
import { BsGithub } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import {  GithubAuthProvider, signInWithPopup } from "firebase/auth";
import Popper from "./LogOutPopover";
import Loading from "../../components/Loading";
const AuthLinks = () => {
  const GithubAuth = new GithubAuthProvider();
  const handleGitHubLogin = async () => {
    await signInWithPopup(auth, GithubAuth);
  //  console.log(creds.user.uid);
  };
  const [user, loading] = useAuthState(auth);
  if (loading) return <Loading />;

  return (
    <Stack direction="row" spacing={5}>
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
