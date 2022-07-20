import React from "react";
import {
  Typography,
  Grid,
  Button,
  Link,
  Box,
  useMediaQuery,
} from "@mui/material";
import Issues from "../components/Issues";
import { useQuery, NetworkStatus } from "@apollo/client";
import { GET_ISSUES } from "../graphql/queries";
import SearchIssues from "../components/Issues/SearchComponent";
import LabelSelect from "../components/Issues/LabelSelect";
import SearchContext from "../components/Issues/IssueContext";
import LanguageSelect from "../components/Issues/LanguageSelect";
import { RiFilter2Fill } from "react-icons/ri";
import { query, CONSTANTS } from "../utils/index";
import { doc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { database, auth } from "../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import BookmarkContext from "../components/Issues/BookmarkContext";
import Pagination from "@mui/material/Pagination";
import Loading from "../components/Loading";
import { FontSizes } from "../fonts";
import Layout from "../components/Layout";
const IssuesPage = () => {
  const isMobile = useMediaQuery("(max-width:700px)");
  const [searchData, setSearchData] = React.useState({});
  const [showFilter, setFilter] = React.useState(false);
  const [page, setPage] = React.useState(1);
  // const [bookmarks, setBookmarks] = React.useState([]);

  const [user, userLoading] = useAuthState(auth);
  const collectionRef =
    !userLoading && user && doc(database, CONSTANTS.COLLECTION_NAME, user?.uid);
  const [value] = useDocument(collectionRef, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const { bookmarks } =
    !!value && value.data() ? value.data() : { bookmarks: [] };

  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_ISSUES,
    {
      notifyOnNetworkStatusChange: true,
      variables: {
        query: CONSTANTS.DEFAULT_QUERY,
      },
    }
  );
  const totalCount = data?.search?.issueCount;
  const pageCursor = data?.search?.pageInfo?.endCursor;
  const handleSearch = (e) => {
    e.preventDefault();
    refetch({
      query: query(searchData),
    });
  };

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
    setPage(Number(e.target.innerText));
  };

  if (networkStatus === NetworkStatus.refetch) return "Refetching!";
  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  const { search } = data;
  const { edges } = search;

  return (
    <Layout title="Issues">
      <Box sx={{ width: "100%" }}>
        <Typography variant="h3" fontSize={FontSizes.subHeading} sx={{ m: 5 }}>
          Search Issues
        </Typography>
        <SearchContext.Provider
          value={{ searchData, setSearchData, handleSearch }}
        >
          <SearchIssues />
          <Button
            variant={showFilter ? "outlined" : "contained"}
            disableElevation
            fullWidth={isMobile}
            sx={{ mb: 2 }}
            onClick={() => setFilter(!showFilter)}
          >
            <RiFilter2Fill /> {showFilter ? "HideFilters" : "Filter Issues"}
          </Button>
          {showFilter && (
            <>
              <LanguageSelect />
              <LabelSelect />
              <Button
                variant="contained"
                endIcon={<RiFilter2Fill />}
                disableElevation
                sx={{ mt: 2, mb: 2 }}
                onClick={handleSearch}
              >
                Apply filters
              </Button>
            </>
          )}
        </SearchContext.Provider>
        <BookmarkContext.Provider value={{ bookmarks }}>
          {edges.map(({ node }, key) => {
            return <Issues node={node} key={key} />;
          })}
        </BookmarkContext.Provider>
        <Box sx={{ width: "100%", display: "grid", placeContent: "center" }}>
          <Pagination
            count={Math.ceil(totalCount / 10)}
            variant="outlined"
            shape="rounded"
            onChange={handlePagination}
            page={page}
          />
        </Box>
      </Box>
    </Layout>
  );
};
export default IssuesPage;
