import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function ChoiceAudio() {
  const [textInput, setTextInput] = useState('');
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [audioOutput, setAudioOutput] = useState('');

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleAudioInputChange = (event) => {
    const files = event.target.files;
    const selectedAudioFile = files[0]; // Allow only one audio file
    setSelectedAudio(selectedAudioFile);
  };

  const handleUpload = () => {
    // Implement your upload logic here
    console.log('Text Input:', textInput);
    console.log('Selected Audio:', selectedAudio);

    // Simulate audio processing logic
    // For demonstration purposes, it sets the audioOutput to a simple message
    setAudioOutput('Audio processed successfully!');
  };

  return (
    <Card sx={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', marginTop: 10 }}>
      <CardActions sx={{ justifyContent: 'center' }}>
        <TextField
          label="Enter text"
          variant="outlined"
          value={textInput}
          onChange={handleTextInputChange}
          style={{ width: '100%', marginBottom: 10 }}
        />
      </CardActions>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="small" onClick={handleUpload} variant="contained" style={{ marginLeft: 10 }}>
          Submit
        </Button>
      </CardActions>
      {audioOutput && (
        <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 2 }}>
          Audio Output:
        </Typography>
      )}
      <Typography variant="body1" color="textPrimary">
        {audioOutput}
      </Typography>
    </Card>
  );
}
