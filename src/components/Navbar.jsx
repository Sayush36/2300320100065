import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">
          Campus Notifications
        </Typography>
      </Toolbar>
    </AppBar>
  );
}