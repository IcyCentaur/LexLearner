import * as React from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

function Title() {
  const options = ["Hiragana", "Hindi", "Katakana"];

  const navigate = useNavigate();

  const [lang, setLang] = React.useState("");

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  const handleSubmit = () => {
    if (lang.trim() !== "") {
      navigate(`/practice?lang=${lang}`);
    } else {
      alert("Please select a language");
    }
  };

  return (
    <Container
      sx={{
        minHeight: "100vh",
        minWidth: "100%",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(to right bottom, #191919, #202020)",
      }}
      disableGutters
    >
      <Stack
        sx={{
          minWidth: "100%",
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <Paper
          sx={{
            backgroundColor: "inherit",
            padding: 2,
            margin: 1,
          }}
        >
          <Typography variant="h2" fontFamily="sans-serif">
            Welcome to LexLearner
          </Typography>
        </Paper>
        <Divider
          sx={{
            backgroundColor: "#373737",
            margin: 1,
            position: "absolute",
            width: "45%",
            height: "1.5px",
            borderRadius: 8,
          }}
          variant="middle"
        />
        <Box>
          <TextField
            id="language"
            value={lang}
            label="Language"
            onChange={handleChange}
            display="block"
            select
            variant="outlined"
            sx={{
              width: 200,
              m: 2,
              borderRadius: 2,
            }}
          >
            {options.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </TextField>
        </Box>
        <Button
          variant="contained"
          sx={{
            color: "white",
            backgroundColor: "#373737",
            borderColor: "#373737",
          }}
          // onClick={redirect}
          onClick={handleSubmit}
        >
          Search
        </Button>
      </Stack>
    </Container>
  );
}

export default Title;
