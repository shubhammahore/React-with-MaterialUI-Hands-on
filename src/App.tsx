import React from 'react';
import BasicTable from './BasicTable/BasicTable';
import StickyHeadTable from './BasicTable/StickyHeadTable';
import EnhancedTable from './BasicTable/EnhancedTable';
import SimpleAccordion from './Accordion/SimpleAccordion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FreeSolo from './AutoComplete/FreeSolo';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h3" gutterBottom>
      StickyHeadTable Example
      </Typography>
      </Box>
      <FreeSolo></FreeSolo>
      <Button variant="contained">Submit</Button>
      <SimpleAccordion></SimpleAccordion>
      {/* <EnhancedTable></EnhancedTable> */}
      {/* <StickyHeadTable></StickyHeadTable> */}
      {/* <BasicTable></BasicTable> */}
      
    </div>
  );
}

export default App;
