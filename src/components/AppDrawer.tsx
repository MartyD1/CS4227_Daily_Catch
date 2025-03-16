import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const AppDrawer: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <IconButton onClick={() => setDrawerOpen(true)} style={{ color: "white" }}>
                <MenuIcon />
            </IconButton>

            <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <List style={{ width: "250px" }}>
                    <ListItem onClick={() => setDrawerOpen(false)} sx={{ cursor: "pointer" }}>
                        <ListItemText primary="Close" />
                    </ListItem>
                    <ListItem component={Link} to="/profile" onClick={() => setDrawerOpen(false)} sx={{ cursor: "pointer" }}>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem component={Link} to="/settings" onClick={() => setDrawerOpen(false)} sx={{ cursor: "pointer" }}>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default AppDrawer;
