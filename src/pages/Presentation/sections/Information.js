/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title="Data-Driven Marketing"
                description="Leveraging customer data, AI, and analytics to make informed marketing decisions—eliminating guesswork and maximizing ROI."
              />
              <RotatingCardBack
                image={bgBack}
                title="Smart Innnovation"
                description="Our cutting-edge innovation helps brands predict, personalize, and profit from every customer interaction."
                action={{
                  type: "internal",
                  route: "/",
                  label: "Chat With Us",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Smart Data Collection"
                  description="Automatically capturing, organizing, and enriching customer information
                  using AI, behavioral tracking, and integrated tech stacks—turning raw data into actionable marketing intelligence."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Analysis & Prediction"
                  description="AI-powered brain with machine learning  
                  processes customer behavior to spot trends, forecast outcomes, and automate high-impact decisions."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Optimization"
                  description="Extracting actionable intelligence from
                   data and refining marketing strategies for maximum performance, Transforming numbers into executable tactics."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Lead Automation"
                  description="Using AI, workflows, and integrations to
                   capture, qualify, and nurture leads without manual effort. Replacing repetitive tasks with smart, scalable systems"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
