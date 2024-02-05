import React from 'react';
import AppAppBar from '../modules/views/AppAppBar';
import Typography from '../modules/components/Typography'; 
import ChoiceAudio from '../modules/components/ChoiceAudio';
import './AudioPage.css';

function AudioPage(){
    return (
        <div className="audio-page-container">
          <AppAppBar sx={{ backgroundColor: '#0000' }} />
          <div className="audio-content">
          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', marginTop: -5 }}>
          AI Audio Generator
          </Typography>
          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold' }}>
          Please enter the Youtube URL of your audio
          </Typography>
          <ChoiceAudio/>
        </div>
        </div>
      );
    
}

export default AudioPage;