import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import './Forms.css'
import TextField from '@mui/material/TextField';


function Forms() {

    return (
    <div className='app'>
        <div className='heading'>
        <h2>Portfolio</h2>
        <p>Attach images for your completed jobs</p>
        </div>
        <div>
            <input type="file" id="file"/>
            <div className='label-holder'>
                <label htmlFor='file' className='label'>
                    <i className='material-icons'>add_a_photo</i>

                </label>
            
            </div>

        <h2>Hourly rates</h2>
      <TextField className='txt' id="outlined-basic" label="" variant="outlined" />
      /hr
      <br/>
      <br/>
      <Button id="btn" variant="contained" >
        Continue
      </Button>


        </div>
        </div>
  )
}

export default Forms