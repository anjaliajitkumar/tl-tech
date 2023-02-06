import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Work.css';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '50%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Pending" {...a11yProps(0)} />
          <Tab label="Active" {...a11yProps(1)} />
          <Tab label="Completed" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Card sx={{ }}>
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
      </TabPanel>


      <TabPanel value={value} index={0}>
      <Card sx={{ }}>
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
      </TabPanel>


      <TabPanel value={value} index={0}>
      <Card sx={{ }}>
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
      </TabPanel>


      <TabPanel value={value} index={1}>
      <Card sx={{ }}>
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
      </TabPanel>

      <TabPanel value={value} index={1}>
      <Card sx={{ }}>
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
      </TabPanel>

      <TabPanel value={value} index={2}>
      <Card sx={{ }}>
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
      </TabPanel>
    </Box>
  );
}