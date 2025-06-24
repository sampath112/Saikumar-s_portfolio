import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import ProfileSummary from "./pages/ProfileSummary";
import WorkExperience from "./pages/WorkExperience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: "#1976d2" },
          secondary: { main: "#ff9800" },
          background: {
            default: darkMode ? "#121212" : "#f5f5f5",
            paper: darkMode ? "#1e1e1e" : "#fff",
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <Container sx={{ minHeight: "80vh", mt: 3 }}>
          <Routes>
            <Route path="/" element={<ProfileSummary />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </Container>
        {/* <Footer /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
