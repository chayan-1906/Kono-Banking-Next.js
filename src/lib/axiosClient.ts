import axios from 'axios';
import {BASE_URL} from "@/lib/config";

export const axiosClient = axios.create({
    baseURL: BASE_URL,
});
