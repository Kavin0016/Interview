import { FRUITS } from "./fruits";

export const getSuggestions = (keyword = "") => {
    let result = FRUITS.filter((fruit) => fruit.substring(0, keyword.length).toLowerCase() == keyword.toLowerCase());
    return new Promise((res) => res(result));
}