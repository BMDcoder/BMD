import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import ExampleCard from "pages/Presentation/components/ExampleCard";
import data from "pages/Presentation/sections/data/designBlocksData";

function DesignBlocks() {
  const renderData = data.map(({ title, description, items }) => {
    return (
      <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
        <Grid item xs={12} lg={3}>
          <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
            <MKTypography variant="h3" fontWeight="bold" mb={1}>
              {title}
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
              {description}
            </MKTypography>
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={9}>
          <Grid container spacing={3} justifyContent="center">
            {items.slice(0, 9).map(({ image, name, route }) => (
              <Grid item xs={12} sm={4} md={4} key={name}>
                <Link to={route} style={{ textDecoration: "none" }}>
                  <ExampleCard
                    image={image}
                    name={name}
                    sx={{
                      borderRadius: "12px", // Rounded corners
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Light shadow for depth
                      padding: "1rem", // Padding for a nice layout inside
                      height: "auto", // Ensure height adjusts to content
                      transition: "transform 0.3s ease", // Smooth hover effect
                      "&:hover": {
                        transform: "scale(1.05)", // Slight scale on hover
                      },
                    }}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  });

  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Our Process"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            Build A Data Pipeline That Works For Your Business
          </MKTypography>
          <MKTypography variant="body1" color="text">
            Every business big or small needs to collect and connect customer data to make smarter
             decisions.
          </MKTypography>
        </Grid>
      </Container>

      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
