import axios from "axios";

export async function webhook(text){
    const url = `https://meeting.ssafy.com/hooks/${process.env.WEB_HOOK_CHANNEL}`;
    await axios.post(url, { text });
}
