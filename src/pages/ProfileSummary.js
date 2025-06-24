import React from 'react';
import { Typography, Box, Button, Grid } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing GitHub and LinkedIn icons

const ProfileSummary = () => {
  return (
    <Box
      sx={{
        padding: '4rem 2rem',
        textAlign: 'center',
        bgcolor: 'background.paper',
        borderRadius: '8px',
        boxShadow: 3,
        // border: '1px solid #1976d2',
        marginBottom: '2rem', // Adding some space below the box
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={8}>
          <Typography variant="h3" gutterBottom sx={{ color: '#1976d2' }}>
            Saikumar Pola
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Software Development Engineer
          </Typography>
          <Typography variant="body1" color="text.secondary">
          Tech Enthusiast | Full-Stack Developer

Passionate about building scalable and efficient solutions, I have a strong foundation in Data Structures and Algorithms and hands-on experience in React.js, Node.js, Express.js, and MongoDB. I excel in developing and debugging code while quickly adapting to new technologies.

I specialize in translating business requirements into technical solutions, implementing CI/CD pipelines, and deploying scalable applications. Always eager to learn and innovate, I strive to build high-performance systems that make an impact.

          </Typography>

          {/* Social Media Links with Icons */}
          <Box sx={{ marginTop: '20px' }}>
            <Button
              variant="outlined"
              color="primary"
              href="https://github.com/saikumarpol"
              target="_blank"
              startIcon={<FaGithub />} // Adding GitHub icon
              sx={{ margin: '0 10px' }} // Adding margin between buttons
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href="https://www.linkedin.com/in/sai-kumar-pola-3993851a1/"
              target="_blank"
              startIcon={<FaLinkedin />} // Adding LinkedIn icon
              sx={{ margin: '0 10px' }} // Adding margin between buttons
            >
              LinkedIn
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={`${process.env.PUBLIC_URL}/pic.jpeg`}  // Ensure to uncomment this line to use your image
            alt="Profile"
            style={{
              borderRadius: '8px', // Rounded corners
              width: '480px', // Square size
              height: '480px', // Square size
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileSummary;
