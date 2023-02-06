import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Details.css';

function Details() {
  return (
    <div>
        <Card id='card1' sx={{ maxWidth:500}}>
    <CardContent>
      <Typography variant="h5" component="div">
          Ceiling Light Repairing
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Before you begin,turn off power switch controlling the light fixture to off position.Turn off the main power if there is any chance another person/children turning on the wall power switch while you are working
      </Typography>

      <Typography variant="h5" component="div">
          Amount
      </Typography>

      <Typography variant="h6" component="div">
          800 per day
      </Typography>
    </CardContent>
    <CardActions>
    
    </CardActions>
  </Card>

  <br/>
  <br/>
  <div>
  <img id="img" src='https://cdn.trendir.com/wp-content/uploads/2016/12/CDS-Offices-by-BAKOKO-900x1350.jpg'/>
  <img id="img" src='https://tse3.mm.bing.net/th?id=OIP.YtuVQGJMPbe2cxdEvpH_BgHaGL&pid=Api&P=0'/>
  <img id="img" src='http://s7d2.scene7.com/is/image/Armstrong/abp_1244_room_VABch?wid=1760&bgc=0,0,0'/>

  </div>

  <div>
    <br/>
    <br/>
    <h2>About Customer</h2> <Button id='btn3' variant="contained">Get Direction</Button>
    <br/>
    <br/>
    <img id="img2" src="https://tse2.mm.bing.net/th?id=OIP.SuAkDbd_uNNMqbHRy6447AHaHa&pid=Api&P=0"/>
    <h4>Samuel John</h4>
    <p>Swasthi, Karakulam Jn Kachani</p> <p> Near temple, TVM, Pin - 690522</p>
    <br/>
    <Button id='btn1' variant="contained">Reject</Button>
    <Button id='btn2' variant="contained">Negotiate</Button>
    <br/>
    <br/>
    <Button id='btn' variant="contained">Swipe</Button>
  </div>
  </div>
  )
}

export default Details