import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Joblist.css'

function Joblist() {
  return (
    <div>
        <br/>
        <section id="sec">
        <img id="img1" src='https://tse2.mm.bing.net/th?id=OIP.SuAkDbd_uNNMqbHRy6447AHaHa&pid=Api&P=0'/>
        <h2>Samuel John</h2>
        <p>Trivandrum,Palayam</p>
        </section>
        <br/>
        <br/>
        <h3>Job List</h3>
        <Card id="id5" sx={{maxWidth:300}}>
      <CardContent>
        <Typography variant="h5" component="div">
            Ceiling Light Repairing
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Palayam,Trivandrum
        </Typography>
      </CardContent>
      <CardActions>
      <Button id='btn' variant="contained">View Details</Button>
      </CardActions>
    </Card>
    <br/>
    <br/>

      <Card id="id5" sx={{maxWidth:300 }}>
      <CardContent>
        <Typography variant="h5" component="div">
            Ceiling Light Repairing
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Palayam,Trivandrum
        </Typography>
      </CardContent>
      <CardActions>
      <Button id='btn' variant="contained">View Details</Button>
      </CardActions>
    </Card>

    <br/>
    <br/>


      <Card id="id5" sx={{maxWidth:300 }}>
      <CardContent>
        <Typography variant="h5" component="div">
            Ceiling Light Repairing
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Palayam,Trivandrum
        </Typography>
      </CardContent>
      <CardActions>
      <Button id='btn' variant="contained">View Details</Button>
      </CardActions>
    </Card>

    </div>
  )
}

export default Joblist