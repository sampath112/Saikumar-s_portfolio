import React from 'react';
import { Typography, Box, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import WorkIcon from '@mui/icons-material/Work';
import RCTSLogo from '../assests/RCTS.png'
import Wiprologo from '../assests/wipro.jpg'

const workExperiences = [
  {
    title: 'Software Development Engineer',
    company: 'Raj Reddy Center for Technology and Society',
    date: 'Oct 2022 - Present',
    description: [
      'Implemented several websites from scratch and enhanced existing features.',
      'Designed and developed SELSCA for Telangana Government Schools.',
      'Contributed to the Badal platform for NGO collaboration.',
      'Technologies: MERN Stack, ELK Stack, GitLab, NLP, FARM Stack.',
    ],
    image: RCTSLogo, // Updated logo with reduced size
  },
  {
    title: 'Software Intern',
    company: 'Wipro (TURBO – Velocity Programme)',
    date: 'Apr 2022 - Jun 2022',
    description: [
      'Developed an online vegetable marketplace with AngularJS and Spring Boot.',
      'Deployed the application on Google Cloud Platform (GCP).',
    ],
   
   image: Wiprologo
  },
];

const WorkExperience = () => {
  const theme = useTheme();
  return (
    <section id="work-experience" style={{ padding: '4rem 0', backgroundColor: theme.palette.background.default }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
        Work Experience
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {workExperiences.map((experience, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '2rem',
                borderRadius: '16px',
                bgcolor: theme.palette.background.paper,
                boxShadow: theme.shadows[3],
                border: `1px solid ${theme.palette.divider}`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: theme.shadows[6],
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src={experience.image}
                alt={`${experience.title} at ${experience.company}`}
                sx={{
                  width: experience.image === RCTSLogo ? '2000px' : '100%',
                  height: experience.image === RCTSLogo ? '100px' : '150px',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                  alignSelf: experience.image === RCTSLogo ? 'center' : 'flex-start',
                }}
              />
              {/* Job Title */}
              <Typography variant="h5" color={theme.palette.primary.main} gutterBottom sx={{ fontWeight: 'bold' }}>
                {experience.title}
              </Typography>
              {/* Company Name */}
              <Typography variant="subtitle1" color={theme.palette.text.secondary} gutterBottom>
                {experience.company}
              </Typography>
              {/* Date */}
              <Typography variant="body2" color={theme.palette.text.disabled} gutterBottom>
                {experience.date}
              </Typography>
              {/* Description List */}
              <List dense sx={{ width: '100%', marginTop: '1rem', color: theme.palette.text.secondary }}>
                {experience.description.map((item, i) => (
                  <ListItem key={i} disablePadding>
                    <ListItemIcon sx={{ minWidth: '30px', color: theme.palette.primary.main }}>
                      <WorkIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={item} sx={{ fontSize: '0.9rem' }} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default WorkExperience;
