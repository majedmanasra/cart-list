import axios from "axios";

export function getCartItem() {
    return axios.get('https://some-random-api.ml/meme');
}
