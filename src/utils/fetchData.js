

export const exercisesOptions ={
    method: 'GET',
    headers: {
        'X-RapidAPI-Key':'df98eacd95msh45fc5b7e22658a8p198c67jsn6fbd4968c62a',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData=async (url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json();

    return data;
}