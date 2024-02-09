import { Box, Container, TextField, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab';
import './App.css'
import { useState } from 'react';

const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=`;

function App() {

  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.prevent.default();
    setLoading(true);
    setError({
      error: true,
      message: "",
    });
    try{
      if(!city.trim()) throw {message: "El campo ciudad es obligatorio"};
    }catch (error){
      console.log(error);
      setError({
        error: true,
        message: error.message,
      });
      
    } finally{
      setLoading(false);
    };
  }

  return (
    <Container
      maxWidth="xs"
      sx={{mt:2}}
    >

      <Typography
      variant="h3"
      component="h1"
      align="center"
      gutterBottom
      >
        Clima
      </Typography>
        <Box
        sx={{display: "grid", gap:2}}
        component="form"
        autoComplete="off"
        onSubmit={onSubmit}
        >
            <TextField 
              id="city"
              label="Ciudad"
              variant="outlined"
              size="small"
              required  
              fullWidth
              onChange={(e) => setCity(e.target.value)}  
              error={error.error}
              helperText={error.message}       
              />

              <LoadingButton
              type="submit"
              variant="contained"
              loading={loading}
              loadingIndicator="Cargando..."
              >
                Buscar
              </LoadingButton>
        </Box>

        <Typography
        textAlign="center"
        sx={{mt: 2, fontSize: "10px"}}
        >
           Powered by: {""}
          <a
          href="https://www.weatherapi.com/"
          title="Weather API"
          >
            WeatherAPI.com
          </a> 
        </Typography>
    </Container>
  )
}

export default App
