import React,{useEffect,useState} from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material';
import { exercisesOptions, fetchData } from '../utils/fetchData';
import HorizontalScroll from './HorizontalScroll';

const SearchExercise = ({setExercises,
  bodypart,setBodyPart}) => {
  const [search, setsearch] = useState('')
  const [bodyParts,setBodyParts]=useState([]);
  useEffect(() => {
    const fetchExercise=async()=>{
      const bodypartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
      exercisesOptions) 
      setBodyParts(['all',...bodypartData]);
    }
    fetchExercise();
  }, [])
  
  const handlesearch=async()=>{
    if (search) {
      const exercisesData=await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exercisesOptions);
        console.log(exercisesData);
        const SearchedExercise=exercisesData.filter(
          (exercise)=>exercise.name.toLowerCase().includes(search)
            || exercise.target.toLowerCase().includes(search)
            || exercise.equipment.toLowerCase().includes(search)
            || exercise.bodyPart.toLowerCase().includes(search)
        );
        setsearch('');
        setExercises(SearchedExercise);
        }
  }
  return(
    <Stack
    alignItems="center" mt="37px"
    justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}}
        mb="50px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
        sx={{
          input:{
            fontWeight:'700',
            border:'none',
            borderRadius:'4px'},
            width:{lg:'800px',xs:'350px'},
            backgroundColor:'#fff',borderRadius:"40px"
        }}
          height="76px"
          value={search}
          onChange={(e)=>setsearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
          />
          <Button
          sx={{
            bgcolor:'#FF2625',
            color:'#fff',
            textTransform:'none',
            width:{lg:'175px',xs:'80px',
          fontSize:{lg:'20px',xs:'14px'},
        height:'56px',
      position:"absolute",
    right:'0'}
          }}
          onClick={handlesearch}>
          Search
          </Button>
      </Box>
      <Box sx={{position:'relative',width:'100%',p:'20px'}}>
          <HorizontalScroll data={bodyParts} 
          bodypart={bodypart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercise