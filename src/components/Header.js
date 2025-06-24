import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Moon icon for dark mode
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Sun icon for light mode
import { Link } from "react-router-dom";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: "Profile", path: "/" },
    { text: "Work Experience", path: "/work-experience" },
    { text: "Projects", path: "/projects" },
    { text: "Education", path: "/education" },
    { text: "Skills", path: "/skills" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)} sx={{ display: { md: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }} component={Link} to="/">
            My Portfolio 
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {menuItems.map((item) => (
              <Typography key={item.text} variant="button" component={Link} to={item.path} sx={{ mx: 2, color: "white", textDecoration: "none" }}>
                {item.text}
              </Typography>
            ))}
          </Box>
          {/* Dark Mode Toggle Button */}
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      
      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} component={Link} to={item.path} onClick={() => setDrawerOpen(false)}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
