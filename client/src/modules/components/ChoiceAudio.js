import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
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
      <CardActions>
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
          Upload
        </Button>
      </CardActions>
    </Card>
  );
}
