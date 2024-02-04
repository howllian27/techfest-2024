import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function ChoicesImage() {
  const [textInput, setTextInput] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleImageInputChange = (event) => {
    const files = event.target.files;
    const selectedImagesArray = Array.from(files);
    setSelectedImages(selectedImagesArray);
  };

  const handleUpload = () => {
    // Implement your upload logic here
    console.log('Text Input:', textInput);
    console.log('Selected Images:', selectedImages);
  };

  return (
    <Card sx={{ maxWidth: 345, textAlign: 'center'}}>
      <CardMedia
        sx={{ height: 140}}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      {selectedImages.length > 0 && (
        <div>
          {selectedImages.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Uploaded ${index}`}
              style={{ maxWidth: '100%', marginTop: '8px' }}
            />
          ))}
        </div>
      )}
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button
          component="label"
          htmlFor="image-upload"
          size="small"
          variant="contained"
        >
          Upload Images
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            multiple
            style={{ display: 'none' }}
            onChange={handleImageInputChange}
          />
        </Button>
      </CardActions>
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
