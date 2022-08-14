import React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  Button,
  Grid,
  Divider,
  Typography,
  InputBase,
} from "@mui/material";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { KeyboardArrowDown } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const DividerBar = () => {
  return (
    <div>
      <Grid
        container
        spacing={0}
        sx={{ }}
      >
        <Grid item xs={5}>
          <Typography
            sx={{
              fontWeight: "bold",
              mb: 0.5,
              borderBottom: "10px",
            }}
          >
            <Button
              sx={{
                color: "black",
                textTransform: "capitalize",
                fontWeight: "Bold",
                color: "#191970",
                ":hover": {
                  backgroundColor: "#eee",
                },
              }}
            >
            
              iamneo.ai Talent Center            </Button>
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "row",
              mr: -52,
            }}
          >
            <Button
              sx={{
                color: "black",
                textTransform: "capitalize",
                ":hover": {
                  backgroundColor: "#eee",
                },
              }}
            >
              Sort
            </Button>
            <Button
              sx={{
                color: "black",
                textTransform: "capitalize",
                ":hover": {
                  backgroundColor: "#eee",
                },
              }}
            >
              Filter
            </Button>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
           
           
        
          </Box>
        </Grid>
      </Grid>

      <Divider
        sx={{
          fontSize: "50px",
          width: "10vw",
          borderColor: "#666",
          fontWeight: "bold",
        }}
      />
      <Divider
        sx={{
          fontSize: "50px",
          width: "80vw",
          fontWeight: "bold",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default DividerBar;
