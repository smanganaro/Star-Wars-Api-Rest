import axios from 'axios';
import 'dotenv/config.js';
import { getPeopleForPlanetError } from '../errors/get.people.for.planet.error.js';
import { getPlanetsServiceError } from '../errors/get.planets.service.error.js';
import { TimeoutError } from '../errors/timeout.error.js';
const url = process.env.SWAPI_DEV_URL;

export async function getPlanetService(){
  try{
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        reject(new TimeoutError());
      }, 100000)
      resolve(getPlanets());
    }).catch((err) => { throw err })
  }catch(err){
    throw new getPlanetsServiceError();
  }
}

//Get planet list
async function getPlanets(){
  const baseUrl = url + 'planets';
  let nextUrl = baseUrl;
  let planets = [];
  
  do {
    const response = await axios.get(nextUrl)
    const processedPlanets = await processPlanets(response.data.results);
    nextUrl = response.data.next;
    planets = planets.concat(processedPlanets);
  } while (nextUrl != null);

  return planets;
}

//Adds resident data
async function processPlanets(planets){
  const processedPlanets = []
  for (const planet of planets) {
    const processedPlanet = await Promise.all(planet.residents.map((endpoint) => axios.get(endpoint)))
    .then(residents => {
      const residentNames = residents.map((resident) => resident.data.name);
      planet.residents = residentNames;
      return planet;
    }).catch((err) => {throw new getPeopleForPlanetError()})
    processedPlanets.push(processedPlanet)
  }
  return processedPlanets
}