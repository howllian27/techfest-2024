import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function ChoiceText() {
  const [textInput, setTextInput] = useState('');

  const handleTextInputChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 200) {
      setTextInput(inputValue);
    }
  };

  const handleUpload = () => {
    // Implement your upload logic here
    console.log('Text Input:', textInput);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <TextareaAutosize
          minRows={3}
          placeholder="Enter text (max 200 words)"
          value={textInput}
          onChange={handleTextInputChange}
          style={{ width: '100%', resize: 'none' }}
          maxLength="200"
        />
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="small" onClick={handleUpload} variant="contained">
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
