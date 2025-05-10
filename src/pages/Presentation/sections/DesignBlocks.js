import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import ExampleCard from "pages/Presentation/components/ExampleCard";
import data from "pages/Presentation/sections/data/designBlocksData";

function DesignBlocks() {
  // Pick the first item of the first block
  const { title, description, items } = data[0];
  const { image, name, count, route, pro } = items[0];

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

      <Container sx={{ mt: 6 }}>
        <MKTypography variant="h3" fontWeight="bold" mb={1}>
          {title}
        </MKTypography>
        <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={4}>
          {description}
        </MKTypography>

        <Link to={pro ? "/" : route}>
          <ExampleCard image={image} name={name} count={count} pro={pro} />
        </Link>
      </Container>
    </MKBox>
  );
}

export default DesignBlocks;
