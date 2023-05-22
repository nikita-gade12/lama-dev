import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography,} from '@mui/material'
import React from 'react'

export const Rightbar = () => {
  return (
    <Box flex={3}p={2} sx={{display:{xs:"none",sm:"block"}}} >
       <Box position="fixed" width={200}>
        <Typography variant='h6' fontWeight={100} >
          Online Friends</Typography>
          <AvatarGroup total={6}>
  <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format" />
  <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format" />
  <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1530731141654-5993c3016c77" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
<Typography variant='h6' fontWeight={100} mt={2} mb={2} >
          Letest photos</Typography>
          <ImageList>
        <ImageListItem >
          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
          
            alt=""
           />
        </ImageListItem>
     </ImageList>
     <ImageList>
        <ImageListItem >
          <img
            src="https://images.unsplash.com/photo-1530731141654-5993c3016c77"
          
            alt=""
           />
        </ImageListItem>
     </ImageList>
    
     <Typography variant='h6' fontWeight={100} mt={2} mb={2} >
          Letest Conversations</Typography>
          <List sx={{ width: '200%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1530731141654-5993c3016c77" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
       </Box>

      </Box>
  )
}
