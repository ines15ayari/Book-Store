import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

function Crd({ book }) {
  return (
    <Card sx={{ width: 300 }} style={{ textAlign: "center" }} >
      <CardContent>
        <Typography gutterBottom variant="h4" >
          {book.bookName}
        </Typography>
        <Typography color="text.secondary">
          {book.Author}
        </Typography>
        <Typography sx={{ fontWeight: 'light' }}>
          {book.Type}
        </Typography>
        <CardMedia
          component="img"
          sx={{ width: "100%", height: "100%" }}
          image={book.bookImage}
          alt="green iguana"
        />
      </CardContent>
      <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }} variant="h6" color="text.primary">
        {book.Price}Dt
      </Typography>
      <CardActions>
        <Link to={`/Details/${book._id}`}>
          <Button  variant="contained" href="/details" size="small" >See Description</Button>
        </Link>
      </CardActions>
    </Card>

  )
}

export default Crd