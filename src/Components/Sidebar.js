import { Box, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Switch } from '@mui/material'
import React, { Profiler } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Drafts, ExpandLess, ExpandMore, Group, Mail, ModeNight, Pages, People, Person, Settings, StarBorder } from '@mui/icons-material';

export const Sidebar = () => {
  return (
    <Box flex={1} p={2}
    sx={{display:{xs:"none",sm:"block"}}} >
     <Box position="fixed">

    <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'> 
              <ListItemIcon>
              <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'> 
              <ListItemIcon>
              <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'> 
              <ListItemIcon>
              <Group/>
              </ListItemIcon>
              <ListItemText primary="group" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'> 
              <ListItemIcon>
              <Person/>
              </ListItemIcon>
              <ListItemText primary="person" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'> 
              <ListItemIcon>
              <Pages/>
              </ListItemIcon>
              <ListItemText primary="pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'> 
              <ListItemIcon>
              <People/>
              </ListItemIcon>
              <ListItemText primary="friend" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'> 
              <ListItemIcon>
              <ModeNight/>
              </ListItemIcon>
             <Switch/>
            </ListItemButton>
          </ListItem>
          
          </List>
          
            </Box>
     
          </Box>
    
    
      

  )
}
