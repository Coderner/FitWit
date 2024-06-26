import axios from 'axios';

export const fetchExerciseData = async() => {
    try {
        const response = await axios.request({
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises',
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        })
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchBodyPartData = async() => {
    try {
        const response = await axios.request({
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        })
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchByBodyPart = async({bodyPart}) => {
    try {
        const response = await axios.request({
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        })
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchExerciseById = async({id}) => {
    try {
        const response = await axios.request({
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        })
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchYtVideos = async(querry) => {
      try {
          const response = await axios.request( {
            method: 'GET',
            url: `https://youtube-search-and-download.p.rapidapi.com/search`,
            params: {
                query: querry
            },
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
              'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
            }
          });
          return response.data;
      } catch (error) {
          console.error(error);
      }
}
