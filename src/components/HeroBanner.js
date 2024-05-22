import React from 'react'
import { Box, Button, Stack,Typography } from '@mui/material'
import HeroBannerImage from "../assets/images/banner.png"
import { Pix } from '@mui/icons-material'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:'130px', xs:'70px'},
        ml:{sm:'50px'},
        position:"relative",
        p:'10px 20px'
    }}>
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            FitWit
        </Typography>
        <Typography fontWeight="700" sx={{fontSize:{sm:'44px', xs:'40px'}, mb:"5px", mt:"5px"}}>
            Start Your Fitness Journey Here
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={2}>
            Check out most effective exercises
        </Typography>
        <Button variant='contained' color='error' href="#exercises">
            Explore Exercises
        </Button>
        <Typography 
          fontWeight={600} 
          color="#ff2625" 
          sx={{opacity:"0.1", display:{lg:"block", xs:"none"}}}
          fontSize="190px"
        >
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner