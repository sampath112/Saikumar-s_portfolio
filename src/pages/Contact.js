import React from 'react';
import { Typography, Box, Link, Button, Stack, useMediaQuery, useTheme } from '@mui/material';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Responsive check

  return (
    <section id="contact" style={{ padding: '4rem 1rem' }}>
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom
        sx={{ fontSize: isSmallScreen ? '1.8rem' : '2.5rem' }}
      >
        Contact Details
      </Typography>

      <Box sx={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom sx={{ fontSize: isSmallScreen ? '1rem' : '1.2rem' }}>
          Email: <Link href="mailto:saikumarpol4@gmail.com" color="primary">saikumarpol4@gmail.com</Link>
        </Typography>
        
        <Typography variant="h6" gutterBottom sx={{ fontSize: isSmallScreen ? '1rem' : '1.2rem' }}>
          Phone: <Link href="tel:+917287013867" color="primary">7287013867</Link>
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ fontSize: isSmallScreen ? '1rem' : '1.2rem' }}>
          Follow me on:
        </Typography>

        <Stack 
          direction={isSmallScreen ? "column" : "row"} 
          spacing={2} 
          justifyContent="center" 
          alignItems="center"
        >
          <Button variant="outlined" color="primary" startIcon={<FaTwitter />} component={Link} href="https://x.com/polasaikumar3?s=11" target="_blank">
            Twitter
          </Button>
          <Button variant="outlined" color="primary" startIcon={<FaInstagram />} component={Link} href="https://www.instagram.com/thisz__chinnu/" target="_blank">
            Instagram
          </Button>
          <Button variant="outlined" color="primary" startIcon={<FaGithub />} component={Link} href="https://github.com/saikumarpol" target="_blank">
            GitHub
          </Button>
          <Button variant="outlined" color="primary" startIcon={<FaLinkedin />} component={Link} href="https://www.linkedin.com/in/sai-kumar-pola-3993851a1/" target="_blank">
            LinkedIn
          </Button>
        </Stack>
      </Box>
    </section>
  );
};

export default Contact;
