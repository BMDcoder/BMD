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
      px={{ xs: 0, lg: 0 }}
      mx={-2}
    >
      <MKBox borderRadius="lg" p={2} justifyContent="center" textAlign="center" mb={5} paddingX={1}>
        <MKTypography
          variant="h2"
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["3xl"],
            },
          })}
        >
          Hinnasto
        </MKTypography>
        <MKTypography variant={isLargeScreen ? "subtitle2" : "subtitle2"} mt={1}>
          Hinnastoon kuuluuvat matkakulut Tampere - 35km alueella. Lisämatka 1€/km yhteen suuntaan.
        </MKTypography>
        <MKTypography variant={isLargeScreen ? "subtitle2" : "subtitle2"} mt={1} mb={3}>
          Kaikki pesut tehdään asiakkaan omassa pihassa. Ulkopuhdistukset mahdollisia vain
          omakotitalon pihassa, muuten erikoisjärjestelyllä.
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
          <Grid mb={2} item xs={12} md={6} lg={4.1} id="sisäpuhdistukset">
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
                    variant={isLargeScreen ? "h3" : "h3"}
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
                        Sisäpesu 60€
                      </MKTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"}>
                        - Perus sisäpesu on loistava vaihtoehto jos haluat autostasi peruspuhtaan.
                      </MKTypography>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"} mt={1}>
                        - Sisältää: | Roksien poisto | Syvä imurointi | Kojelaudan ja pintojen
                        pyyhintä | Jalkamattojen, Ikkunoiden ja Karmien puhdistus
                      </MKTypography>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"} mt={1}>
                        - Pesuun voit ottaa lisäksi: | Verhoilupesu 50€ | Nahanpuhdistus & Hoito 25€
                        | Takakontti 10€
                      </MKTypography>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"} mt={1}>
                        - Kesto 1-2h
                      </MKTypography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                <Grid item id="Syväpuhdistus">
                  <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <MKTypography variant={isLargeScreen ? "h5" : "h6"}>
                        Syväpuhdistus 150€
                      </MKTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"}>
                        - Jos haluat autosi todella puhtaaksi ja yksityiskohtaseksi, niin
                        syväpuhdistus on oikea vaihtoehto. Syväpuhdistuksessa keskitytään myös
                        ajoneuvon syvempiin koloihin, kuten nappien rakoihin ja pieniin koloihin.
                      </MKTypography>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"} mt={1}>
                        - Sisältää: | Sisäpesu | Verhoilupesu | Nahanhoito | Takakontti | Syvät
                        Onkalot | Nappien puhistus
                      </MKTypography>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"} mt={1}>
                        - Kesto 3-4h
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
                        - Voit tiedustella esimerkiksi pelkkää verhoilupesua ajanvarauslomakkeella!
                      </MKTypography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>
          <Grid mb={2} item xs={12} lg={4.1} id="paketit">
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
                    variant={isLargeScreen ? "h3" : "h3"}
                    mb={2}
                    color="default"
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["2xl"],
                      },
                    })}
                  >
                    Paketit:
                  </MKTypography>
                </Grid>
                <Grid item>
                  <Accordion expanded={expanded === "panel9"} onChange={handleChange("panel9")}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <MKTypography variant={isLargeScreen ? "h5" : "h6"}>
                        Sisäpesu | Paketti 110€
                      </MKTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"}>
                        - Sisäpesupaketilla saat kaiken tarpeellisen autosi sisutan puhistamiseen.
                      </MKTypography>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"} mt={1}>
                        - Pesuun sisältyy: | Sisäpesu 60€ | Verhoilupesu 50€ | Nahanpuhdistus &
                        Hoito 25€ | Takakontti 10€
                      </MKTypography>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"} mt={1}>
                        - Kesto 2-3h
                      </MKTypography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                <Grid item>
                  <Accordion expanded={expanded === "panel7"} onChange={handleChange("panel7")}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <MKTypography variant={isLargeScreen ? "h5" : "h6"}>
                        Kesähoito | Paketti alk. 500€
                      </MKTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"}>
                        - Kesähoito on täysin asiakkaalle kustomoitu kuukausipesupaketti joka alkaa
                        ajoneuvon syväpuhdistuksella. Tämän jälkeen autoa käydään ylläpitopesemässä
                        kuukausittain/viikottain asiakkaan toiveiden mukaan.
                      </MKTypography>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"} mt={1}>
                        - Paketti on täysin räätälöity asiakkaalle ja voit tiedustella vaihtoehtoja
                        ajanvarauslomakkeella.
                      </MKTypography>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"} mt={1}>
                        - Pesut ovat mahdollisia 31.10 asti ja paikkoja on rajattu määrä.
                      </MKTypography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                <Grid item>
                  <Accordion expanded={expanded === "panel8"} onChange={handleChange("panel8")}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <MKTypography variant={isLargeScreen ? "h5" : "h6"}>
                        Premium 250€
                      </MKTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"}>
                        - Sisäpesupaketilla saat kaiken tarpeellisen autosi sisutan puhistamiseen.
                        Kesto 2-3h
                      </MKTypography>
                      <MKTypography variant={isLargeScreen ? "subtitle2" : "body2"} mt={1}>
                        - Pesuun sisältyy: | Sisäpesu 60€ | Verhoilupesu 50€ | Nahanpuhdistus &
                        Hoito 25€ | Takakontti 10€
                      </MKTypography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>
          <Grid mb={2} item xs={12} lg={4.1} id="ulkopuhdistukset">
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
                    variant={isLargeScreen ? "h3" : "h3"}
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
                        - Voit kysellä saatavia ulkopesuvaihtoehtoja ajanvarauslomakkeella.
                      </MKTypography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                <Grid item textAlign="center">
                  <MKTypography
                    variant={isLargeScreen ? "h3" : "h3"}
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
                        ajanvarauslomakkeella. Pikavaha/Kovavaha
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
