import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import { Accordion, AccordionSummary, AccordionDetails, useMediaQuery } from "@mui/material"; // Import Accordion components from Material-UI
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Import ExpandMoreIcon
import React, { useState } from "react";

function Information() {
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };
  return (
    <MKBox
      bgColor="white"
      variant="gradient"
      component="section"
      position="relative"
      py={4}
      px={{ xs: 0, lg: 8 }}
      mx={-2}
    >
      <MKBox borderRadius="lg" p={2} justifyContent="center" textAlign="center" mb={5} paddingX={1}>
        <MKTypography
          variant="h1"
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["3xl"],
            },
          })}
        >
          Hinnasto
        </MKTypography>
        <MKTypography variant={isLargeScreen ? "body1" : "body2"} opacity={0.8} mt={1}>
          Hinnastoon kuuluu matkakulut Tampere - 35km alueella. Lisämatka 1€/km yhteen suuntaan.
        </MKTypography>
        <MKTypography variant={isLargeScreen ? "body1" : "body2"} opacity={0.8} mt={1} mb={3}>
          Kaikki pesut tehdään asiakkaan omassa pihassa!
        </MKTypography>
      </MKBox>
      <Grid columns={2} container paddingX={1} sx={{ minHeight: "800px" }}>
        <Grid
          container
          justifyContent="center"
          alignItems="flex-start"
          lg={12}
          sx={{ minHeight: "600px" }}
          spacing={3}
          px={{ xs: 0, lg: 12 }}
        >
          <Grid mb={5} item xs={12} md={6} lg={4.1} id="sisäpuhdistukset">
            <MKBox sx={{ border: "2px solid grey" }} borderRadius="lg" py={2}>
              <Grid
                px={{ xs: 0, lg: 2 }}
                mx={0}
                pb={2}
                xs={12}
                lg={12}
                rowSpacing={1}
                container
                direction="column"
              >
                <Grid item textAlign="center">
                  <MKTypography
                    variant={isLargeScreen ? "h2" : "h3"}
                    color="default"
                    mb={2}
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["2xl"],
                      },
                    })}
                  >
                    Sisäpuhdistukset
                  </MKTypography>
                </Grid>
                <Grid item id="Sisäpesu">
                  <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <MKTypography variant={isLargeScreen ? "h5" : "h6"}>
                        Perus sisäpesu 80€
                      </MKTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"}>
                        - Perus sisäpesu on loistava vaihtoehto jos haluat autostasi peruspuhtaan
                        järkevään hintaan.
                      </MKTypography>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"} mt={1}>
                        - Perus sisäpesun mukaan voit valita lisäksi tekstiilipesun 30€, tai
                        nahkapenkkien hoidon 20€. Tekstiilipesuun sisältyy nahanhoito.
                      </MKTypography>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"} mt={1}>
                        ! Pesuun sisältyy roskien poisto, syvä imurointi, pintojen pyyhintä, lasien
                        ja karmien puhdistus.
                      </MKTypography>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"} mt={1}>
                        !! Jos autosi on todella likainen, syväpuhdistus on suositeltavaa.
                      </MKTypography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                <Grid item id="Syväpuhdistus">
                  <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <MKTypography variant={isLargeScreen ? "h5" : "h6"}>
                        Syväpuhdistus | Detail 180€
                      </MKTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"}>
                        - Syväpuhdistus sisältää kaiken sisäpesusta, kuten verhoilupesun ja
                        nahanhoidon.
                      </MKTypography>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"} mt={1}>
                        - Syväpuhdistuksessa puhdistetaan pienet onkalot ja tahrojen puhdistukseen
                        käytetään höyrypesuria.
                      </MKTypography>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"} mt={1}>
                        - Tämä paketti on suositeltavaa, mikäli auto on todella likainen.
                      </MKTypography>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"} mt={1}>
                        - Tälle paketille ei ole aikarajaa, vaan sisustaa puhdistetaan
                        täydellisyyteen asti.
                      </MKTypography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                <Grid item>
                  <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <MKTypography variant={isLargeScreen ? "h5" : "h6"}>
                        Kustomoitu alk. 50€
                      </MKTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"}>
                        - Jos haluat vain jotakin tiettyä autollesi, esimerkiksi muutaman penkin
                        pesun otathan rohkeasti yhteyttä ja räätälöidään sopiva pesukokonaisuus!
                      </MKTypography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>
          <Grid mb={5} item xs={12} lg={4.1} id="paketit">
            <MKBox sx={{ border: "2px solid grey" }} borderRadius="lg" py={2}>
              <Grid
                px={{ xs: 0, lg: 2 }}
                mx={0}
                pb={2}
                xs={12}
                lg={12}
                rowSpacing={1}
                container
                direction="column"
              >
                <Grid item textAlign="center">
                  <MKTypography
                    variant={isLargeScreen ? "h2" : "h3"}
                    mb={2}
                    color="default"
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["2xl"],
                      },
                    })}
                  >
                    Paketit
                  </MKTypography>
                </Grid>
                <Grid item>
                  <Accordion expanded={expanded === "panel7"} onChange={handleChange("panel7")}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <MKTypography variant={isLargeScreen ? "h5" : "h6"}>
                        Kesärenkaat ja sisusta 15.5 asti 105€
                      </MKTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"}>
                        - Tällä kampanjalla saat autosi kesävalmiiksi, sillä pakettiin mahtuukin
                        sisäpuhdistus ja renkaiden vaihto.
                      </MKTypography>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"} mt={1}>
                        - Paketti sisältää: sisäpesu 80€, verhoilupesu 30€, takakontti 15€ ja
                        renkaanvaihto 20€.
                      </MKTypography>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"} mt={1}>
                        - Kevään paras diili, varaathan aikasi pian!
                      </MKTypography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                <Grid item>
                  <Accordion expanded={expanded === "panel8"} onChange={handleChange("panel8")}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <MKTypography variant={isLargeScreen ? "h5" : "h6"}>
                        Perus paketti 110€
                      </MKTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"}>
                        - Peruspaketti on erinomainen vaihtoehto jos haluat sisäpuhistuksen ja
                        tekstiilipesun koko autollesi.
                      </MKTypography>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"} mt={1}>
                        - Pesuun sisältyy: Perus sisäpesu 80€, verhoilupesu 30€ ja takakontti 15€
                      </MKTypography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>
          <Grid mb={4} item xs={12} lg={4.1} id="ulkopuhdistukset">
            <MKBox sx={{ border: "2px solid grey" }} borderRadius="lg" py={2}>
              <Grid
                px={{ xs: 0, lg: 2 }}
                mx={0}
                pb={2}
                xs={12}
                lg={12}
                rowSpacing={1}
                container
                direction="column"
              >
                <Grid item textAlign="center">
                  <MKTypography
                    variant={isLargeScreen ? "h2" : "h3"}
                    color="default"
                    mb={2}
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["2xl"],
                      },
                    })}
                  >
                    Ulkopuhdistukset
                  </MKTypography>
                </Grid>
                <Grid item mb={2}>
                  <Accordion expanded={expanded === "panel10"} onChange={handleChange("panel10")}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <MKTypography variant={isLargeScreen ? "h5" : "h6"}>
                        Katso lisää..
                      </MKTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"}>
                        - Voit kysellä saatavia ulkopesu vaihtoehtoja ajanvarauslomakkeella.
                      </MKTypography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                <Grid item textAlign="center">
                  <MKTypography
                    variant={isLargeScreen ? "h2" : "h3"}
                    color="default"
                    mb={2}
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["2xl"],
                      },
                    })}
                  >
                    Pinnoitukset
                  </MKTypography>
                </Grid>
                <Grid item>
                  <Accordion expanded={expanded === "panel11"} onChange={handleChange("panel11")}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <MKTypography variant={isLargeScreen ? "h5" : "h6"}>
                        Katso lisää..
                      </MKTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"}>
                        - Voit kysellä saatavia pinnoituksia ulkopesun lisäksi
                        ajanvarauslomakkeella.
                      </MKTypography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>
        </Grid>
      </Grid>
    </MKBox>
  );
}

export default Information;
