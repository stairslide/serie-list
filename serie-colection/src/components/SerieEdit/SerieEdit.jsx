import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, TextField, Button } from '@mui/material';
import { Typography } from '@mui/material';
import useSeries from '../../hooks/useSerieApi';

const SerieEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const { getSerie, updateSerie } = useSeries();
  const [serie, setSerie] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isDataLoaded) {
          const serieData = await getSerie(String(id));
          console.log(" ---> ", serieData)
          setSerie(serieData);
          setIsDataLoaded(true);
        }
      } catch (error) {
        console.log('Error fetching series:', error);
      }
    };
  
    fetchData();
  }, [isDataLoaded, getSerie, id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSerie((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveClick = async () => {
    try {
      await updateSerie({ ...serie, seasons: Number(serie.seasons) });
      setIsSaved(true);
      navigate('/list');
    } catch (error) {
      console.log('Error saving series:', error, isSaved);
    }
  };

  if (!serie) {
    return <Typography variant="body1">Série não encontrada.</Typography>;
  }

  return (
    <Box marginTop={1}>
      <form>
        <TextField
          label="Título da série"
          name="title"
          value={serie.title}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Número de temporadas"
          name="seasons"
          type="number"
          value={serie.seasons}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Data de lançamento"
          name="releaseDate"
          type="date"
          value={serie.releaseDate}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Diretor"
          name="director"
          value={serie.director}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Produção"
          name="production"
          value={serie.production}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Categoria"
          name="category"
          value={serie.category}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Data em que assistiu"
          name="watchedAt"
          type="date"
          value={serie.watchedAt}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />

        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Salvar
        </Button>
      </form>
    </Box>
  );
};

export default SerieEdit;
