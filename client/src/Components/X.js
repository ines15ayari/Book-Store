import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';

function X() {
  return (
    <Card sx={{ width: 200 }} >
      <Typography gutterBottom variant="h4" >
        Book Name
      </Typography>
      <Typography color="text.secondary">
        Author
      </Typography>
      <Typography sx={{ fontWeight: 'light' }}>
        Type
      </Typography>
      <CardMedia
        component="img"
        sx={{ width: "40%" }}
        image="https://tinyurl.com/553zjfwf"
        alt="green iguana"
      />

    </Card>

  )
}

export default X