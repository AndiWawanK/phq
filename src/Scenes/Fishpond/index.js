import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, FlatList, RefreshControl } from "react-native";
import { Header, Card, Button } from "react-native-elements";
import { FishpondCard } from "@components";
import styles from "./styles";
import { getFishpond, updateConfigFishpond } from "@utils";
import AsyncStorage from "@react-native-community/async-storage";
import Modal from 'react-native-modal';
import { Picker } from '@react-native-community/picker';

const Fishpond = () => {
    const [fishpond, setFishpond] = useState([]);
    const [config, setConfig] = useState([]);
    const [modalUpdate, setModalUpdate] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [selectedConfig, setSelectedConfig] = useState('')
    const [fishpondId, setFishpondId] = useState('');
    const [isConfigNull, setConfigNull] = useState(false);
    const [isRefresh, setRefresh] = useState(false);

    useEffect(() => {
        useRequestConfig();
        useRequestFishpond();
    }, [])

    const useRequestConfig = async () => {
        let getConfig = await AsyncStorage.getItem("config");
        if(getConfig === null){
            setConfigNull(true)
        }else{
            setConfig(JSON.parse(getConfig))
        }
    }

    const useRequestFishpond = () => {
        getFishpond().then(res => {
            console.log(res)
            if(res.request.status === 200){
                let results = []
                res.data.message.data.forEach((data) => {
                    console.log(data.device.device_key)
                    let res = {
                        fishpondId: data.id,
                        device_key: data.device.device_key,
                        fspnd_name: data.fspnd_name,
                        conf_name: data.config.conf_name,
                        fspnd_ph: data.fspnd_ph,
                        conf_ph_min: data.config.conf_ph_min,
                        conf_ph_max: data.config.conf_ph_max
                    }
                    results.push(res)
                })
                console.log(results)
                setFishpond(results)
            }else{
                alert(res.request.status)
            }
        }).catch(err => {
            alert(err)
        })
    }

    const useUpdateConfigFishpond = () => {
        setLoading(true);
        updateConfigFishpond(fishpondId, selectedConfig).then(res => {
            setTimeout(() => {
                setLoading(false)
                setModalUpdate(false)
                useRequestFishpond()
            })
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    const handleRefresh = () => {
        setRefresh(true);
        setTimeout(() => {
            useRequestFishpond()
            setRefresh(false)
        }, 500)
    }

    return(
        <SafeAreaView style={styles.container}>
            <Header
                centerComponent={{ 
                    text: 'Fishpond', 
                    style: { 
                        color: '#fff',
                        fontSize: 18
                    } 
                }}
                containerStyle={styles.appBarContainer}
            />
            <FlatList
                data={fishpond}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <FishpondCard
                        deviceKey={item.device_key}
                        fsp_name={item.fspnd_name}
                        conf_name={item.conf_name}
                        phMin={item.conf_ph_min}
                        phMax={item.conf_ph_max}
                        curPh={item.fspnd_ph}
                        onPress={() => {
                            setFishpondId(item.fishpondId)
                            useRequestConfig()
                            setModalUpdate(true)
                        }}
                    />
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefresh}
                        onRefresh={handleRefresh}
                    />
                }
            />
            {/* <Button 
                containerStyle={{marginTop: 20}}
                title="request" 
                onPress={() => useRequestFishpond()}/> */}

            <Modal isVisible={modalUpdate} animationIn="zoomIn" animationOut="slideOutDown" animationOutTiming={500}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContentContainer}>
                        <Text style={styles.modalTitle}>Update Config</Text>
                        <View style={{borderWidth: 0.5, borderColor: '#20AAAD', marginBottom: "10%", borderRadius: 5}}>
                            <Picker
                                selectedValue={selectedConfig}
                                style={{height: 50, width: "100%"}}
                                onValueChange={(itemValue, itemIndex) => setSelectedConfig(itemValue)}>
                                <Picker.Item label="Pilih Config . . ." value="" />
                                {
                                    config.map((data, index) => (
                                        <Picker.Item label={data.conf_name} value={data.id} key={index} />
                                    ))
                                }
                            </Picker>
                        </View>
                        <Button title="Update" loading={isLoading} buttonStyle={styles.btnModal} onPress={() => useUpdateConfigFishpond()} disabled={selectedConfig === '' ? true : false} disabledTitleStyle={{color: '#FFF'}}/>
                        <Button title="Cancel" type="outline" buttonStyle={styles.btnModalCancel} onPress={() => setModalUpdate(false)} />
                    </View>
                </View>
            </Modal> 

        </SafeAreaView>
    )
}

export default Fishpond;