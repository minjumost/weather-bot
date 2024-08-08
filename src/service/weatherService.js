import {
  temperatureRanges,
  humidityLevels,
  windSpeedLevels,
  skyConditions,
  precipitationTypes,
  precipitationProbabilities,
  precipitationAmounts,
  snowfallAmounts,
} from "./weatherData.js";

export function getDescription(value, levels) {
  return Object.keys(levels).find((key) => levels[key](value)) || "알 수 없음";
}

export function getTemperatureDescription(value) {
  return getDescription(value, temperatureRanges);
}

export function getHumidityDescription(value) {
  return getDescription(value, humidityLevels);
}

export function getWindSpeedDescription(value) {
  return getDescription(value, windSpeedLevels);
}

export function getSkyDescription(value) {
  return skyConditions[value] || "알 수 없음";
}

export function getPrecipitationTypeDescription(value) {
  return precipitationTypes[value] || "알 수 없음";
}

export function getPrecipitationProbabilityDescription(value) {
  return getDescription(value, precipitationProbabilities);
}

export function getPrecipitationAmountDescription(value) {
  return getDescription(value, precipitationAmounts);
}

export function getSnowfallAmountDescription(value) {
  return getDescription(value, snowfallAmounts);
}
