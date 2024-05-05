import match from "../../api/match";

import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import logo from "../logo.svg";
import "../App.css";

const AnswerInput = () => {
  return (
    <Container>
      <label for="alphabet">Enter Alphabet:</label>
      <br />
      <input
        type="text"
        id="alphabet"
        name="alphabet"
        pattern="[A-Za-z][A-Za-z]*"
        title="Enter alphabets only"
        required
      />
      <br></br>

      <Button
        variant="outlined"
        sx={{
          color: "white",
          backgroundColor: "#373737",
          borderColor: "#373737",
        }}
        onClick={match}
      >
        Submit
      </Button>
    </Container>
  );
};

export default AnswerInput;
