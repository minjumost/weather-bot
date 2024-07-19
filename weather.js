import axios from "axios";

export async function getWeatherInfo(){

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줍니다.
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}${month}${day}`;

    const baseUrl = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst';
    const serviceKey = process.env.SERVICE_KEY;
    const pageNo = 1;
    const numOfRows = 288;
    const dataType = 'JSON';
    const baseDate = formattedDate;

    const baseTime = '0500';
    const nx = 61;
    const ny = 125;

    // 전체 URL 생성
    const apiUrl = `${baseUrl}?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&dataType=${dataType}&base_date=${baseDate}&base_time=${baseTime}&nx=${nx}&ny=${ny}`;

    const res = await axios.get(apiUrl);
    
    return res.data.response.body.items.item;
}
