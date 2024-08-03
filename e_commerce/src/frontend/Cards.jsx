import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards(props) {
    const {data} = props
  return (
    <Card sx={{ maxWidth: 345 , backgroundColor:"black" , color:"white" }}>
      <CardMedia
        sx={{ height: 140 , backgroundSize:"contain" }}
        image={`/uploads/${data.productImage}`}
        title="green iguana"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.productTitle}
        </Typography>
        <Typography variant="body2" color="white">
          {data.productDesc}
        </Typography>
        <Typography variant='h6'>
           Price:- {data.productPrice}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
