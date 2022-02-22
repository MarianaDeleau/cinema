import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const BasicRating = () => {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Value</Typography>
      <Rating name="read-only" defaultValue={2} precision={0.5} readOnly />
    </Box>
  );
};

export { BasicRating };
