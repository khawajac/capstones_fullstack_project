import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import RouteIcon from '@mui/icons-material/Route';
import Stack from '@mui/material/Stack';
import DirectionsIcon from '@mui/icons-material/Directions';

function preventDefault(event) {
  event.preventDefault();
}

export default function DeliveryComponent({waypointData}) {
  // const houseNumber = waypoint.delivery.houseNumber
  // const streetPrefix = waypoint.delivery.streetPrefix
  
  return (
    <React.Fragment>
    <h1>Unassigned Deliveries</h1>
    <Stack direction="row" spacing={2} padding={1} justifyContent={'center'}>
      <Button variant="contained" endIcon={<DirectionsIcon />}>
        Generate Routes
      </Button>
    </Stack>
    <Box sx={{ margin: '20px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Address</TableCell>
          <TableCell align="center">Delivery Id</TableCell>
          <TableCell align="center">Route Id</TableCell>
          <TableCell align="center">Delivery Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {waypointData.map((waypoint,index) => (
          <TableRow key={index}>
            <TableCell align="left">{`${waypoint.delivery.customerName}`}</TableCell>
            <TableCell align="left">{`${waypoint.delivery.houseNumber},
             ${waypoint.delivery.streetPrefix}
              ${waypoint.delivery.streetSuffix},
                ${waypoint.delivery.city},
                 ${waypoint.delivery.postalDistrict}
                  ${waypoint.delivery.outCode}`}</TableCell>
            <TableCell align="center">{`${waypoint.delivery.id}`}</TableCell>
            <TableCell align="center">{`${waypoint.route}`}</TableCell>
            <TableCell align="center">{`${waypoint.delivery.deliveryStatus}`}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </Box>
  </React.Fragment>
  );
}