import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Grid } from '@mui/material';

function App() {

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'powderblue' }}>
      <Toolbar>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Angalien
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Tabs
              aria-label="navigation tabs"
              textColor="inherit"
              indicatorColor="primary"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Windows" />
              <Tab label="Doors & Porches" />
              <Tab label="Conservatories" />
              <Tab label="Roomfit" />
              <Tab label="About" />
              <Tab label="Support" />
            </Tabs>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, alignItems: 'center', flexWrap: 'wrap' }}>
              <Typography variant="body1" sx={{ marginRight: { xs: 0, md: '16px' }, marginBottom: { xs: '8px', md: 0 } }}>
                0800 466 1228 | 9am–6pm Mon–Sun
              </Typography>
              <Button variant="contained" color="primary">
                Get Price
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default App;
