import React,{useEffect,useState} from 'react'
import {Box, Button, Typography, TextField, Stack} from "@mui/material"
import { fetchExerciseData, fetchBodyPartData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {

  const [search,setSearch] = useState("");
  const [bodyParts,setBodyParts] = useState([]);

  useEffect(()=>{
     const fetchData = async() => {
        const data = await fetchBodyPartData();
        setBodyParts(["all", ...data]);
     }
     fetchData();
  },[])

  const handleSearch = async() => {
      console.log(search);
      if(search){
        const exercisesData = await fetchExerciseData();
        console.log(exercisesData);
        const searchedExercises = exercisesData.filter((exercise)=>(
                exercise?.name?.toLowerCase().includes(search)||
                exercise?.bodyPart?.toLowerCase().includes(search)||
                exercise?.equipment?.toLowerCase().includes(search)||
                exercise?.target?.toLowerCase().includes(search)
        ))
        console.log(searchedExercises);
        setSearch('');
        setExercises(searchedExercises);
      }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography 
            fontWeight="700" 
            mb="50px" 
            textAlign="center" 
            sx={{fontSize:{lg:"44px", xs:"30px"}}}
        >
            Awesome Exercises You <br/> Should Know
        </Typography>
        <Box position="relative" mb="72px">
            <TextField
              height="76px"
              value={search}
              onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
              placeholder='Search for exercises'
              type="text"
              sx={{
                input:{fontWeight:700, border:"none", borderRadius:"4px"},
                width: {lg:"800px", xs:"350px"},
                backgroundColor:"#fff",
                borderRadius:"40px"
              }}
            />
            <Button className='search-btn' 
                sx={{
                    backgroundColor:"#FF2625",
                    color:"#fff",
                    textTransform:"none",
                    width: {lg:"175px", xs:"80px"},
                    fontSize: {lg:"20px", xs:"14px"},
                    height:"56px",
                    position:"absolute",
                    right:0
                }}
                onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
        <Box sx={{position:"relative",width:"100%",p:"20px"}}>
            <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
    </Stack>
  )
}

export default SearchExercises