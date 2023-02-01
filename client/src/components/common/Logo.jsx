import { Typography, useTheme } from "@mui/material";
import React from "react";

const Logo = () => {
  const theme = useTheme();
  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      Nonton
      <span style={{ color: theme.palette.primary.main }}>Dong</span>
    </Typography>
  );
};

export default Logo;
