import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Paper } from "@mui/material";
import Image from "next/image";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
export default function PopoverPopupState({ user }) {
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              cursor: "pointer",
            }}
            {...bindTrigger(popupState)}
          >
            <Image
              src={user.photoURL}
              width={25}
              height={25}
              alt="photo-image-user"
              className="image-profile"
            />
            <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
              @{user.reloadUserInfo.screenName}
            </Typography>
          </Box>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            enableArrow
          >
            <Paper sx={{ width: 300, height: 115, p: 2 }}>
              <Button
                disableRipple
                disableElevation
                fullWidth
                variant="outlined"
                color="primary"
                sx={{mb:1}}
              >
                0 issues Bookmarked
              </Button>
              <Button
                disableRipple
                disableElevation
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Paper>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
