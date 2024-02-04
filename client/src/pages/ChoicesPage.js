// src/SelectChoices.js
import React, { useState } from 'react';
import AppAppBar from '../modules/views/AppAppBar';
import Choices from '../modules/components/Choices';

function ChoicesPage(){
    return (
        <div>
          <AppAppBar/>
          <Choices/>
          <Choices/>
          <Choices/>

        </div>
      );
    
}

  

export default ChoicesPage;
