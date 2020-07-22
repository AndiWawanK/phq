import { list_config_uri } from "@constants";
import AsyncStorage from "@react-native-community/async-storage";
import Axios from "axios";

export const getConfig = async () => {
    let token = await AsyncStorage.getItem("token");
    return Axios.get(list_config_uri, {
        headers: {
            'Authorization': 'Bearer' + token
        }
    }).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}

export const createConfig = async (data) => {
    let token = await AsyncStorage.getItem("token");
    return Axios.post(list_config_uri, data, {
        headers: {
            'Authorization': 'Bearer' + token
        }
    }).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}

export const updateConfig = async (data, configId) => {
    let token = await AsyncStorage.getItem("token");
    return Axios.put(list_config_uri + '/' + configId, data, {
        headers: {
            'Authorization': 'Bearer' + token
        }
    }).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}

export const deleteConfig = async (configId) => {
    let token = await AsyncStorage.getItem("token");
    return Axios.delete(list_config_uri + '/' + configId, {
        headers: {
            'Authorization': 'Bearer' + token
        }
    }).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}