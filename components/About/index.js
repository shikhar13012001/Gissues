import React from "react";
import Marquee from "react-fast-marquee";
import Next from "../../public/files/nextjs.png";
import Apollo from "../../public/files/apollo.png";
import Firebase from "../../public/files/firebase.png";
import Graphql from "../../public/files/graphql.png";
import Image from "next/image";
import { Box } from "@mui/material";
const App = () => (
  <Marquee speed={150}>
    <Box sx={{ marginRight: 20 }}>
      <Image src={Next} width={300} height={100} alt="Next" />
    </Box>
    <Box sx={{ marginRight: 20 }}>
      <Image src={Apollo} width={300} height={100} alt="Apollo" />
    </Box>
    <Box sx={{ marginRight: 20 }}>
      <Image src={Firebase} width={100} height={100} alt="Firebase" />
    </Box>
    <Box sx={{ marginRight: 20 }}>
      <Image src={Graphql} width={100} height={100} alt="Graphql" />
    </Box>
  </Marquee>
);
export default App;
