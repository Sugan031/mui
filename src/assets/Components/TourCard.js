import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Rating } from '@mui/material';
const TourCard = () => {
  return (
    <Card sx={{ maxWidth: 600, marginBottom:'20px' }}>
    <CardHeader
      title="A Perfect Holiday Spot"
    />
    <CardMedia
      component="img"
      height="194"
      image={require('../road-7704729_640.jpg')}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <Rating
        name="simple-controlled"
        value={4}
/>
    </CardActions>
  </Card>
  );
}

export default TourCard