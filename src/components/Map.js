import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Map() {
  return (
    <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.430290314405!2d76.95988096401955!3d8.513206673455777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05ba31e5bb4f2b%3A0x7db4ba03d2aae25f!2sSasthamangalam%2C%20Thiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1675682004863!5m2!1sen!2sin"
         width="600" 
         height="450"
         style={{border:0}}
         allowfullscreen="" 
         loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade">

         </iframe>

         <div className='address'>
            <h2>Select Address</h2>
            <TextField id="outlined-basic" label="" variant="outlined" />
            <br/>
            <br/>
            <Button id="btn" variant="contained" >
        Continue
      </Button>


         </div>
    </div>
  )
}

export default Map