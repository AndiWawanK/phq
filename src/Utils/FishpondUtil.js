import { fishpond_uri } from "@constants";
import AsyncStorage from "@react-native-community/async-storage";
import Axios from "axios";

export const getFishpond = async () => {
    let token = await AsyncStorage.getItem("token");
    return Axios.get(fishpond_uri, {
        headers: {
            'Authorization': 'Bearer' + token
        }
    }).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}

export const updateConfigFishpond = async (fishpondId, configId) => {
    let token = await AsyncStorage.getItem("token");
    return Axios.put(fishpond_uri + '/' + fishpondId + '/' + configId, null, {
        headers: {
            'Authorization': 'Bearer' + token
        }
    }).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}