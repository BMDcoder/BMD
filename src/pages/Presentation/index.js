import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Link } from "react-router-dom";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultNavbar({ brand, routes, transparent, light }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {routes.map(({ name, route }) => (
        <ListItem button key={name} component={Link} to={route} onClick={handleDrawerToggle}>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: transparent ? "rgba(255, 255, 255, 0.6)" : "white",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Brand Name */}
          <MKTypography
            component={Link}
            to="/"
            variant="h6"
            color={light ? "white" : "dark"}
            sx={{ textDecoration: "none", fontWeight: "bold" }}
          >
            {brand}
          </MKTypography>

          {/* Desktop Links */}
          {!isMobile && (
            <MKBox sx={{ display: "flex", gap: 2 }}>
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
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton edge="end" onClick={handleDrawerToggle} sx={{ color: light ? "#fff" : "#000" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

DefaultNavbar.propTypes = {
  brand: PropTypes.string.isRequired,
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
  transparent: true,
  light: false,
};

export default DefaultNavbar;
