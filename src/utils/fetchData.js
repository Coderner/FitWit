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