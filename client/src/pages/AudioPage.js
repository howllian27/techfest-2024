import React, { useState } from 'react';
import AppAppBar from '../modules/views/AppAppBar';
import ChoicesImage from '../modules/components/ChoiceImage';
import ChoicesText from '../modules/components/ChoiceText';
import ChoicesAudio from '../modules/components/ChoiceAudio';

function AudioPage(){
    return (
        <div>
          <AppAppBar/>
          <ChoicesAudio/>
        </div>
      );
    
}

  

export default AudioPage;