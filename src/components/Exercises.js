import React from 'react'
import { useEffect,useState } from 'react'
import {Pagination} from '@mui/material';
import { Box ,Stack,Typography } from '@mui/material';
import { exercisesOptions,fetchData } from '../utils/fetchData';
import Exercisecard from './Exercisecard';
const Exercises = ({ exercises ,bodypart ,setExercises}) => {

  const[currentpage,setcurrentpage]=useState(1);
  const exerciseperpage=9;
  const indexOfLastExercise=currentpage*exerciseperpage
  const indexOfFFirst=indexOfLastExercise-exerciseperpage;
  const currExercise=exercises.slice(indexOfFFirst,indexOfLastExercise);
  const paginate=(e,value)=>{
    setcurrentpage(value);
    window.scrollTo({top:1800,behavior:'smooth'})
  }
  useEffect(() => {
    const fetchExerciseData=async()=>{
      let exerciseData=[];
      if(bodypart==='all'){
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
        exercisesOptions);
      }else{
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`
        ,exercisesOptions);
      }
      setExercises(exerciseData);
    }

    fetchExerciseData();
  }, [bodypart])
  

  return (
    <Box id="exercises"
    sx={{
      mt:{lg:'110px'}}}
      mt="50px"
      p="20px">
      <Typography variant="h3" mb="45px">
      Showing Results
      </Typography>
      <Stack direction="row"
      sx={{gap:{lg:'110px',xs:'50px'}}}
      flexWrap="wrap" justifyContent="center">
      {currExercise.map((exercise,index)=>(
        <Exercisecard key={index} exercise={exercise}/>
      ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
          {exercises.length>9 && (
            <Pagination 
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exerciseperpage)}
            page={currentpage}
            onChange={paginate}
            size="large"
            />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises