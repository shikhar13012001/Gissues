import React from "react";
import { Chip } from "@mui/material";

const Labels = ({ node, onClick, style }) => {
  const { name, color } = node;
  return (
    <Chip
      label={name}
      sx={{
        bgcolor: `#${color}`,
        color: "white",
        fontSize: 10,
        mr: 2,
        fontWeight: "bold",
        ...style,
      }}
      size="small"
    />
  );
};
export default Labels;
