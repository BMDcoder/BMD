import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import { Link } from "react-router-dom";

function DefaultNavbar({ brand, routes, transparent, light }) {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: transparent ? "transparent" : "#fff",
        backdropFilter: "none",
        boxShadow: "none",
        borderRadius: 0,
        padding: 1,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Brand */}
        <MKTypography
          component={Link}
          to="/"
          variant="button"
          fontWeight="bold"
          color={light ? "white" : "dark"}
          sx={{ lineHeight: 0 }}
        >
          {brand}
        </MKTypography>

        {/* Navigation Links */}
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
      </Toolbar>
    </AppBar>
  );
}

// Prop types
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
  transparent: false,
  light: false,
};

export default DefaultNavbar;
