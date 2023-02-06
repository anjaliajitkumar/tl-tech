import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Form.css';
import Forms from './Forms';


export default function Form() {
  return (
<div className='form1'>
    <h2>Create Profile</h2>
      <br/>
      <TextField id="outlined-basic" label="Job Title" variant="outlined" />
      <br/>
      <br/>
      <TextField id="outlined-basic" label="Contact Number" variant="outlined" />
      <br/>
      <h2>Add your Skills</h2>
      <br/>
      <TextField id="outlined-basic" label="Add your Skills" variant="outlined" />
      <br/>
      <h2>Work Experience</h2>
      <TextField id="outlined-basic" label="Work Experience" variant="outlined" />
      <br/>
      <h2>Description</h2>
      <TextField id="outlined-basic" label="Description" variant="outlined" />
      <br/>
      <br/>
      <Button id="btn" variant="contained" >
        Continue
      </Button>
      </div>
  );
}