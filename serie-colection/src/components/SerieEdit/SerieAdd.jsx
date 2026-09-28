import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSerieApi from "../../hooks/useSerieApi";
import { Box, TextField, Button } from "@mui/material";


const SerieAdd = () => {
  const navigate = useNavigate();
  const { createSerie } = useSerieApi();
  const [serie, setSerie] = useState({
    title: "",
    seasons: "",
    releaseDate: "",
    director: "",
    production: "",
    category: "",
    watchedAt: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSerie((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveClick = async (event) => {
    event.preventDefault();

    try {
      await createSerie({ ...serie, seasons: Number(serie.seasons) });
      navigate("/list");
    } catch (error) {
      console.error("Erro ao salvar série:", error);
    }
  };

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
          value={serie.seasons}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <p>Data de lançamento</p>
        <input 
          type="date"
          label="Data de lançamento"
          id='Data de lançamento' 
          name='releaseDate'
          value={serie.releaseDate}
          onChange={handleInputChange}
          fullWidth
          margin='normal'
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
          label="Estúdio"
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
        <p>Data em que assistiu</p>
        <input 
          type="date"
          name='watchedAt'
          value={serie.watchedAt}
          onChange={handleInputChange}
          fullWidth
          margin='normal'
        />
        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Salvar
        </Button>
      </form>
    </Box>
  );
};

export default SerieAdd;
