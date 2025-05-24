import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function storeItemInLocalStorage(key: any, value: string) {
    localStorage.setItem(key, value);
}

export function fetchFromLocalStorage(key: string) {
    return localStorage.getItem(key);
}

export function clearLocalStorage() {
    localStorage.clear();
}
