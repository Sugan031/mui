import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, Box, Toolbar, Typography } from '@mui/material'
import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent : 'space-between'
})

const Navbar = () => {

  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h5'>Tours</Typography>
            <Box sx={{display:'flex', alignItems:'center', gap:'20px'}}>
            <Badge badgeContent={4} color="error">
                <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={4} color="error">
                    <NotificationsActiveIcon color="action" />
            </Badge>
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
            </Box>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar