import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { useState } from "react";
import { Checkbox, FormControlLabel, useMediaQuery } from "@mui/material";

// Material Kit 2 React examples

// Routes

// Image
// import bgImage from "assets/images/nahka-jalkeen.jpeg";
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
function sendTelegramMessage(message) {
  const chatId = "6692822667";

  const url =
    "https://api.telegram.org/bot7150596158:AAFRMq0Vr3CpBIRjVPokQACZuguTaBChp4Y/sendMessage";
  const params = {
    chat_id: chatId,
    text: message,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      console.log("Message sent successfully");
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });
}

function ContactUs() {
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [additionalMessage, setAdditionalMessage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [syvapuhdistus, setSisapesuNormi] = useState(false);
  const [kustomoitu, setUlkopesuNormi] = useState(false);
  const [perusSisapesu, setPakettiNormi] = useState(false);
  const [verhoilupesu, setVerhoilupesu] = useState(false);
  const [nahkapuhdistus, setNahkapuhdistus] = useState(false);
  const [takakontti, setTakakontti] = useState(false);
  const [kampanja, setKanpanja] = useState(false);
  const [peruspaketti, setPeruspaketti] = useState(false);

  const handleMessageSend = () => {
    let message = `Uusi asiakas!:\n\nNimi: ${name}\nGmail: ${email}\nOsoite: ${address}\nPäivä: ${date}\nViesti: ${additionalMessage}`;
    // If terms are accepted, append acceptance status to the message

    if (perusSisapesu) {
      message += "\nperus sisäpesu 60€";
    }
    if (syvapuhdistus) {
      message += "\nSyväpuhdistus 180€";
    }
    if (kustomoitu) {
      message += "\nHaluan jotain tietyn paketin";
    }
    if (verhoilupesu) {
      message += "\nVerhoilupesu +30€";
    }
    if (nahkapuhdistus) {
      message += "\nNahkapuhdistus +10€";
    }
    if (takakontti) {
      message += "\nTakakontti";
    }
    if (kampanja) {
      message += "\n Kampanja: renkaanvaihto ja sisäpesu 105€";
    }
    if (peruspaketti) {
      message += "\n Perus paketti sisäpesu 110€";
    }
    sendTelegramMessage(message);
    setName("");
    setEmail("");
    setAddress("");
    setDate("");
    setAdditionalMessage("");
    setMessageSent(true);
    setButtonDisabled(true);
  };
  const handleCheckboxChange = (checkboxName, newValue) => {
    switch (checkboxName) {
      case "pakettiNormi":
        setPakettiNormi(newValue);
        if (newValue) {
          setSisapesuNormi(false);
          setUlkopesuNormi(false);
          setPeruspaketti(false);
          setKanpanja(false);
        }
        if (!newValue) {
          setVerhoilupesu(false);
          setNahkapuhdistus(false);
          setTakakontti(false);
        }
        break;
      case "sisapesuNormi":
        setSisapesuNormi(newValue);
        if (newValue) {
          setPakettiNormi(false);
          setUlkopesuNormi(false);
          setPeruspaketti(false);
          setKanpanja(false);
          setVerhoilupesu(false);
          setNahkapuhdistus(false);
          setTakakontti(false);
        }
        break;
      case "ulkopesuNormi":
        setUlkopesuNormi(newValue);
        if (newValue) {
          setSisapesuNormi(false);
          setPakettiNormi(false);
          setPeruspaketti(false);
          setKanpanja(false);
          setVerhoilupesu(false);
          setNahkapuhdistus(false);
          setTakakontti(false);
        }
        break;
      case "verhoilupesu":
        setVerhoilupesu(newValue);
        if (newValue) {
          setPakettiNormi(true);
          setSisapesuNormi(false);
          setUlkopesuNormi(false);
          setNahkapuhdistus(false);
          setPeruspaketti(false);
          setKanpanja(false);
        }
        break;
      case "nahkapuhdistus":
        setNahkapuhdistus(newValue);
        if (newValue) {
          setPakettiNormi(true);
          setSisapesuNormi(false);
          setUlkopesuNormi(false);
          setKanpanja(false);
          setVerhoilupesu(false);
          setPeruspaketti(false);
        }
        break;
      case "takakontti":
        setTakakontti(newValue);
        if (newValue) {
          setPakettiNormi(true);
          setSisapesuNormi(false);
          setUlkopesuNormi(false);
          setKanpanja(false);
          setVerhoilupesu(false);
          setPeruspaketti(false);
        }
        break;
      case "peruspaketti":
        setPeruspaketti(newValue);
        if (newValue) {
          setKanpanja(false);
          setUlkopesuNormi(false);
          setVerhoilupesu(false);
          setNahkapuhdistus(false);
          setTakakontti(false);
          setSisapesuNormi(false);
          setUlkopesuNormi(false);
          setPakettiNormi(false);
        }
        break;
      case "kampanja":
        setKanpanja(newValue);
        if (newValue) {
          setSisapesuNormi(false);
          setPeruspaketti(false);
          setPakettiNormi(false);
          setUlkopesuNormi(false);
          setVerhoilupesu(false);
          setNahkapuhdistus(false);
          setTakakontti(false);
          setPeruspaketti(false);
        }
        break;
      default:
        break;
    }
  };
  return (
    <MKBox component="section" position="relative" py={6} px={{ xs: 0, lg: 0 }} mx={-2}>
      <Container sx={{ px: { xs: 0, lg: 1 } }}>
        <Grid
          container
          item
          xs={12}
          lg={10}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 0, sm: 18, md: -5 }}
            mb={{ xs: 0, sm: 18, md: 20 }}
            mx={0}
          >
            <MKBox
              variant="gradient"
              bgColor="dark"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={3}
              mt={-3}
            >
              <MKTypography variant={isLargeScreen ? "h2" : "h3"} color="white">
                Ajanvaraus
              </MKTypography>
            </MKBox>
            <Grid mx={{ lg: 30, xs: 1 }}>
              <MKTypography item variant={isLargeScreen ? "subtitle1" : "body2"} mt={3}>
                Tällä yhteydenottolomakkeella saat vastaukseksi tiedon, milloin seuraava mahdollinen
                pesun aika on.
              </MKTypography>
              <MKTypography item variant={isLargeScreen ? "subtitle1" : "body2"} mt={3}>
                Viesti kohtaan voit vapaavalintaisesti kirjoittaa kysymyksiä, tai kertoa mitä
                haluaisit autollesi tehtäväksi.
              </MKTypography>
            </Grid>
            <MKBox my={3}>
              <Grid lg={12} container>
                <Grid item mt={{ xs: 3, lg: 0 }} lg={6} xs={12}>
                  <Grid
                    ml={{ lg: 0, xs: 2 }}
                    container
                    direction="column"
                    alignItems={{ lg: "center", xs: "left" }}
                    justifyContent="center"
                  >
                    <Grid item textAlign="left">
                      <MKTypography variant={isLargeScreen ? "h3" : "h4"} mb={1}>
                        Sisäpuhdistukset:
                      </MKTypography>
                      <Grid ml={1}>
                        <FormControlLabel
                          sx={{
                            maxHeight: 20,
                          }}
                          control={
                            <Checkbox
                              checked={perusSisapesu}
                              onChange={(e) => {
                                handleCheckboxChange("pakettiNormi", e.target.checked);
                              }}
                            />
                          }
                          label="Perus sisäpesu alk. 60€"
                          mb={6}
                        />
                        <Grid ml={2}>
                          <FormControlLabel
                            sx={{
                              maxHeight: 10,
                            }}
                            control={
                              <Checkbox
                                checked={verhoilupesu}
                                onChange={(e) => {
                                  handleCheckboxChange("verhoilupesu", e.target.checked);
                                }}
                              />
                            }
                            label={
                              <MKTypography variant={isLargeScreen ? "body2" : "button"}>
                                Verhoilupesu 40€
                              </MKTypography>
                            }
                          />
                          <FormControlLabel
                            sx={{
                              maxHeight: 10,
                            }}
                            control={
                              <Checkbox
                                checked={nahkapuhdistus}
                                onChange={(e) => {
                                  handleCheckboxChange("nahkapuhdistus", e.target.checked);
                                }}
                              />
                            }
                            label={
                              <MKTypography variant={isLargeScreen ? "body2" : "button"}>
                                Nahkapesu & hoito 15€
                              </MKTypography>
                            }
                          />
                          <FormControlLabel
                            sx={{
                              maxHeight: 30,
                            }}
                            control={
                              <Checkbox
                                checked={takakontti}
                                onChange={(e) => {
                                  handleCheckboxChange("takakontti", e.target.checked);
                                }}
                              />
                            }
                            label={
                              <MKTypography variant={isLargeScreen ? "body2" : "button"}>
                                Takakontti 15€
                              </MKTypography>
                            }
                          />
                        </Grid>
                        <FormControlLabel
                          sx={{
                            maxHeight: 30,
                          }}
                          item
                          control={
                            <Checkbox
                              checked={syvapuhdistus}
                              onChange={(e) =>
                                handleCheckboxChange("sisapesuNormi", e.target.checked)
                              }
                            />
                          }
                          label="Syväpuhdistus 180€"
                        />
                        <FormControlLabel
                          sx={{
                            maxHeight: 30,
                          }}
                          item
                          control={
                            <Checkbox
                              checked={kustomoitu}
                              onChange={(e) => {
                                handleCheckboxChange("ulkopesuNormi", e.target.checked);
                              }}
                            />
                          }
                          label="Kustomoitu alk. 50€"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item mt={{ xs: 3, lg: 0 }} lg={6} xs={12}>
                  <Grid
                    ml={{ lg: 5, xs: 2 }}
                    lg={6.5}
                    container
                    direction="column"
                    alignItems={{ lg: "center", xs: "left" }}
                    justifyContent="center"
                  >
                    <Grid item textAlign="left">
                      <MKBox>
                        <MKTypography variant={isLargeScreen ? "h3" : "h4"} mb={1}>
                          Paketit:
                        </MKTypography>
                        <MKTypography variant={isLargeScreen ? "subtitle2" : "button"} mb={1}>
                          Kampanja: renkaanvaihto, sisäpuhdistus ja verhoilupesu hintaan 105€ 15.5
                          asti!
                        </MKTypography>
                        <Grid ml={1}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={kampanja}
                                onChange={(e) => handleCheckboxChange("kampanja", e.target.checked)}
                              />
                            }
                            label="Kampanja! 105€"
                            mb={6}
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={peruspaketti}
                                onChange={(e) =>
                                  handleCheckboxChange("peruspaketti", e.target.checked)
                                }
                              />
                            }
                            label="Perus paketti 110€"
                          />
                        </Grid>
                      </MKBox>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </MKBox>
            <MKBox mx={2}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="standard"
                    label="Nimi *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="standard"
                    label="Sähköposti *"
                    autoComplete
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="standard"
                    label="Osoite *"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    type="date"
                    label="Päivämäärä (toive)"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="standard"
                    label="Viesti"
                    InputLabelProps={{ shrink: true }}
                    multiline
                    fullWidth
                    rows={2}
                    value={additionalMessage}
                    onChange={(e) => setAdditionalMessage(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={6}>
                <MKButton
                  disabled={buttonDisabled}
                  onClick={() => {
                    handleMessageSend();
                  }}
                  variant="gradient"
                  color="dark"
                >
                  Lähetä viesti
                </MKButton>
                {messageSent && (
                  <MKTypography
                    ml={2}
                    mt={1}
                    color="success"
                    variant={isLargeScreen ? "subtitle2" : "button"}
                    textAlign="center"
                  >
                    Viesti lähetetty.
                  </MKTypography>
                )}
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ContactUs;
