import React from 'react'
import {Typography, Stack, Button, Box} from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";


const Detail = ({exerciseDetail}) => {

  const {bodyPart, gifUrl, equipment, instructions, name, target, secondaryMuscles} = exerciseDetail;
  console.log(exerciseDetail);

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{flexDirection:{lg:"row"}, p:"20px", alignItems:"center"}}>
          <img src={gifUrl} alt={name} loading='lazy' className='detail-image'/>
          <Stack sx={{gap:{lg:"35px", xs:"20px"}}}>
              <Typography sx={{ fontSize: { lg: '48px', xs: '28px' } }} fontWeight={600} textTransform="capitalize">
                {name}
              </Typography>
              <Typography sx={{ fontSize: { lg: '20px', xs: '16px' } }} color="#4F4C4C">
                Exercises keep you strong.{' '}
                <span style={{ textTransform: 'capitalize' }}>{name}</span> is one
                of the best <br /> exercises to target your {target}. It will help you improve your{' '}
                <br /> mood and gain energy.
              </Typography>
              <Stack direction="row" justifyContent="space-between" gap="30px">
                 {extraDetail?.map((item) => (
                      <Stack key={item.name} direction="row" gap="10px" alignItems="center">
                        <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '50px', height: '50px' }}>
                          <img src={item.icon} alt={bodyPart} style={{ width: '30px', height: '30px' }} />
                        </Button>
                        <Typography textTransform="capitalize" sx={{ fontSize: { lg: '25px', xs: '18px' } }}>
                          {item.name}
                        </Typography>
                      </Stack>
                  ))}
              </Stack>
              <Box> 
                  <Typography fontSize="24px" fontWeight="500">Instructions</Typography>
                  {instructions?.map((item) => (
                          <Typography fontSize="16px" lineHeight="24px"> • {item}</Typography>
                  ))}
              </Box>
          </Stack>
    </Stack>
  )
}

export default Detail