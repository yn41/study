import axios from 'axios';

export function getAPOD(date){
    return axios.get('https://api.nasa.gov/planetary/apod?api_key=0UWaUkE6mXVAklUTt1WvVVSq3i6LOdrYfKh4Ukmq&date='+date);
};