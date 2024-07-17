import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import CurrencyPoundTwoToneIcon from '@mui/icons-material/CurrencyPoundTwoTone';
function Navbar() {
  return (
    <>
    <AppBar position="static" sx={{ backgroundColor: 'white', color: '#333948' }}>
      <Toolbar>
              <Box sx={{ display: 'flex', alignItems: 'center', marginLeft:'3cm'}}>
              <Typography variant="h6" sx={{ flexGrow: 0 }}>
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" style={{ height: '70px', marginRight: '10px', marginTop: '10px' }} />
              </Typography>
              <Tabs
                textColor="'#434956'"
                indicatorColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                sx={{ flexGrow: 1,
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#DC6A1A', // Custom underline color
                  },}}
                
              >
                <Tab label="Windows" sx={{":hover":{color: '#DC6A1A',borderBottom: '2px solid #DC6A1A',}}} />
                <Tab label="Doors & Porches"  sx={{":hover":{color: '#DC6A1A',borderBottom: '2px solid #DC6A1A'}}}/>
                <Tab label="Conservatories" sx={{":hover":{color: '#DC6A1A',borderBottom: '2px solid #DC6A1A'}}} />
                <Tab label="Roomfit" sx={{":hover":{color: '#DC6A1A',borderBottom: '2px solid #DC6A1A'}}} />
              </Tabs>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, alignItems: 'center', flexWrap: 'wrap', marginLeft: 'auto', marginRight: '3cm' }}>
            <Tabs
              aria-label="navigation tabs"
              textColor="inherit"
              indicatorColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              sx={{
            flexGrow: 1,
            '& .MuiTabs-indicator': {
              backgroundColor: '#DC6A1A', // Custom underline color
            },
          }}
            >
              <Tab label="About"  sx={{":hover":{color: '#DC6A1A',borderBottom: '2px solid #DC6A1A'}}}/>
              <Tab label="Support" sx={{":hover":{color: '#DC6A1A',borderBottom: '2px solid #DC6A1A'}}} />
            </Tabs>
            
            <Box>
            <Typography variant="body1" sx={{ marginRight: { xs: 0, md: '16px' }, marginBottom: { xs: '8px', md: 0 } }}>
              0800 466 1228
            </Typography>
            <Typography variant="body1" sx={{ marginRight: { xs: 0, md: '16px' }, marginBottom: { xs: '8px', md: 0 } }}>
              9am–6pm Mon–Sun
            </Typography>
            </Box>
              <Button variant="contained" size="large" sx={{background: '#65B44B', borderRadius: '50px',height: '1.3cm',width: '7cm',":hover":{background: '#57AD50'}}}>
              <Typography sx={{ textAlign: 'left', width: '100%',marginLeft: '4px' }}>
              Get Price
            </Typography>
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
              </Button>
            </Box>
          
      </Toolbar>
      <Toolbar sx={{ backgroundColor: '#f2f1ef',minHeight: '50px !important',  }}>
        <Box sx={{ display: 'flex',  margin: 'auto' }}>
          <Typography sx={{margin:'auto'}}>10 year guaranteeGuarantee </Typography><WorkspacePremiumRoundedIcon fontSize="medium"></WorkspacePremiumRoundedIcon></Box>
        <Box sx={{ display: 'flex',  margin: 'auto' }}>
          <Typography sx={{margin:'auto'}}>Made in Britain</Typography><ShuffleRoundedIcon></ShuffleRoundedIcon></Box>
        <Box sx={{ display: 'flex',  margin: 'auto' }}>  
          <Typography sx={{margin:'auto', marginRight:'1px'}}>55+ years in business </Typography><img src={`${process.env.PUBLIC_URL}/55 years grey.svg`} alt="55 years"></img></Box>
        <Box sx={{ display: 'flex',  margin: 'auto' }}>
          <Typography sx={{margin:'auto'}}>We'll match uPVC window prices</Typography><CurrencyPoundTwoToneIcon></CurrencyPoundTwoToneIcon></Box>
    </Toolbar>
      <Toolbar sx={{backgroundColor:"#233657",minHeight: '50px !important'}}>
      <Box display="flex" flexGrow={1} justifyContent="center">
          <Typography variant="h6" component="div" color="white">
            ANGLIAN HOME IMPROVEMENTS – THE UK'S NO. 1 HOME IMPROVEMENT PROVIDER
          </Typography>
      </Box>
      </Toolbar>
    </AppBar>
    
    </>
  );
}

function HomeWallpaper(){
  return(
    <>
    <Box component={'img'}
    sx={{height:'100%',
      width: '100%'
    }}
    alt="wallPaper"
    src={`${process.env.PUBLIC_URL}/home page.webp`}>
    
    </Box>
    </>
  )
}

function App(){
  return(
    <div>
    <Navbar />
    <HomeWallpaper />
    </div>
  )
}
export default App;
