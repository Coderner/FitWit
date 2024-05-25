import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box, CircularProgress } from '@mui/material'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import {fetchExerciseById, fetchYtVideos} from '../utils/fetchData'

const ExerciseDetails = () => {
  
  const [loading,setLoading]=useState(false);
  const [exerciseDetail, setExerciseDetail]=useState({});
  const [exerciseVideos, setExerciseVideos]=useState([]);
  const {id} = useParams();

  useEffect(()=>{
     fetchDetails();
  },[id]);

  const fetchDetails = async() =>{
    setLoading(true);
    try{
      const res = await fetchExerciseById({id});
      setExerciseDetail(res);
      const res2 = await fetchYtVideos(res.name);
      setExerciseVideos(res2.contents);
    }catch(err){
      console.log(err);
    }
    setLoading(false);
  }

  return (
    loading?(
      <Box sx={{height:"80vh", width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <CircularProgress/>
      </Box>):(
      <Box>
       <Detail exerciseDetail={exerciseDetail}/>
       <ExerciseVideos name={exerciseDetail.name} exerciseVideos={exerciseVideos}/>
      </Box>
    )
  )
}

export default ExerciseDetails