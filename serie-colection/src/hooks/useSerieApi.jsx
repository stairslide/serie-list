
import axios from 'axios';

const useSeries = () => {
  const apiUrl = 'http://localhost:5000/series';

  const getAllSerie = async () => {
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const getSerie = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const createSerie = async (serie) => {
    try {
      const response = await axios.post(apiUrl, serie);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const updateSerie = async (serie) => {
    try {
      await axios.put(apiUrl, serie);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const deleteSerie = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return { getAllSerie, getSerie, createSerie, updateSerie, deleteSerie };

};

export default useSeries;
