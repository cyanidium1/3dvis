import axios from "axios";

export const sendMessage = (message) => {
    const TOKEN = "7387149339:AAFfQcF4uzsmDVRXiZH99ErPyGzjUwpkwSM";
    const CHAT_ID = "-1002164077943";
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    axios
        .post(URL_API, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: message,
        })
        .catch((err) => { console.log(err) });
};