import React, { useState, useEffect } from "react";
import useSerieApi from "../hooks/useSerieApi";
import { Link } from "react-router-dom";
import { Button, Box, Card, CardContent, IconButton } from "@mui/material";
import { Typography, CircularProgress, Modal } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ListSerie = () => {
  const { getAllSerie, deleteSerie } = useSerieApi();
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSerie, setSelectedSerie] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllSerie();
        setSeries(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log("Error fetching series:", error, loading);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteSerie(id);
      setSeries((prevSeries) =>
        prevSeries.filter((serie) => serie.id !== id)
      );
    } catch (error) {
      console.log("Error deleting series:", error);
    }
  };

  const handleOpenModal = (serie) => {
    setSelectedSerie(serie);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedSerie(null);
    setOpenModal(false);
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box marginTop={8}>
      {series.map((serie) => (
        <Card
          data-testid="serie"
          key={serie.id}
          sx={{ display: "flex", alignItems: "center", mb: 2, pl: 2, backgroundColor: "#f3eded" }}
        >
          <CardContent>
            <Link to={`/serie/${serie.id}`}>
              <Typography variant="h6" className="titulo">
                {serie.title}
              </Typography>
            </Link>
            <Typography variant="body1">
              {serie.seasons} temporada(s) | {serie.category}
            </Typography>
            <Typography variant="body2">
              {serie.production} | Assistida em {serie.watchedAt}
            </Typography>
          </CardContent>
          <IconButton
            data-testid="delete-button"
            onClick={() => handleOpenModal(serie)}
          >
            <DeleteIcon />
          </IconButton>
        </Card>
      ))}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Confirmar exclusão
          </Typography>
          <Typography variant="body1" gutterBottom>
            Deseja realmente excluir a série "{selectedSerie?.name}"?
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}
          >
            <Button
              variant="contained"
              onClick={handleCloseModal}
              sx={{ marginRight: 2 }}
            >
              Cancelar
            </Button>
            <Button
              data-testid="confirm-delete-button"
              variant="contained"
              onClick={() => handleDelete(selectedSerie?.id)}
              color="error"
            >
              Excluir
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ListSerie;
