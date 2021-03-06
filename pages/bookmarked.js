import React from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { auth, database } from "../firebase.config";
import { CONSTANTS } from "../utils";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "@apollo/client";
import { GET_BOOKMARKS } from "../graphql/queries";
import { Container } from "@mui/material";
import Issues from "../components/BookmarkedIssue";
import BackPack from "../public/files/Backpack.png";
import Image from "next/image";
import { Typography } from "@mui/material";
import Loading from "../components/Loading";
import Layout from "../components/Layout";
const Bookmarked = () => {
  const [user, userLoading] = useAuthState(auth);
  const collectionRef =
    !userLoading && user && doc(database, CONSTANTS.COLLECTION_NAME, user?.uid);
  const [value, loading, error] = useDocument(collectionRef, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const bookmarks = value?.data()?.bookmarks || [];

  const { data, loading: bookmarksloading } = useQuery(GET_BOOKMARKS, {
    variables: {
      ids: bookmarks,
    },
  });

  if (loading || userLoading || bookmarksloading) return <Loading />;
  if (error) return <p>Error :(</p>;

  return (
    <Layout title={"Bookmarked Issues"} description={"Bookmarked Issues"}>
    <Container
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {data.nodes.length > 0 ? (
        data.nodes.map((item, key) => {
          return <Issues node={item} key={key} />;
        })
      ) : (
        <>
          <Image src={BackPack} width={400} height={400} alt="Backpack" />
          <Typography variant="h4" className="SpaceFont">
            You have no bookmarked issues.
          </Typography>
        </>
      )}
    </Container>
    </Layout>
  );
};

export default Bookmarked;
