import React from "react";
import { Typography, Grid, Button, Link, Box } from "@mui/material";
import Issues from "../components/Issues";
import { useQuery } from "@apollo/client";
import { GET_ISSUES } from "../graphql/queries";
import { NetworkStatus } from "@apollo/client";
import SearchIssues from "../components/Issues/SearchComponent";
import LabelSelect from "../components/Issues/LabelSelect";
import SearchContext from "../components/Issues/IssueContext";
import LanguageSelect from "../components/Issues/LanguageSelect";
import { RiFilter2Fill } from "react-icons/ri";
import { query } from "../utils/index";
const IssuesPage = () => {
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
  const handleSearch = () => {
    refetch({
      query: query(searchData),
    });
  };
  if (networkStatus === NetworkStatus.refetch) return "Refetching!";
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
 
  const { search } = data;
  const { edges } = search;

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h3" sx={{ m: 5 }}>
        Search Issues
      </Typography>
      <SearchContext.Provider
        value={{ searchData, setSearchData, handleSearch }}
      >
        <SearchIssues />
        <LanguageSelect />
        <LabelSelect />
        <Button variant="contained" endIcon={<RiFilter2Fill />} disableElevation sx={{ mt: 2,mb:2 }} onClick={handleSearch}>
          Apply filters
        </Button>
      </SearchContext.Provider>
      {edges.map(({ node }, key) => {
        return <Issues node={node} key={key} />;
      })}
    </Box>
  );
};
export default IssuesPage;
