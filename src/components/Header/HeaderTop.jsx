import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import FBIcon from '@mui/icons-material/Facebook';
import IGIcon from '@mui/icons-material/Instagram';
import YTIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';
import ShippingIcon from '@mui/icons-material/LocalShipping';
import IconButton from '@mui/material/IconButton';

const Hilang = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('lg')]: {},
}));

function HeaderTop() {
  return (
    <Hilang>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
          <Toolbar>
            <EmailIcon sx={{ color: '#808080' }} />
            <Typography
              variant="h8"
              component="div"
              sx={{ flexGrow: 1, ml: 1, color: '#808080' }}
            >
              sample@gmail.com
            </Typography>
            <Button>
              <ShippingIcon sx={{ color: '#808080' }} />
              <Typography sx={{ ml: 1, color: '#808080' }}>
                CEK ORDER
              </Typography>
            </Button>
            <Button sx={{ ml: 5 }}>
              <Typography sx={{ color: '#808080' }}>CEK STOK</Typography>
            </Button>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              sx={{ ml: 18 }}
            >
              <FBIcon sx={{ color: '#808080' }} />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              sx={{ ml: 1 }}
            >
              <IGIcon sx={{ color: '#808080' }} />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              sx={{ ml: 1 }}
            >
              <YTIcon sx={{ color: '#808080' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </Hilang>
  );
}

export default HeaderTop;
