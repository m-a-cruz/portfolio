import React, { useEffect, useState } from 'react';
import { AppBar, IconButton, Toolbar, Typography, Button, MenuList, ListItemIcon } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const [users, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = JSON.parse(localStorage.getItem("token"));
        setUser(response.data);
        
        navigate("/dashboard");
      } catch (error) {
        console.error("Failed to Fetch User", error);
        navigate("/login");
      }
    };
    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };



  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#00d2d3' }}>
        <Toolbar variant="dense">
          <Typography style={{ fontSize: '25px' }} variant="h6" color="inherit" component="div">
            Election System
          </Typography>
          <Typography style={{ marginLeft: 'auto', fontSize: '25px'}}>
            <Nav>
              <Nav.Item>
                <Nav.Link style={{ color: 'white'}} as={Link} to={'/dashboard/positions'} eventKey={"Positions"}>Positions</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{ color: 'white'}} as={Link} to="/dashboard/candidates" eventKey={"Candidates"}>Candidates</Nav.Link>
              </Nav.Item>
            </Nav>
          </Typography>
          <Typography style={{ marginLeft: 'auto', fontSize: '25px' }}>
            {users ? `${users.user.name}` : 'User'}
            <Button style={{ marginLeft: 'auto' }} color="inherit" onClick={handleLogout}>
              <PowerSettingsNewIcon />
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;
