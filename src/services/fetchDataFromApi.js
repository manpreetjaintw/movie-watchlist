import axios from 'axios';

const apiUrl = 'http://www.omdbapi.com'  
const apiKey = "14c77f56"

export const fetchDataFromApi = async (params) => {
  try {
    const response = await axios.get( `${apiUrl}/?apikey=${apiKey}&s=${params}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


