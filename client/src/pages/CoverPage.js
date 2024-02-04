
import React from 'react';
import AppAppBar from '../modules/views/AppAppBar';
import Typography from '../modules/components/Typography'; 
import ChoiceImage from '../modules/components/ChoiceImage';
import './CoverPage.css'; 

function CoverPage(){
    return (
        <div>
          <AppAppBar backgroundColor="black" />
          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', marginTop: 4 }}>
          CoverPage Generator
          </Typography>
          <ChoiceImage/>
        </div>
      );
    
}

export default CoverPage;
