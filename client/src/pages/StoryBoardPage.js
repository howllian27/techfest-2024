import React, { useState } from 'react';
import AppAppBar from '../modules/views/AppAppBar';
import ChoiceText from '../modules/components/ChoiceText';


function StoryBoardPage(){
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <AppAppBar/>
          <ChoiceText/>
        </div>
      );
    
}

  

export default StoryBoardPage;