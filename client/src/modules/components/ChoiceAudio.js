import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function ChoiceAudio() {
  const [textInput, setTextInput] = useState('');
  const [selectedAudio, setSelectedAudio] = useState(null);

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
  };

  return (
    <Card sx={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/static/images/audio_bgm.jpg"  // Replace with the path to your image
        title="Your Image"
      />
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button component="label" htmlFor="audio-upload" size="small" variant="contained">
          Upload Audio
          <input
            id="audio-upload"
            type="file"
            accept="audio/*"
            style={{ display: 'none' }}
            onChange={handleAudioInputChange}
          />
        </Button>
        <AudioPlayer src={selectedAudio && URL.createObjectURL(selectedAudio)} />
        <Button size="small" onClick={handleUpload} variant="contained">
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}

