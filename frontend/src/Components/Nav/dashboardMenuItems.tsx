import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ReactNode } from "react";

interface MenuItemProps {
    iconComponent:ReactNode,
    itemText:string,
    navToPage:()=>void
}
const MyMenuItem:React.FC<MenuItemProps>= ({iconComponent,itemText,navToPage}) =>{
    return (
        <ListItem>
        <ListItemButton onClick={navToPage} sx={{
            padding:0
        }}> 
            <ListItemIcon sx={{color:"white",margin:0}}>
                {iconComponent}
            </ListItemIcon>
            <ListItemText sx={{margin:0}} primary={itemText} />
        </ListItemButton>
    </ListItem>
    )
}

export default MyMenuItem