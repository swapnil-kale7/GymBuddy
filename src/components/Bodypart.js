import React from 'react'
import {Stack} from '@mui/material';
import { Typography } from '@mui/material';
import Icon from '../assets/assets/icons/gym.png';
const Bodypart = ({item,setbodypart,bodypart}) => {
  return (
    <Stack
      type='button'
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={bodypart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
      onClick={() => {
        setbodypart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }}>

      <img src={Icon} alt="dumbell" style={{
        width:'40px',height:'40px'
      }}/> 
      <Typography fontSize="24px" fontWeight="bold"
      color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default Bodypart