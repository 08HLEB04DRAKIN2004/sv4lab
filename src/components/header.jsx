import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material'; 
import { Link } from 'react-router-dom'; 

function Header() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar style={{ justifyContent: 'center' }}>
                    <Typography variant="h6">
                        Учет допуска работников предприятия к опасным работам
                    </Typography>
                </Toolbar>
                <Toolbar>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                    <Button color="inherit" component={Link} to="/contact">Contact</Button>
                    <Button color="inherit" component={Link} to="/accounting">Accounting</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
