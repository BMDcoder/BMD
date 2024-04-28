import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/mina.jpeg";
import logo from "assets/images/D.png";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 0, lg: 0 }}
      mx={-3}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Yrityksestä
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Lisätietoa minusta ja yrityksestä!
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Jani Lehto"
                position={{ color: "info", label: "Yrittäjä/Opiskelija" }}
                description="Hei! Alotin yritystoimintani 2023 kesällä kotikaupungissani Joensuussa, josta muutin opintojen perässä Tampereelle tuoden yritystoiminnan mukanani. Vuonna 2024 tavoitteeni on laajentaa palveluiden valikoimaa ja saada kerättyä tyytyväisiä asiakkaita. Seuraavaksi tavoitteena on ottaa mukaan ulkopesut ja pinnoitukset. Helpoiten saa yhteyttä lähettämällä viestin ajanvarauslomakkeella tai soittamalla!"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={logo}
                name="Detail ja Ylläpito Tampere"
                position={{ color: "info", label: "Yhteystiedot" }}
                description="Puh - 045 117 4841 | Gmail - jani.jl.lehto@gmail.com | Tampere | Luoksetuleva palvelu"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
