import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your content
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Three form of services that help you garner attention and alleviate status on social media
      </Typography>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: 'center' }} marginTop={10}>
          <Grid item>
            <Link to="https://storyboard.streamlit.app/" style={{ textDecoration: 'none' }}>
              <Button color="secondary" size="large" variant="contained">
                Storyboarding
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/audio" style={{ textDecoration: 'none' }}>
              <Button color="secondary" size="large" variant="contained">
                Audio Creation
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="coverpage" style={{ textDecoration: 'none' }}>
              <Button color="secondary" size="large" variant="contained">
                CoverPage Creation
              </Button>
            </Link>
          </Grid>
        </Grid>
    </ProductHeroLayout>
  );
}
