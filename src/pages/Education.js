import React from "react";
import { Typography, Box, Grid, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

const educationData = [
  {
    institution: "Kakinada Institute of Engineering and Technology, A.P",
    degree: "Bachelor of Technology in Computer Science",
    year: "2018-2022",
    cgpa: "CGPA: 7.4",
    icon: <LocalLibraryIcon fontSize="large" />,
  },
  {
    institution: "Narayana Junior College, Visakhapatnam",
    degree: "Intermediate, MPC",
    year: "2016-2018",
    cgpa: "88.8%",
    icon: <AccountBalanceIcon fontSize="large" />,
  },
  {
    institution: "APSWREIS School Kopperla",
    degree: "SSC",
    year: "2015-2016",
    cgpa: "CGPA: 7.3",
    icon: <SchoolIcon fontSize="large" />,
  },
];

const publications = [
  {
    title: "AI Framework for Scalable Automated Continuous Formative Assessment",
    description: [
      "Co-authored a research paper on developing a framework that uses NLP and computer vision tools to automate continuous formative assessments in classrooms.",
      "Published in collaboration with RCTS, IIIT Hyderabad.",
    ],
    link: "https://ieeexplore.ieee.org/document/10834316",
    image: `${process.env.PUBLIC_URL}/paper.jpg`,
  },
];

const EducationAndPublications = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      {/* Education Section */}
      <section id="education" style={{ padding: "3rem 0", backgroundColor: theme.palette.background.default }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: "bold", color: theme.palette.primary.main }}>
          Education
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {educationData.map((edu, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "2rem",
                  borderRadius: "16px",
                  bgcolor: theme.palette.background.paper,
                  boxShadow: theme.shadows[3],
                  border: `1px solid ${theme.palette.divider}`,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  height: "100%",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: theme.shadows[6],
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                <Box
                  sx={{
                    width: "70px",
                    height: "70px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: theme.palette.primary.light,
                    color: theme.palette.primary.main,
                    borderRadius: "50%",
                    marginBottom: "1rem",
                  }}
                >
                  {edu.icon}
                </Box>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: theme.palette.primary.main, mb: 1 }}>
                  {edu.degree}
                </Typography>
                <Typography variant="subtitle1" color={theme.palette.text.secondary} sx={{ mb: 1 }}>
                  {edu.institution}
                </Typography>
                <Typography variant="body2" color={theme.palette.text.disabled} sx={{ mb: 2 }}>
                  {edu.year}
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: 2 }}>
                  <SchoolIcon fontSize="small" sx={{ color: theme.palette.primary.main, mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: "bold", color: theme.palette.text.secondary }}>
                    {edu.cgpa}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </section>

      {/* Publications Section */}
      <section id="publications" style={{ padding: "2rem 1rem" }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: "bold", color: theme.palette.primary.main, letterSpacing: "2px", fontSize: isSmallScreen ? "2rem" : "2.5rem" }}>
          Publications
        </Typography>
        {publications.map((publication, index) => (
          <Box key={index} sx={{ borderRadius: "16px", bgcolor: theme.palette.background.paper, boxShadow: theme.shadows[3], border: `1px solid ${theme.palette.divider}`, transition: "0.3s ease", marginBottom: "2rem", padding: "2rem", "&:hover": { transform: "translateY(-5px)", boxShadow: theme.shadows[6], borderColor: theme.palette.primary.main } }}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} sm={5}>
                <Box component="img" src={publication.image} alt={publication.title} sx={{ width: "100%", height: "auto", borderRadius: "10px", objectFit: "cover", boxShadow: theme.shadows[1] }} />
              </Grid>
              <Grid item xs={12} sm={7}>
                <Typography variant="h6" color={theme.palette.primary.main} gutterBottom>
                  {publication.title}
                </Typography>
                <ul style={{ paddingLeft: "1.2rem", marginTop: "1rem", color: theme.palette.text.secondary }}>
                  {publication.description.map((item, i) => (
                    <li key={i} style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={publication.link} target="_blank" rel="noopener noreferrer" sx={{ display: "block", color: theme.palette.primary.main, textDecoration: "none", marginTop: "1rem", fontWeight: "bold", "&:hover": { textDecoration: "underline" } }}>
                  Read the full paper
                </Link>
              </Grid>
            </Grid>
          </Box>
        ))}
      </section>
    </Box>
  );
};

export default EducationAndPublications;
