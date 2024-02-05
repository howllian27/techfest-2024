import React from 'react';
import AppAppBar from '../modules/views/AppAppBar';
import Typography from '../modules/components/Typography'; 
import ChoiceAudio from '../modules/components/ChoiceAudio';
import './AudioPage.css';

function AudioPage(){
    return (
        <div>
          <AppAppBar />
          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', marginTop: 4 }}>
          AI Audio Generator
          </Typography>
          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', marginTop: 4 }}>
          Please enter the Youtube URL of your audio
          </Typography>
          <ChoiceAudio/>
        </div>
      );
    
}


export default AudioPage;