import axios from "axios";

export async function openAi(weatherData){
    const apiKey = process.env.OPEN_AI_API_KEY; // 여기에 OpenAI API 키를 입력하세요.
    const endpoint = 'https://api.openai.com/v1/chat/completions';

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };

    const role =
    `
    너는 지금부터 전문 기상캐스터의 역할을 하는거야.
    날씨의 정보를 받으면 해당 날씨의 정보를 가지고 최대한 정확하게 요약해줘.
    오늘 날씨에 적합한 이모지를 많이 사용해서 보기좋게 해줘.
    오늘의 날짜를 기입해줘.
    오전(6~12시) 오후(12~18시) 밤(18~00시)별로 각 요소의 평균을 계산해서 요약해줘.
    날씨에 따라 간단하게 옷차림도 추천해줘.
    그리고 체감온도도 계산해서 같이 보내줘.
    마지막으로 한줄요약해서 오늘의 날씨에 대한 코멘트를 남겨줘.
    글의 형태는 마크다운으로 보기 쉽게 해줘.
    `;

    const data = {
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: role },
            { role: "user", content: "날씨정보:\n" + JSON.stringify(weatherData) }
        ]
    };

    const res = await axios.post(endpoint, data, { headers })
    
    return res.data.choices[0].message.content;
}



