import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography} from '@mui/material'
import React, { useState } from 'react'

import { Mail, Notifications, Pets } from '@mui/icons-material';
import { deepOrange } from '@mui/material/colors';






const StyledToolbar=styled(Toolbar)({

  display:"flex",
  justifyContent:"space-between"
});

const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  width:"40%",
  

}));
 
const Icons = styled(Box)(({theme})=>({
  display:"flex" , alignItems:"center", gap:"20px",
  [theme.breakpoints]: {
    display: 'flex'
  },
}));


const UserBox = styled(Box)(({theme})=>({
  display:"flex" , alignItems:"center", gap:"10px",
  [theme.breakpoints]: {
    display: 'none',
    
  }
}));


const Navbar = () => {

  const[open,setOpen]=useState(false)
  return (
    <AppBar position='sticky'>
    <StyledToolbar>
    <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>LAMA DEV</Typography>
    <Pets sx={{display:{xs:"block",sm:"none"}}}/>
    <Search><InputBase placeholder='secrch...'/></Search>
     <Icons>
      <Badge badgeContent={4} color='error'>
      <Mail/>
       </Badge>
       <Badge badgeContent={2} color='error'>
      <Notifications/>
       </Badge>
      
     
     </Icons>

     <UserBox onClick={e=>setOpen(true)} >
     
     <Avatar sx={{ height:30, width:30, bgcolor: deepOrange[500]}}>N</Avatar>

     <Typography variant='span'>Ninja</Typography>
     </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
       onClose={(e)=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </AppBar>
  )
}

export default Navbar