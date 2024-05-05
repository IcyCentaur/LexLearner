// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Container from "@mui/material/Container";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";

// import quiz from "../../api/make_quiz";

// const AlphabetDisplay = () => {
//   const [displayAlphabets, setDisplayAlphabets] = useState([]);
//   const [language, setLanguage] = useState("");
//   const location = useLocation();

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const lang = params.get("lang");
//     if (lang) {
//       setLanguage(lang);
//     }
//   }, [location]);
//   useEffect(() => {
//     const fetchData = async () => {
//       if (language) {
//         const fetchedLanguage =
//           require(`../../mock_data/${language.toLowerCase()}`).default;
//         const alphabets = Object.keys(fetchedLanguage).slice(
//           0,
//           fetchedLanguage.length
//         );
//         setDisplayAlphabets(alphabets);
//       }
//     };

//     fetchData();
//   });

//   return (
//     <Container>
//       <Paper sx={{ py: 2, px: 4, my: 2, mx: 4 }}>
//         <Typography variant="h3" display="flex">
//           Alphabets Display
//         </Typography>
//         <div style={{ display: "flex", flexWrap: "wrap" }}>
//           {displayAlphabets.map((alphabet, index) => (
//             <div
//               key={index}
//               style={{ marginRight: "10px", marginBottom: "10px" }}
//             >
//               <Typography variant="h4">{alphabet}</Typography>
//             </div>
//           ))}
//         </div>
//       </Paper>
//     </Container>
//   );
// };

// export default AlphabetDisplay;

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const AlphabetDisplay = () => {
  const [displayAlphabets, setDisplayAlphabets] = useState([]);
  const [language, setLanguage] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lang = params.get("lang");
    if (lang) {
      setLanguage(lang);
    }
  }, [location]);

  useEffect(() => {
    const fetchData = async () => {
      if (language) {
        const fetchedLanguage =
          require(`../../mock_data/${language.toLowerCase()}`).default;
        const alphabets = Object.entries(fetchedLanguage);
        setDisplayAlphabets(alphabets);
      }
    };

    fetchData();
  }, [language]);

  const navigate = useNavigate();

  const handleClick = () => {
    if (language.trim() !== "") {
      navigate(`/quiz?lang=${language}`);
    } else {
      alert("Please select a language");
    }
  };

  return (
    <Container>
      <Paper sx={{ py: 2, px: 4, my: 2, mx: 4 }}>
        <Typography
          variant="h3"
          display="flex"
          sx={{ justifyContent: "center", pb: 3 }}
        >
          Alphabets Display
        </Typography>
        <Grid
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            m: 2,
            p: 2,
          }}
        >
          {displayAlphabets.map(([alphabet, pronunciation], index) => (
            <div
              key={index}
              style={{
                marginRight: "10px",
                marginBottom: "10px",
                width: "20%",
              }}
            >
              <Typography variant="h4">
                {alphabet} - {pronunciation}
              </Typography>
            </div>
          ))}
        </Grid>
        <Button onClick={handleClick} variant="contained" sx={{ mt: 2 }}>
          Take Quiz
        </Button>
      </Paper>
    </Container>
  );
};

export default AlphabetDisplay;
