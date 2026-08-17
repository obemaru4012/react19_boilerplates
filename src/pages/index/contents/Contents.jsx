import React from "react";
// MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
// Theme
import CustomTheme from "@app/themes/CustomTheme";

const TECH_STACK = ["React 19", "MUI v7", "Vite 8", "Emotion"];

const Contents = ({ state }) => {
  // テーマ読み込み
  const customTheme = CustomTheme(state.mode);
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
          minHeight: "100vh",
          bgcolor: "background.default",
          px: 2,
          position: "relative"
        }}
      >
        <IconButton
          onClick={state.toggleMode}
          aria-label='toggle dark mode'
          sx={{ position: "absolute", top: 16, right: 16 }}
        >
          {state.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        <Grid item xs={12}>
          <Box
            sx={{
              maxWidth: 640,
              textAlign: "center"
            }}
          >
            <Typography
              variant={isLarge ? "h2" : isMedium ? "h3" : "h4"}
              component='h1'
              sx={{ fontWeight: 700, color: "text.primary" }}
            >
              {"React 19 Boilerplate"}
            </Typography>

            <Typography
              variant='body1'
              sx={{ mt: 2, mb: 4, color: "text.secondary" }}
            >
              {
                "Vite + MUI + Emotion で構成された React 19のスターターテンプレートです。"
              }
            </Typography>

            <Stack
              direction='row'
              spacing={1}
              justifyContent='center'
              flexWrap='wrap'
              useFlexGap
              sx={{ mb: 4 }}
            >
              {TECH_STACK.map((tech) => (
                <Chip key={tech} label={tech} variant='outlined' />
              ))}
            </Stack>

            <Divider sx={{ mb: 4 }} />

            <Button
              variant='outlined'
              size='large'
              href='https://github.com/obemaru4012/react19_boilerplates'
              target='_blank'
              rel='noopener noreferrer'
            >
              {"GitHubを見る"}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Contents;
