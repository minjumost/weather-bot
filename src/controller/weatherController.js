import axios from "axios";

export async function getWeatherInfo(time) {
  // 포함할 요소
  const properties = ["TMP", "REH", "WSD", "SKY", "PTY", "POP", "PCP", "SNO"];
  // 요청 url 구성
  process.env.TZ = "Asia/Seoul";
  const baseUrl =
    "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";
  const serviceKey = process.env.SERVICE_KEY;
  const pageNo = time - 5;
  const numOfRows = 12;
  const dataType = "JSON";
  const baseDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const baseTime = "0500";
  const nx = 61;
  const ny = 125;
  const apiUrl = `${baseUrl}?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&dataType=${dataType}&base_date=${baseDate}&base_time=${baseTime}&nx=${nx}&ny=${ny}`;

  try {
    // API 요청
    const res = await axios.get(apiUrl);
    const data = res.data.response.body.items.item;

    const result = {
      DATE: data[0].fcstDate,
      TIME: data[0].fcstTime,
    };

    data.forEach((element) => {
      if (properties.includes(element.category)) {
        result[element.category] = element.fcstValue;
      }
    });

    return result;
  } catch (error) {
    console.error("Error fetching weather info:", error);
    throw error; // 에러를 다시 던져서 호출자가 처리할 수 있게 합니다.
  }
}
