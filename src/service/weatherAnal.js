// 기온 데이터
export const temperatureRanges = {
  차가움: (value) => value <= -10,
  서늘함: (value) => value > -10 && value <= 10,
  온화함: (value) => value > 10 && value <= 25,
  더움: (value) => value > 25 && value <= 35,
  "매우 더움": (value) => value > 35,
};

// 습도 데이터
export const humidityLevels = {
  매우건조: (value) => value < 20,
  건조: (value) => value >= 20 && value < 40,
  쾌적: (value) => value >= 40 && value < 60,
  습함: (value) => value >= 60 && value < 80,
  매우습함: (value) => value >= 80,
};

// 풍속 데이터
export const windSpeedLevels = {
  약: (value) => value < 4,
  중: (value) => value >= 4 && value < 9,
  강: (value) => value >= 9 && value < 14,
  매우강: (value) => value >= 14,
};

// 하늘 상태 데이터
export const skyConditions = {
  1: "맑음",
  3: "구름많음",
  4: "흐림",
};

// 강수 형태 데이터
export const precipitationTypes = {
  0: "없음",
  1: "비",
  2: "눈비",
  3: "눈",
  4: "소나기",
};

// 강수 확률 데이터
export const precipitationProbabilities = {
  "0-30": (value) => value < 30,
  "30-60": (value) => value >= 30 && value < 60,
  "60-90": (value) => value >= 60 && value < 90,
  "90+": (value) => value >= 90,
};

// 강수량 데이터
export const precipitationAmounts = {
  없음: (value) => value < 0.1,
  조금: (value) => value >= 0.1 && value < 1.0,
  보통: (value) => value >= 1.0 && value < 30,
  많이옴: (value) => value >= 30 && value < 50,
  폭우: (value) => value >= 50,
};

// 적설량 데이터
export const snowfallAmounts = {
  없음: (value) => value < 0.1,
  조금: (value) => value >= 0.1 && value < 1.0,
  보통: (value) => value >= 1.0 && value < 30,
  많이옴: (value) => value >= 30 && value < 50,
  폭설: (value) => value >= 50,
};
