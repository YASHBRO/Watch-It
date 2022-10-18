import axios from "axios";
import { BASE_URL } from "../../constants/API";

export default async function GetAllRoomsApi() {
    try {
        const res = await axios.get(BASE_URL + "/get-all-rooms");
        return res;
    } catch (error) {
        console.error("yd", error);
    }
}
