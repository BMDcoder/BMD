import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import Information from "pages/LandingPages/AboutUs/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
import ContactUs from "layouts/pages/landing-pages/contact-us/index.js";
// Images

import bgImage from "assets/images/nahka-jalkeen.jpeg";
import MKButton from "components/MKButton";

function AboutUs() {
  const scrollToInformationSection = () => {
    // Scroll to the information section
    const informationSection = document.getElementById("informationSection");
    if (informationSection) {
      informationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Detail ja Ylläpito Tampere
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Ammattitaitoiset auton sisä- ja ulkopuhdistukset vaivatta kotipihassasi
            </MKTypography>
            <MKButton onClick={scrollToInformationSection}>Hinnasto</MKButton>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Sosiaalinen media
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#">
                <i className="fab fa-google-plus" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: { xs: 1, lg: 3 },
          mx: { xs: 1, lg: 3 },
          mt: -6,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <div id="informationSection">
          <Information />
        </div>
        <ContactUs />
        <Team />
      </Card>
    </>
  );
}

export default AboutUs;
