import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  }
  const [selectedTabb, setSelectedTabb] = useState(0);

  const handleChangee = (event, newValue) => {
    setSelectedTabb(newValue);
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: '#333948' }}>
      <Toolbar>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ flexGrow: 0 }}>
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" style={{ height: '80px', marginRight: '10px', marginTop: '10px' }} />
              </Typography>
              <Tabs
                textColor="inherit"
                indicatorColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                sx={{ flexGrow: 1,
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#DC6A1A', // Custom underline color
                  },}}
                value={selectedTab}
                onChange={handleChange}
                
              >
                <Tab label="Windows" sx={{":hover":{color: '#DC6A1A'}}} />
                <Tab label="Doors & Porches"  sx={{":hover":{color: '#DC6A1A'}}}/>
                <Tab label="Conservatories" sx={{":hover":{color: '#DC6A1A'}}} />
                <Tab label="Roomfit" sx={{":hover":{color: '#DC6A1A'}}} />
              </Tabs>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, alignItems: 'center', flexWrap: 'wrap', marginLeft: 'auto' }}>
            <Tabs
              aria-label="navigation tabs"
              textColor="inherit"
              indicatorColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              value={selectedTabb}
              onChange={handleChangee}
              sx={{
            flexGrow: 1,
            '& .MuiTabs-indicator': {
              backgroundColor: '#DC6A1A', // Custom underline color
            },
          }}
            >
              <Tab label="About"  sx={{":hover":{color: '#DC6A1A'}}}/>
              <Tab label="Support" sx={{":hover":{color: '#DC6A1A'}}} />
            </Tabs>
            
            <Box>
            <Typography variant="body1" sx={{ marginRight: { xs: 0, md: '16px' }, marginBottom: { xs: '8px', md: 0 } }}>
              0800 466 1228
            </Typography>
            <Typography variant="body1" sx={{ marginRight: { xs: 0, md: '16px' }, marginBottom: { xs: '8px', md: 0 } }}>
              9am–6pm Mon–Sun
            </Typography>
            </Box>
              <Button variant="contained" sx={{background: '#65B44B', borderRadius: '50px', width: '5cm',":hover":{background: '#57AD50'}}}>
              <Typography sx={{ textAlign: 'left', width: '100%',marginLeft: '4px' }}>
              Get Price
            </Typography>
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
              </Button>
            </Box>
          
      </Toolbar>
    </AppBar>
  );
}

export default App;
