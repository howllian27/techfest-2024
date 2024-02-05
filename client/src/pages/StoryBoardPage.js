import React, { useState } from 'react';
import AppAppBar from '../modules/views/AppAppBar';
import Typography from '../modules/components/Typography'; 
import ChoiceText from '../modules/components/ChoiceText';
import './StoryBoardPage.css';
function StoryBoardPage(){
    return (
        <div className="storyboard-container">
          <AppAppBar/>
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold' }}>
              StoryBoarding for your new post!
            </Typography>
            <div className="choice-text-container" >
            <ChoiceText />
          </div>
        </div>
        </div>
      );
}

export default StoryBoardPage;
