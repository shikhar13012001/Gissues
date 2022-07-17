import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Paper } from "@mui/material";
import Image from "next/image";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { signOut } from "firebase/auth";
import { auth, database } from "../../firebase.config";
import { doc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { CONSTANTS } from "../../utils/index";

export default function PopoverPopupState({ user }) {
  const handleLogout = async () => {
    await signOut(auth);
  };
  const [value, loading, error] = useDocument(
    doc(database, CONSTANTS.COLLECTION_NAME, user.uid),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
 
  const bookmarked=value?.data()?.bookmarks?.length||0;
 
  // find total bookmarked by user

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
          >
            <Paper sx={{ width: 300, height: 115, p: 2 }}>
              <Button
                disableRipple
                disableElevation
                fullWidth
                variant="outlined"
                color="primary"
                sx={{ mb: 1 }}
              >
                {bookmarked} issues Bookmarked
              </Button>
              <Button
                disableRipple
                disableElevation
                fullWidth
                variant="contained"
                sx={{ backgroundColor: "#2dba5f" }}
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
