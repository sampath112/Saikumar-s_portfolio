import React from "react";
import { Typography, Box, Grid, Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SiPython, SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiGit, SiNodedotjs, SiMongodb } from "react-icons/si";
import { FaTable } from "react-icons/fa";
import { EmojiEvents, Code, MilitaryTech, School } from "@mui/icons-material";

const skills = [
  { name: "Python", icon: <SiPython size={40} /> },
  { name: "HTML", icon: <SiHtml5 size={40} /> },
  { name: "CSS", icon: <SiCss3 size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "React", icon: <SiReact size={40} /> },
  { name: "Bootstrap", icon: <SiBootstrap size={40} /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "Git", icon: <SiGit size={40} /> },
  { name: "MS Excel", icon: <FaTable size={40} /> },
];

const achievements = [
  {
    title: "Robotic Championship",
    description: "Awarded a prize in India's biggest Robotic Championship.",
    icon: <EmojiEvents fontSize="large" color="secondary" />, 
  },
  {
    title: "Hackathon Participation",
    description: "Participated in a 1.5-day Bootcamp with a 24-hour Hackathon and got shortlisted to the 2nd Phase.",
    icon: <Code fontSize="large" color="primary" />, 
  },
  {
    title: "Hackathon Award",
    description: "Awarded 3rd prize in a 24-hour Hackathon by Smart Bridge in collaboration with IBM.",
    icon: <MilitaryTech fontSize="large" color="warning" />, 
  },
  {
    title: "Training & Mentorship",
    description: "Trained juniors and fellow students in programming and technical skills.",
    icon: <School fontSize="large" color="success" />, 
  },
];

const SkillsAchievements = () => {
  const theme = useTheme();

  return (
    <section style={{ padding: "4rem 0" }}>
      {/* Skills Section */}
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: "bold", color: theme.palette.primary.main, letterSpacing: "2px" }}>
        Skills & Achievements
      </Typography>
      
      <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
        {skills.map((skill, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Box
              textAlign="center"
              sx={{
                padding: "1rem",
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: "20px",
                bgcolor: theme.palette.background.default,
                transition: "0.3s",
                "&:hover": { bgcolor: theme.palette.action.hover },
              }}
            >
              {skill.icon}
              <Typography variant="h6" color={theme.palette.primary.main}>{skill.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Achievements Section */}
      <Grid container spacing={4} justifyContent="center">
        {achievements.map((achievement, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "2rem",
                borderRadius: "16px",
                boxShadow: theme.shadows[3],
                textAlign: "center",
                transition: "all 0.3s ease",
                height: "100%",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: theme.shadows[10],
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              <Box mb={1}>{achievement.icon}</Box>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: theme.palette.primary.main, mb: 1 }}>
                  {achievement.title}
                </Typography>
                <Typography variant="body2" color={theme.palette.text.secondary} sx={{ fontSize: "1rem", lineHeight: "1.5" }}>
                  {achievement.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default SkillsAchievements;
