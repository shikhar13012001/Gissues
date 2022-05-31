import { Typography, Grid, Button, Link, Box, Chip } from "@mui/material";
import React from "react";
import Labels from "./Lables";
import { BiGitPullRequest, BiBookmarks } from "react-icons/bi";
import { VscIssues } from "react-icons/vsc";
import { MdUpdate } from "react-icons/md";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.config";
import Image from "next/image";
const IssueCardComponent = ({ node }) => {
  const [bookmark, setBookmark] = React.useState(false);
  const handleBookmark = () => {
    setBookmark(!bookmark);
  };
  const [user,loading,error] = useAuthState(auth);

  const { repository, url, title, number, labels, updatedAt } = node;

  if (!repository) {
    return null;
  }
  const { owner, name, description } = repository;
  return (
    <Grid
      container
      columns={12}
      sx={{
        width: "100%",
        border: "2px solid black",
        padding: 2,
        borderRadius: 1,
        mb: 4,
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="body1"
          component="div"
          sx={{
            fontWeight: "light",
            color: "gray",
            fontFamily: "monospace",
            alignItems: "center",
            display: "flex",
            gap: 2,
            mb: 1,
          }}
        >
          <BiGitPullRequest color="green" size={24} />{" "}
          <Image
            src={owner.avatarUrl}
            width={25}
            height={25}
            alt="profile-image"
            className="image-set-profile"
          />
          {" \t"}@{owner.login}/{name} <MdUpdate />{" "}
          {new Date(updatedAt).toLocaleString()}
        </Typography>
        {labels.edges.map(({ node }, key) => {
          return <Labels node={node} key={key} />;
        })}
        <Typography
          variant="h5"
          sx={{ fontWeight: "bolder", fontFamily: "monospace" }}
        >
          #{number}: {title}
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{ mt: 3, width: "80%", fontFamily: "monospace" }}
        >
          {description}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          endIcon={<VscIssues />}
          component={"a"}
          href={url}
          sx={{
            mt: 3,
            backgroundColor: "#35d64d",
            padding: "10px 15px",
            color: "#fff",
            boxShadow: "none",
            mr: 2,
          }}
        >
          View Issue
        </Button>
        <Button
          variant="outlined"
          color="primary"
          endIcon={bookmark ? <BsBookmarkCheckFill /> : <BiBookmarks />}
           disableElevation
           disabled={!!!user}
          sx={{
            mt: 3,
            padding: "10px 15px",
            color: "black",
            boxShadow: "none",
            backgroundColor: bookmark ? "yellow" : "white",
          }}
          onClick={handleBookmark /* add bookmark */}
        >
          {bookmark ? "Bookmarked" : "Bookmark issue for later"}
        </Button>
      </Grid>
    </Grid>
  );
};
export default IssueCardComponent;
