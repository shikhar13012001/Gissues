import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { RiMenu4Fill } from "react-icons/ri";
import DrawerStyles from "../../styles/Drawer.module.css";
import { Typography } from "@mui/material";
import { FontSizes } from "../../fonts";
import Link from "next/link";
import { DiGit } from "react-icons/di";
export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={DrawerStyles.Drawer}
    >
      <Typography
        variant="h2"
        fontSize={FontSizes.Heading}
 
        sx={{ width:'100%',fontWeight: "bold",display:'flex',alignItems:'center',justifyContent:'center',mt:5 }}
        textAlign="center"
      >
        <DiGit style={{ color: "red" }} size={100} /> Gissues
      </Typography>
      <Link href="/">
        <Typography
          variant="h1"
          className="SpaceFont"
          fontSize={FontSizes.subHeading}
        >
          Home
        </Typography>
      </Link>
      <Link href="/about">
        <Typography
          variant="h1"
          className="SpaceFont"
          fontSize={FontSizes.subHeading}
        >
          About
        </Typography>
      </Link>
      <Link href="/issues">
        <Typography
          variant="h1"
          className="SpaceFont"
          fontSize={FontSizes.subHeading}
        >
          Issues
        </Typography>
      </Link>
      <Link href="/pr-reviews">
        <Typography
          variant="h1"
          className="SpaceFont"
          fontSize={FontSizes.subHeading}
        >
          Pull Requests
        </Typography>
      </Link>
    </Box>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <RiMenu4Fill size={30} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            transitionDuration={{ enter: 500, exit: 200 }}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
