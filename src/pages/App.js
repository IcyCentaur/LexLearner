import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ThemeProvider from "../theme";

import logo from "./logo.svg";
import "./App.css";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import Layout from "./Layout";
import Quiz from "./Quiz/Quiz";
import Home from "./Home/Home";
import Practice from "./Quiz/Practice";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScopedCssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
