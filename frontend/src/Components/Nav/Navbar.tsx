import CabinIcon from '@mui/icons-material/Cabin';
import HomeIcon from '@mui/icons-material/Home';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal } from "@mui/material"
import "./../../styles/navcomponents.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useAuth } from '../context/authProvider';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Login } from '../pages/auth/login';
import {Register} from '../pages/auth/register';
export default function Navbar() {

    const { isLoggedIn,  inDashboard, logout } = useAuth();
    const navigate = useNavigate();
    const [isLoginModalOpen,setIsloginModalopen] = useState(false);
    const [isSignupModalOpen,setIsSignupModalopen] = useState(false);
    

    const toDashboard = () => {
        inDashboard();
        navigate("/dashboard");
    }
    const closeLoginModal  = () =>{
        setIsloginModalopen(false)
    }
    const closeSignupModal  = () =>{
        setIsSignupModalopen(false)
    }
    const modalStyle = {
        width:"50%",
        margin:"auto"
    }

    return (
        <div className="sidebar-container nav-container">
            <div className="row">
                <div className="col-md-1 my-nav-items">
                    <h2>My Logo</h2>
                </div>
                <div className="col-md-11">
                    <List sx={{ display: "flex", flexDirecton: "row", margin: 0, padding: 0 }}>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon sx={{ color: "white" }}>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home"></ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon sx={{ color: "white" }}>
                                    <CabinIcon />
                                </ListItemIcon>
                                <ListItemText primary="For Sale"></ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon sx={{ color: "white" }}>
                                    <BedroomParentIcon />
                                </ListItemIcon>
                                <ListItemText primary="For Rent"></ListItemText>
                            </ListItemButton>
                        </ListItem>
                        {!isLoggedIn && <ListItem>
                            <ListItemButton onClick={()=>setIsloginModalopen(true)}>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary="Login"></ListItemText>
                            </ListItemButton>
                        </ListItem>
                        }
                        {!isLoggedIn && <ListItem>
                            <ListItemButton onClick={()=>setIsSignupModalopen(true)}>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary="Sign up"></ListItemText>
                            </ListItemButton>
                        </ListItem>
                        }
                        {isLoggedIn && <ListItem>
                            <ListItemButton onClick={toDashboard} >
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary="Dashboard"></ListItemText>
                            </ListItemButton>
                        </ListItem>
                        }

                        {isLoggedIn && <ListItem>
                            <ListItemButton onClick={() => logout()} >
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary="Logout"></ListItemText>
                            </ListItemButton>
                        </ListItem>
                        }

                    </List>
                </div>

            </div>
            <Modal sx={modalStyle} open={isLoginModalOpen} onClose={closeLoginModal}>
                <Login closeModal = {closeLoginModal}/>
            </Modal>
            <Modal sx={modalStyle} open={isSignupModalOpen} onClose={closeSignupModal}>
                <Register closeModal = {closeSignupModal} />
            </Modal>
        </div>
    )
}