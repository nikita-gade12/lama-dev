import React from 'react'
import {  Favorite, FavoriteBorder, Feed, MoreVert, Share } from '@mui/icons-material'
import { Avatar,  Card, CardActions, CardContent, CardHeader, CardMedia,  Checkbox,  IconButton, Typography } from '@mui/material'

  export const Post = () => {
  return (
    <>
  
    <Card sx={{margin:5}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Ninja doe"
        subheader="May 21, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://www.travelandleisure.com/thmb/I9VMFOpizyils9O_1TGqqpHXeYo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/havasu-falls-arzona-us-WATERFALLS1021-d0967cd424ea4a2abde23cb3581144dc.jpg"
        alt="Paella dish"
      />
       <CardMedia
        component="img"
        height="20%"
        image="https://images.unsplash.com/photo-1530731141654-5993c3016c77"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
        <CardMedia
        component="img"
        height="20%"
        image="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
        alt="Paella dish"
      />

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"red"}} />} />
          
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      
      </CardActions>
      
    </Card>
    
    </>
  )
}

export default Post;