import { Link } from "react-router-dom";
import { Stack, Typography, Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Stack className="torso">
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h1" className="title__header">
              Academic Resource Center
            </Typography>
            <Typography variant="h3">
              Exclusively tailored for{" "}
              <mark className="title__marquee">canisians.</mark>
            </Typography>
            <Stack
              sx={{
                display: "flex",
                width: "70vw",
                justifyContent: "end",
              }}
              direction={"row"}
              spacing={5}
            >
              <Button variant="outlined" sx={{ borderRadius: "32px" }}>
                <Link
                  to="/caniarc/about"
                  style={{
                    height: "4vh",
                    textDecoration: "none",
                    display: "flex",
                    color: "var(--dark-color)",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Learn More
                </Link>
              </Button>
              <Button
                variant="contained"
                sx={{
                  display: "flex",
                  borderRadius: "32px",
                  backgroundColor: "var(--third-color)",
                  ":hover": {
                    backgroundColor: "var(--second-color)",
                  },
                }}
              >
                {/* FIXME: Buttons look like shit */}
                <Link
                  to="/caniarc/notebook"
                  style={{
                    textDecoration: "none",
                    color: "var(--dark-color)",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  Enter
                  <Stack direction="col" sx={{ alignItems: "center" }}>
                    <SentimentDissatisfiedIcon />
                    <NavigateNextIcon />
                  </Stack>
                </Link>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
