import axios from 'axios';
import {BASE_URL} from "@/lib/config";
import {localStorageKeys} from "@/lib/constants";
import {fetchFromLocalStorage} from "@/lib/utils";

export const axiosClient = axios.create({
    baseURL: BASE_URL,
});

export const constructApiHeader = () => {
    return {
        'Authorization': `Bearer ${fetchFromLocalStorage(localStorageKeys.token)}`,
    };
}
