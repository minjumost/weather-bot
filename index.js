import dotenv from 'dotenv'
import { openAi } from './openai.js';
import { getWeatherInfo } from './weather.js';
import { webhook } from './webhook.js';
dotenv.config();



const weatherInfo = await getWeatherInfo();
const weatherCommnet = await openAi(weatherInfo);
await webhook(weatherCommnet);
openAi();
