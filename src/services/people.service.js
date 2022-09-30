import axios from 'axios';
import 'dotenv/config.js';
import { getPeopleServiceError } from '../errors/get.people.service.error.js';
import { TimeoutError } from '../errors/timeout.error.js';
import { SORT_OPTIONS } from '../models/sortOptions.js';
import { compareHeight, compareMass, compareNames } from '../utils/sortingFunctions.js';
const url = process.env.SWAPI_DEV_URL;

export async function getPeopleService(sortBy){
  try{
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        reject(new TimeoutError())
      }, 100000)
      resolve(getPeople(sortBy))
    }).catch((err) => { throw err })
  }catch(err){
    throw new getPeopleServiceError();
  }
}

//Get people list
async function getPeople(sortBy){
  const baseUrl = url + 'people';
  let nextUrl = baseUrl;
  let people = [];
  
  do {
    const response = await axios.get(nextUrl)
    nextUrl = response.data.next;
    people = people.concat(response.data.results);
  } while (nextUrl != null);
  
  if (sortBy) people.sort(getSortingMethod(sortBy))
  return people;
}

function getSortingMethod(sortBy){
  const sortingMethods = {
    [SORT_OPTIONS.NAME]: compareNames,
    [SORT_OPTIONS.HEIGHT]: compareHeight,
    [SORT_OPTIONS.MASS]: compareMass,
  };
  return sortingMethods[sortBy];
}