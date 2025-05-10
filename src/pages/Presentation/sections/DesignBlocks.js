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
    const { image, name, count, route, pro } = items[0]; // one item per block

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
            <Grid item xs={12} md={8} sx={{ mb: 2 }} key={name}>
              <Link to={pro ? "/" : route} style={{ textDecoration: "none" }}>
                <ExampleCard
                  image={image}
                  name={name}
                  count={count}
                  pro={pro}
                  sx={{
                    height: "100%",
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.08)",
                    },
                  }}
                />
              </Link>
            </Grid>
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
            badgeContent="Infinite combinations"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            Huge collection of sections
          </MKTypography>
          <MKTypography variant="body1" color="text">
            We have created multiple options for you to put together and customise into pixel
            perfect pages.
          </MKTypography>
        </Grid>
      </Container>

      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
