import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import SerieAdd from '../components/SerieEdit/SerieAdd';

const AddSerie = ({ series }) => {
  const { id } = useParams();

  return (
    <Box marginTop={8}>
      <h1>Inclusão de Serie</h1>
      <SerieAdd />
    </Box>
  );
};

export default AddSerie;