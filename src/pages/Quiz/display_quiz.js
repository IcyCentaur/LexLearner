// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Container from "@mui/material/Container";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";

// import CongratulationsModal from "./Congrats";

// import quiz from "../../api/make_quiz";
// import match from "../../api/match";

// const DisplayQuiz = () => {
//   const [language, setLanguage] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const [displayCharacter, setDisplayCharacter] = useState([]);
//   const [score, setScore] = useState(0);
//   const [wrongAnswer, setWrongAnswer] = useState(false);
//   const [minusMark, setMinusMark] = useState(0);
//   const [won, setWon] = useState(false);

//   const displayNextCharacter = () => {
//     if (currentIndex === displayCharacter.length - 1) {
//       setWon(true);
//     } else
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % displayCharacter.length);
//   };

//   const [test, setTest] = useState({});
//   useEffect(() => {
//     const fetchData = async () => {
//       if (language) {
//         const fetchedQuiz = quiz(language);
//         setTest(fetchedQuiz);
//         setDisplayCharacter(Object.keys(fetchedQuiz));
//       }
//     };

//     fetchData();
//   }, [language]);

//   const location = useLocation();

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const lang = params.get("lang");
//     if (lang) {
//       setLanguage(lang);
//     }
//   }, [location]);

//   const onSubmit = (e) => {
//     e.preventDefault();

//     const matched = match(test, displayCharacter, currentIndex);
//     if (matched) {
//       console.log("correct", currentIndex, won);
//       displayNextCharacter();
//       setScore((prevScore) => prevScore + 1);
//       setWrongAnswer(false);
//       setMinusMark(0);
//     } else {
//       console.log("wrong");
//       setWrongAnswer(true);
//       setMinusMark((x) => x + 1);
//       if (minusMark >= 5) {
//         setScore((prevScore) => prevScore - 1);
//         setMinusMark(0);
//       }
//     }

//     document.getElementById("alphabet").value = "";
//     document.getElementById("alphabet").focus();
//   };

//   const onClose = () => {
//     const fetchedQuiz = quiz(language);
//     setTest(fetchedQuiz);
//     setDisplayCharacter(Object.keys(fetchedQuiz));
//     setWon(false);
//     setScore(0);
//     setCurrentIndex(0);
//   };

//   return (
//     <Container>
//       <Paper sx={{ py: 2, px: 4, my: 2, mx: 4 }}>
//         {won && (
//           <CongratulationsModal open={won} onClose={onClose} score={score} />
//         )}
//         <Typography variant="h3" display="flex">
//           What is the reading for: {displayCharacter[currentIndex]}
//           <Typography
//             variant="h6"
//             display="flex"
//             style={{ marginLeft: "auto" }}
//           >
//             Score: {score}/10
//           </Typography>
//         </Typography>
//         <label htmlFor="alphabet"></label>
//         <Typography display="flex">
//           <br />
//           <TextField
//             display="flex"
//             type="text"
//             id="alphabet"
//             name="alphabet"
//             pattern="[A-Za-z][A-Za-z]*"
//             title="Enter alphabets only"
//             required
//             sx={{ my: 1 }}
//             onKeyDown={(ev) => {
//               if (ev.key === "Enter") {
//                 onSubmit(ev);
//               }
//             }}
//           />
//           {wrongAnswer && (
//             <span style={{ fontSize: "24px", marginLeft: "10px" }}>❌</span>
//           )}
//         </Typography>
//         <br />
//         <Button
//           variant="outlined"
//           sx={{
//             color: "white",
//             backgroundColor: "#373737",
//             borderColor: "#373737",
//             my: 1,
//           }}
//           onClick={onSubmit}
//         >
//           Submit
//         </Button>
//       </Paper>
//     </Container>
//   );
// };

// export default DisplayQuiz;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import CongratulationsModal from "./Congrats";

import quiz from "../../api/make_quiz";
import match from "../../api/match";

const DisplayQuiz = () => {
  const [language, setLanguage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayCharacter, setDisplayCharacter] = useState([]);
  const [score, setScore] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [minusMark, setMinusMark] = useState(0);
  const [won, setWon] = useState(false);

  const displayNextCharacter = () => {
    if (currentIndex === displayCharacter.length - 1) {
      setWon(true);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % displayCharacter.length);
    }
  };

  const speak = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Speech synthesis is not supported in your browser.");
    }
  };

  const [test, setTest] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      if (language) {
        const fetchedQuiz = quiz(language);
        setTest(fetchedQuiz);
        setDisplayCharacter(Object.keys(fetchedQuiz));
      }
    };

    fetchData();
  }, [language, currentIndex]);

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lang = params.get("lang");
    if (lang) {
      setLanguage(lang);
    }
  }, [location]);

  const onSubmit = (e) => {
    e.preventDefault();

    const matched = match(test, displayCharacter, currentIndex);
    if (matched) {
      console.log("correct", currentIndex, won);
      displayNextCharacter();
      setScore((prevScore) => prevScore + 1);
      setWrongAnswer(false);
      setMinusMark(0);
    } else {
      console.log("wrong");
      setWrongAnswer(true);
      setMinusMark((x) => x + 1);
      if (minusMark >= 5) {
        setScore((prevScore) => prevScore - 1);
        setMinusMark(0);
      }
    }

    document.getElementById("alphabet").value = "";
    document.getElementById("alphabet").focus();
  };

  const onClose = () => {
    const fetchedQuiz = quiz(language);
    setTest(fetchedQuiz);
    setDisplayCharacter(Object.keys(fetchedQuiz));
    setWon(false);
    setScore(0);
    setCurrentIndex(0);
  };

  return (
    <Container>
      <Paper sx={{ py: 2, px: 4, my: 2, mx: 4 }}>
        {won && (
          <CongratulationsModal open={won} onClose={onClose} score={score} />
        )}
        <Typography variant="h3" display="flex">
          What is the reading for: {displayCharacter[currentIndex]}
          {speak(test[displayCharacter[currentIndex]])}
          <Typography
            variant="h6"
            display="flex"
            style={{ marginLeft: "auto" }}
          >
            Score: {score}/10
          </Typography>
        </Typography>
        <label htmlFor="alphabet"></label>
        <Typography display="flex">
          <br />
          <TextField
            display="flex"
            type="text"
            id="alphabet"
            name="alphabet"
            pattern="[A-Za-z][A-Za-z]*"
            title="Enter alphabets only"
            required
            sx={{ my: 1 }}
            onKeyDown={(ev) => {
              if (ev.key === "Enter") {
                onSubmit(ev);
              }
            }}
          />
          {wrongAnswer && (
            <span style={{ fontSize: "24px", marginLeft: "10px" }}>❌</span>
          )}
        </Typography>
        <br />
        <Button
          variant="outlined"
          sx={{
            color: "white",
            backgroundColor: "#373737",
            borderColor: "#373737",
            my: 1,
          }}
          onClick={onSubmit}
        >
          Submit
        </Button>
      </Paper>
    </Container>
  );
};

export default DisplayQuiz;
