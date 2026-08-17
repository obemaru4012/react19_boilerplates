import React from "react";
// MUI5
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useMediaQuery } from "@mui/material";
// Theme
import CustomTheme from "@app/themes/CustomTheme";

const Contents = ({ state }) => {
  // テーマ読み込み
  const customTheme = CustomTheme();
  // 画面幅が "lg"（1280px以上）なら true、それ未満なら false
  const isLargeUp = useMediaQuery(customTheme.breakpoints.up("lg"));
  // 画面幅が "md"（800px以上）なら true、それ未満なら false
  const isMediumUp = useMediaQuery(customTheme.breakpoints.up("md"));
  // 画面判定
  const isLarge = isLargeUp;
  const isMedium = !isLargeUp && isMediumUp;

  return (
    <React.Fragment>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{
          minHeight: "100vh"
        }}
      >
        <Grid item xs={12}></Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Contents;
