import { Box, Button, Drawer, List} from "@mui/material";
import React, { useState } from "react";
import "./../../styles/navcomponents.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import HomeIcon from '@mui/icons-material/Home';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import MyMenuItem from "./dashboardMenuItems";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authProvider";


export default function DashboardSidebar() {
    const [isDrawerOpen, setIsdrawerOpenOpen] = useState<boolean>(false)
    const navigate = useNavigate();
    const {logout,outDashboard} = useAuth();

    const navigateToDashboard = () =>{
        navigate("dashboard")
    }
    const navigateToHome = () =>{
        outDashboard();
        navigate("/")
    }
    const navigateToManage = () =>{
        navigate("dashboard")
    }
    const Logout = () =>{
        logout();
        outDashboard();
        navigate("/")
    }

    const toggleDrawer = (open: boolean) => {
        setIsdrawerOpenOpen(open);
    }


    const list = () => (
        <Box
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
            sx={{
                backgroundColor:"rgb(30, 30, 48)",
                height:"100vh",
                color:"white",
                paddingTop:"5vh"
            }}
        >
            <List>
                <MyMenuItem navToPage={navigateToDashboard} iconComponent={<HomeIcon/>} itemText="Dashboard"/>
                <MyMenuItem navToPage={navigateToDashboard} iconComponent={<SettingsApplicationsIcon/>} itemText="Manage Account"/>
                <MyMenuItem navToPage={Logout} iconComponent={<LogoutIcon/>} itemText="Logout"/>
                <MyMenuItem  navToPage={navigateToHome} iconComponent={<KeyboardReturnIcon/>} itemText="Return to store"/>
            </List>

        </Box>
    );

    return (
        <React.Fragment>
            <div className="sidebar-container">
                <div className="row dashboard-nav">
                    <div className="col-md-4 ">
                        <Button onClick={() => toggleDrawer(true)} >
                             <MenuIcon/>
                        </Button>

                        <Drawer
                            open={isDrawerOpen}
                            onClose={()=>setIsdrawerOpenOpen(false)}
                        >
                            {list()}
                        </Drawer>
                    </div>
                    <div className="col-md-4">
                        <h3>Logged in as User</h3>
                    </div>
                  
                </div>
            </div>

        </React.Fragment>

    )
}