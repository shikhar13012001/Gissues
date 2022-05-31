import React from "react";
import { Typography, Grid, Button, Link, Box } from "@mui/material";
import Issues from "../components/Issues";
import { useQuery } from "@apollo/client";
import { GET_ISSUES } from "../graphql/queries";
import { NetworkStatus } from "@apollo/client";
import SearchIssues from "../components/Issues/SearchComponent";
import SearchContext from "../components/Issues/IssueContext";
const IssuesPage = () => {
  const [issues, setIssues] = React.useState([]);
  const [searchData, setSearchData] = React.useState({});
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_ISSUES,
    {
      notifyOnNetworkStatusChange: true,
      variables: {
        query:
          'label:"good first issue" language:JavaScript updated:>2021-12-01 state:open',
      },
    }
  );

  if (networkStatus === NetworkStatus.refetch) return "Refetching!";
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  const { search } = data;
  const { edges } = search;

  return (
    <Box sx={{ width: "100%" }}>
        <Typography variant="h3" sx={{ m: 5 }}>
          Search Issues
        </Typography>
        <SearchContext.Provider value={{ searchData, setSearchData }}>
        <SearchIssues />
        </SearchContext.Provider>
        {edges.map(({ node }, key) => {
          return <Issues node={node} key={key} />;
        })}
      </Box>
  );
};
export default IssuesPage;
