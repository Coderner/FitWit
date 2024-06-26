import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Stack, Typography} from '@mui/material'

const ExerciseCard = ({exercise}) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className='exercise-card'>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
        <Stack direction="row">
            <Button sx={{ml:"21px", color:"#fff", backgroundColor:"#ffa9a9", fontSize:"14px", borderRadius:"21px"}}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ml:"21px", color:"#fff", backgroundColor:"#fcc757", fontSize:"14px", borderRadius:"21px"}}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography ml="21px" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="24px">
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard