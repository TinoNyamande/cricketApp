import './App.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Register } from './pages/register';
import NewsHome from './live-updates/newsHome';
import PickTeam from './cards/pickTeam';
import AddPlayer from './admin/addplayer';
import GetPlayers from './admin/getPlayers';
import AddMatch from './admin/addMatch';
import Stats from './live-updates/stats';
import Teams from './live-updates/teams';
import TeamDetails from './live-updates/teamdetails';

interface Props {

  window?: () => Window;
}

const drawerWidth = 240;

function App(props: Props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'start' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Fantasy IPL
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'start' }}>
            <Link className='my-link-drawer'  to="/">Home</Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'start' }}>
            <Link className='my-link-drawer'  to="pickteam">Fantasy IPL</Link>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'start' }}>
            <Link to="/" className='my-link-drawer'>More</Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex', height: "100vh", width: "100%", overflow: "auto" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Fantasy IPL
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button sx={{ color: '#fff' }}>
                <Link className='my-link' to="/">Home</Link>
              </Button>
              <Button sx={{ color: '#fff' }}>
                <Link className='my-link' to="/pickteam">Fantasy IPL</Link>
              </Button>    
              <Button sx={{ color: '#fff' }}>
                Statistics
              </Button>

            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box sx={{ backgroundColor: "azure", width: "100%", height: "100vh", marginTop: "10vh", overflow: "auto" }}>
          <Routes>
            <Route path='/' element={<NewsHome/>} />
            <Route path="/signup" element={<Register />} />
            <Route path="/pickteam" element={<PickTeam />} />
            <Route path="/admin/addplayer" element={<AddPlayer/>} />
            <Route path="/admin/allplayers" element={<GetPlayers/>} />
            <Route path='/admin/addmatch' element={<AddMatch/>} />
            <Route path="/stats" element={<Stats/>} />
            <Route path="/teams" element={<Teams/>} />
            <Route path="/teams/:team" element = {<TeamDetails/>} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>

  )
}

export default App
