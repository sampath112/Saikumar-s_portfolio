import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import { useTheme } from '@mui/material/styles';
import Badal from '../assests/Badal.png'
import Club from '../assests/club.png'
import Safezone from '../assests/safezone.png'
import Selsca from '../assests/selsca.png'
import Tabot from '../assests/tabot.png'

const projects = [
  {
    title: 'Student Club Dashboard',
    description: 'A student management system enabling students, faculty, and core teams to explore projects, manage profiles, and collaborate within the community.',
    role: 'Developer',
    technologies: 'React.js, Node.js, Express, MongoDB',
    image: Club,
  },
  {
    title: 'Safe Zone',
    description: 'An application to help users find nearby hospitals and check the availability of beds and oxygen during emergencies.',
    role: 'Team Lead',
    technologies: 'HTML, CSS, Django',
    image: Safezone,
  },
  {
    title: 'Badal - Crowdsourcing Developers for Social Cause',
    description: 'A platform for NGOs to post their "Problem Statements" and receive tech solutions from corporates and entities participating in CSR activities.',
    role: 'Developer',
    technologies: 'MERN Stack, ELK Stack, Gitlab',
    image: Badal,
  },
  {
    title: 'SELSCA (School Complex Administration)',
    description: 'A platform for school administration and student data management being developed for Telangana Government Schools.',
    role: 'Developer ',
    technologies: 'MERN Stack',
    image: Selsca,
  },
  {
    title: 'Activeness Grading Tool (TA-Bot)',
    description: 'A tool that helps teachers analyze student performance and activeness in the classroom, developed at RCTS in IIIT-H.',
    role: 'Developer',
    technologies: 'NLP, Farm Stack',
    image: Tabot,
  },
];

const Projects = () => {
  const theme = useTheme();
  return (
    <section id="projects" style={{ padding: '4rem 0', background: theme.palette.background.default }}>
     <Typography
             variant="h3"
             align="center"
             gutterBottom
             sx={{
               fontWeight: "bold",
               color: theme.palette.primary.main,
               
               letterSpacing: "2px",
             }}
           >
             Projects
           </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '15px',
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                '&:hover': { transform: 'scale(1.05)', boxShadow: '0 6px 25px rgba(0, 0, 0, 0.3)' },
              }}
            >
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                sx={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <CardContent sx={{ flexGrow: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h6" color={theme.palette.primary.main}>
                  <CodeIcon sx={{ verticalAlign: 'middle', marginRight: '8px' }} />
                  {project.title}
                </Typography>
                <Typography variant="body2" color={theme.palette.text.secondary}>
                  {project.description}
                </Typography>
                <Typography variant="body2" color={theme.palette.text.secondary}>
                  <strong>Role:</strong> {project.role}
                </Typography>
                <Typography variant="body2" color={theme.palette.text.secondary}>
                  <strong>Technologies:</strong> {project.technologies}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Projects;
