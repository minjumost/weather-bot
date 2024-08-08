import dotenv from "dotenv";
import { getWeatherInfo } from "./src/controller/weatherController.js";

// 환경변수를 사용하도록 변경
dotenv.config();

const morningWeather = [
  await getWeatherInfo(6),
  await getWeatherInfo(7),
  await getWeatherInfo(8),
];
const lunchTimeWeather = [
  await getWeatherInfo(11),
  await getWeatherInfo(12),
  await getWeatherInfo(13),
];
const eveningWeather = [
  await getWeatherInfo(18),
  await getWeatherInfo(19),
  await getWeatherInfo(20),
];
const nightWeather = [
  await getWeatherInfo(21),
  await getWeatherInfo(22),
  await getWeatherInfo(23),
];

function processWeatherData(data) {
  const skyDescription = {
    1: "맑음",
    3: "구름많음",
    4: "흐림",
  };

  // 강수 형태 한글 변환
  const ptyDescription = {
    0: "비안옴",
    1: "비옴",
    2: "눈/비",
    3: "눈",
  };

  let tmpSum = 0;
  let wsdSum = 0;
  let skyMax = -Infinity;
  let ptyMax = -Infinity;
  let popMax = -Infinity;
  let pcpMax = "0.0mm";
  let rehMax = -Infinity;
  let snoMax = "적설없음";
  let count = data.length;

  data.forEach((item) => {
    tmpSum += parseFloat(item.TMP);
    wsdSum += parseFloat(item.WSD);
    skyMax = Math.max(skyMax, parseInt(item.SKY));
    ptyMax = Math.max(ptyMax, parseInt(item.PTY));
    popMax = Math.max(popMax, parseInt(item.POP));
    rehMax = Math.max(rehMax, parseInt(item.REH));

    // 강수량 (PCP)와 적설량 (SNO) 처리
    if (item.PCP !== "강수없음") {
      let pcpValue = parseFloat(item.PCP.replace("mm", ""));
      let pcpMaxValue = parseFloat(pcpMax.replace("mm", ""));
      if (pcpValue > pcpMaxValue) {
        pcpMax = `${pcpValue}mm`;
      }
    }

    if (item.SNO !== "적설없음") {
      let snoValue = parseFloat(item.SNO.replace("cm", ""));
      let snoMaxValue =
        snoMax === "적설없음" ? 0 : parseFloat(snoMax.replace("cm", ""));
      if (snoValue > snoMaxValue) {
        snoMax = `${snoValue}cm`;
      }
    }
  });

  return {
    날짜: data[0].DATE,
    "평균 기온": (tmpSum / count).toFixed(2),
    "평균 풍속": (wsdSum / count).toFixed(2),
    "하늘 상태": skyDescription[skyMax] || "알 수 없음",
    "강수 형태": ptyDescription[ptyMax] || "알 수 없음",
    "강수 확률": popMax + "%",
    강수량: pcpMax,
    습도: rehMax + "%",
    적설량: snoMax,
  };
}

const morning = processWeatherData(morningWeather);
const lunchTime = processWeatherData(lunchTimeWeather);
const evening = processWeatherData(eveningWeather);

console.log(evening);
