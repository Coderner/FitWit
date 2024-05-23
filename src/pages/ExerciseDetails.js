import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import {fetchExerciseById} from '../utils/fetchData'

const ExerciseDetails = () => {
  
  const [exerciseDetail, setExerciseDetail]=useState({});
  const {id} = useParams();

  useEffect(()=>{
     const fetchDetails = async() =>{
         const res = await fetchExerciseById({id});
         setExerciseDetail(res);
     }

     fetchDetails();
  },[id]);

  return (
    <Box>
       <Detail exerciseDetail={exerciseDetail}/>
       <ExerciseVideos/>
       <SimilarExercises/>
    </Box>
  )
}

export default ExerciseDetails