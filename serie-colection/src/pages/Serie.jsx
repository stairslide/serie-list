import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import SerieEdit from '../components/SerieEdit/SerieEdit';

const Serie = ({ series }) => {
  const { id } = useParams();

  return (
    <Box marginTop={8}>
      <h1>Edição de Série</h1>
      <SerieEdit serie={series} />
    </Box>
  );
};

export default Serie;