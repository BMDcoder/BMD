import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Link } from "react-router-dom";
import logo from "assets/images/logo.png"; // adjust path as needed

function DefaultNavbar({ brand, routes, transparent, light }) {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: transparent ? "transparent" : "rgba(255, 255, 255, 0.8)",
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

        {/* Navigation Links */}
        <MKBox
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-end" },
            width: { xs: "100%", md: "auto" },
            mt: { xs: 1, md: 0 },
          }}
        >
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
  brand: "BM DIGITAL",
  transparent: false,
  light: false,
};

export default DefaultNavbar;
