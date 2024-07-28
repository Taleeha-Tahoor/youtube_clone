import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': "3a13f40ce5msh06719082808b131p184243jsn16f1aedaa461",
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export async function fetchFromAPI (url){
    try {
      const { data } = await axios.get(`${BASE_URL}/${url}`, options);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };