import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";




const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

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

  const handleLogin = async (event) => {
    event.preventDefault();
    try{
      const userResponse = await axios.post("https://delacruz.bscs.tech/public/api/login", 
      {
        email,
        password   
      });
      localStorage.setItem("token", JSON.stringify(userResponse));
      navigate("/dashboard");
    } catch(error){
      console.error("Login Failed", error);
    }
    };

  return (
    <>
    <Container component="main">
      <Box sx={{ marginTop: 8, }} >
        <Grid container sx={{display: "flex", justifyContent: "center",}}>
          {/* <Grid  item xs={false} sm={4} md={7}  sx={{
              backgroundPosition: "center",
            }}
          /> */}
          <Grid item  xs={12} sm={8} md={5} component={Paper} elevation={6} square >
            <Box sx={{ my: 8, mx: 4, display: "flex", flexDirection: "column", alignItems: "center",}}>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
                <TextField margin="normal" required fullWidth id="email" label="Email" name="email" autoComplete="email"  type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoFocus />
                <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </>
  );
};

export default Login;
