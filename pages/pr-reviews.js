import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PULL_REQUESTS } from "../graphql/queries";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.config";
import { Container } from "@mui/system";
import { Stack, Typography, Box } from "@mui/material";
import Image from "next/image";
import PullRequest from "../components/PullRequest";
import Pagination from "@mui/material/Pagination";
import GithubGraph from "../components/githubGraph";
const PRReviews = () => {
  //   const [page, setPage] = React.useState(1);
  const [user] = useAuthState(auth);
  const username = user?.reloadUserInfo?.screenName;
  const { data, loading, refetch } = useQuery(GET_PULL_REQUESTS, {
    variables: {
      user: username,
      after: null,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (!user) {
    router.push("/");
    return;
  }
  const { avatarUrl } = data?.user || {};
  const pullRequests = data?.user?.pullRequests?.edges;
  const totalCount = data?.user?.pullRequests?.totalCount;
  const pageCursor = data?.user?.pullRequests?.pageInfo?.endCursor;

  const handlePagination = (e) => {
    if (e.target.innerText === "1") {
      refetch({
        after: null,
      });
      return;
    }
    refetch({
      after: pageCursor,
    });
  };
  return (
    data?.user && (
      <Container sx={{ mt: 4 }}>
        <GithubGraph username={username} />
        <Stack
          direction="row"
          spacing={3}
          sx={{ display: "flex", alignItems: "center", mb: 4 }}
        >
          <Image
            src={avatarUrl}
            width={150}
            height={150}
            alt="avatar-url"
            className="image-profile"
          />
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", fontFamily: "monospace" }}
          >
            @{username}
            <br />
          </Typography>
        </Stack>
        <Typography variant="h5" sx={{ fontFamily: "monospace" }}>
          Issues: {totalCount}
        </Typography>
        {pullRequests?.map((pr) => (
          <PullRequest key={pr.node.id} pr={pr} />
        ))}
        <Box sx={{ width: "100%", display: "grid", placeContent: "center" }}>
          <Pagination
            count={Math.ceil(totalCount / 10)}
            variant="outlined"
            shape="rounded"
            onChange={handlePagination}
          />
        </Box>
      </Container>
    )
  );
};

export default PRReviews;
