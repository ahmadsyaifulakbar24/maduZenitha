import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderBot from './HeaderBot';
import { Box } from '@mui/system';

function Header() {
  return (
    <>
      <Box position="fixed" zIndex="999" sx={{ flexGrow: 1 }}>
        {/* <HeaderTop /> */}
        <HeaderBot />
      </Box>
    </>
  );
}

export default Header;
