import { Chip, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { VscIssues } from "react-icons/vsc";
import { TiFlowMerge } from "react-icons/ti";
import { GrEmergency } from "react-icons/gr";
import { RiGitMergeLine } from "react-icons/ri";
const PullRequest = ({ pr }) => {
  const { node } = pr;

  const { mergeable, merged, title, url, bodyText, updatedAt } = node;
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: 100,
        border: "2px solid black",
        borderRadius: 1,
        p: 3,
        mb: 3,
      }}
    >
      <Stack direction="row" spacing={3}>
        {merged ? (
          <RiGitMergeLine size={30} color="green" />
        ) : (
          <VscIssues size={30} color="green" />
        )}
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", fontFamily: "monospace" }}
        >
          {title}
        </Typography>
      </Stack>
      <Typography
        variant="body2"
        sx={{ color: "gray", fontFamily: "monospace", mb: 3 }}
      >
        Updated At : {new Date(updatedAt).toLocaleString()}
      </Typography>
      <Stack direction="row" spacing={4} sx={{ mb: 3 }}>
        <Chip
          avatar={<GrEmergency size={18} color="white" />}
          label={mergeable === "UNKNOWN" ? "Mergable" : "CONFLICTING"}
          size="small"
          sx={{ backgroundColor: "green", color: "white", fontWeight: "bold" }}
        />
        <Chip
          avatar={<TiFlowMerge size={18} color="white" />}
          label={merged ? "Merged" : "Open"}
          size="small"
          sx={
            merged
              ? { backgroundColor: "green", color: "white", fontWeight: "bold" }
              : { backgroundColor: "red", color: "white", fontWeight: "bold" }
          }
        />
      </Stack>
      <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
        {
          // cut the text to 200 characters
          bodyText.length > 200
            ? bodyText.substring(0, 200) + "..."
            : bodyText.length > 0
            ? bodyText
            : "No description"
        }
      </Typography>
      <Button
        disableElevation
        variant="contained"
        sx={{ mt: 2, backgroundColor: "green" }}
        component="a"
        href={url}
      >
        View PR
      </Button>
    </Box>
  );
};

export default PullRequest;
