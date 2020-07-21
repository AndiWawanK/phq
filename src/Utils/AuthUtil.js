import { login } from "@constants";
import Axios from "axios";

export const useSignIn = ( data ) => {
    return Axios.post(login, data, null)
    .then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}