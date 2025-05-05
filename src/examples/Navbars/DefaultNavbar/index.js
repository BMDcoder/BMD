import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Link } from "react-router-dom";
import logo from "assets/images/logo.png";

function DefaultNavbar({ brand, routes, transparent, light }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: transparent ? "transparent" : "rgba(255, 255, 255, 0.6)",
        backdropFilter: transparent ? "none" : "saturate(180%) blur(10px)",
        boxShadow: "none",
        borderRadius: 0,
        padding: 1,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        {/* Brand Logo and Name */}
        <MKBox component={Link} to="/" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <MKBox
            component="img"
            src={logo}
            alt="logo"
            sx={{ height: 30, width: "auto", display: "block" }}
          />
          <MKTypography
            variant="button"
            fontWeight="bold"
            color={light ? "white" : "dark"}
            sx={{ fontSize: "1.25rem" }}
          >
            {brand}
          </MKTypography>
        </MKBox>

        {/* Desktop Links */}
        <MKBox sx={{ display: { xs: "none", md: "flex" }, gap: 2, alignItems: "center" }}>
          {routes.map(({ name, route }) => (
            <MKTypography
              key={name}
              component={Link}
              to={route}
              variant="button"
              color={light ? "white" : "text"}
              sx={{ textTransform: "capitalize", fontWeight: "regular" }}
            >
              {name}
            </MKTypography>
          ))}
        </MKBox>

        {/* Hamburger Icon on Mobile */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon sx={{ color: light ? "white" : "black" }} />
        </IconButton>

        {/* Drawer for Mobile Navigation */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{ sx: { width: 250, paddingTop: 1, paddingX: 2 } }}
        >
          {/* Close Icon */}
          <MKBox sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={toggleDrawer(false)} size="large">
              <CloseIcon />
            </IconButton>
          </MKBox>

          {/* Nav List */}
          <List>
            <ListItem disableGutters>
              <MKTypography variant="h6" sx={{ fontWeight: "bold", ml: 1 }}>
                {brand}
              </MKTypography>
            </ListItem>
            <Divider sx={{ my: 1 }} />
            {routes.map(({ name, route }) => (
              <ListItem key={name} disablePadding>
                <ListItemButton
                  component={Link}
                  to={route}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText
                    primary={name}
                    primaryTypographyProps={{
                      sx: {
                        textTransform: "capitalize",
                        color: "text.primary",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

DefaultNavbar.propTypes = {
  brand: PropTypes.string,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    })
  ).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
};

DefaultNavbar.defaultProps = {
  brand: "",
  transparent: false,
  light: false,
};

export default DefaultNavbar;
