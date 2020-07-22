import React, { useState, useEffect } from "react";
import { SafeAreaView, TouchableOpacity, FlatList, RefreshControl, Text, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Header, Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import { getConfig, createConfig, updateConfig, deleteConfig } from "@utils";
import { ConfigCard } from "@components";
import Modal from 'react-native-modal';
import styles from "./styles";

const Config = () => {
    const [config, setConfig] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [modalCreate, setModalCreate] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    const [isLoading, setLoading] = useState(false);
    const [confId, setConfId] = useState('');
    const [confName, setConfName] = useState('')
    const [confNote, setConfNote] = useState('')
    const [confPhMin, setConfPhMin] = useState('')
    const [confPhMax, setConfPhMax] = useState('')

    useEffect(() => {
        const getConfigFromStorage = async () => {
            const configFromStorage = await AsyncStorage.getItem("config");
            if(configFromStorage === null){
                useRequestConfig();
                console.log('request new config')
            }else{
                if(config.length <= 0){
                    console.log('set config from storage')
                    setConfig(JSON.parse(configFromStorage))
                }
            }
        }
        getConfigFromStorage()
    }, [])

    const useRequestConfig = () => {
        getConfig().then( async res => {
            console.log(res.request.status)
            if(res.request.status === 200){
                setRefresh(false)
                setConfig(res.data.message.data)
                await AsyncStorage.setItem("config", JSON.stringify(res.data.message.data))
                console.log(res.data.message.data)
            }else{
                alert(res.request.status)
            }
        }).catch(err => {
            alert(err)
        })
    }

    const handleRefresh = () => {
        setRefresh(true)
        setTimeout(() => {
            useRequestConfig()
        }, 1000)
    }

    const useCreateConfig = () => {
        setLoading(true)
        createConfig({
            conf_name: confName,
            conf_note: confNote,
            conf_ph_min: confPhMin,
            conf_ph_max: confPhMax
        }).then(res => {
            console.log(res.request)
            if(res.request.status === 200){
                setTimeout(() => {
                    setLoading(false)
                    setModalCreate(false)
                }, 1000)
                useRequestConfig()
            }else{
                alert(JSON.stringify(res.response.data.errors))
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const useUpdateConfig = (configId) => {
        setLoading(true)
        updateConfig({
            conf_name: confName,
            conf_note: confNote,
            conf_ph_min: confPhMin,
            conf_ph_max: confPhMax
        },configId).then(res => {
            if(res.request.status === 200){
                setTimeout(() => {
                    setLoading(false)
                    setModalUpdate(false)
                }, 1000)
                useRequestConfig()
            }else{
                alert(JSON.stringify(res.response.data.errors))
            }
        }).catch(err => {
            alert(err)
        })
    }

    const useDeleteConfig = (configId) => {
        setLoading(true)
        deleteConfig(configId).then(res => {
            if(res.request.status === 200){
                setTimeout(() => {
                    setLoading(false)
                    setModalDelete(false)
                }, 1000)
                useRequestConfig()
            }else{
                alert(JSON.stringify(res.request.status));
            }
        }).catch(err => {
            alert(err)
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header
                centerComponent={{
                    text: 'Config Management',
                    style: {
                        color: '#fff',
                        fontSize: 18
                    }
                }}
                containerStyle={styles.headerContainer}
            />
            <TouchableOpacity style={styles.fabButton} onPress={() => setModalCreate(true)}>
                <Icon
                    name="plus"
                    size={24}
                    color="#FFF"
                />
            </TouchableOpacity>
            <FlatList
                data={config}
                keyExtractor={( item, index ) => index.toString()}
                renderItem={({ item, index }) => (
                    <ConfigCard
                        title={item.conf_name}
                        note={item.conf_note}
                        phMin={item.conf_ph_min}
                        phMax={item.conf_ph_max}
                        onEdit={() => {
                            setConfId(item.id)
                            setConfName(item.conf_name)
                            setConfNote(item.conf_note)
                            setConfPhMin(item.conf_ph_min)
                            setConfPhMax(item.conf_ph_max)
                            setModalUpdate(true)
                        }}
                        onDelete={() => {
                            setConfId(item.id)
                            setConfName(item.conf_name)
                            setModalDelete(true)
                        }}
                    />
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refresh}
                        onRefresh={handleRefresh}
                    />
                }
            />
            
            <Modal isVisible={modalCreate} animationIn="zoomIn" animationOut="slideOutDown" animationOutTiming={500}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContentContainer}>
                        <Text style={styles.modalTitle}>Add New Config</Text>
                        <Input placeholder='Config Name' value={confName} onChangeText={(text) => setConfName(text)}/>
                        <Input placeholder='Note' value={confNote} onChangeText={(text) => setConfNote(text)}/>
                        <Input placeholder='Config Ph Min' value={confPhMin} onChangeText={(text) => setConfPhMin(text)}/>
                        <Input placeholder='Config Ph Max' value={confPhMax} onChangeText={(text) => setConfPhMax(text)}/>
                        
                        <Button title="Save" loading={isLoading} buttonStyle={styles.btnModal} onPress={() => useCreateConfig()} />
                        <Button title="Cancel" type="outline" buttonStyle={styles.btnModalCancel} onPress={() => setModalCreate(false)} />
                    </View>
                </View>
            </Modal>

            <Modal isVisible={modalUpdate} animationIn="zoomIn" animationOut="slideOutDown" animationOutTiming={500}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContentContainer}>
                        <Text style={styles.modalTitle}>Update Config {confId}</Text>
                        <Input placeholder='Config Name' value={confName} onChangeText={(text) => setConfName(text)}/>
                        <Input placeholder='Note' value={confNote} onChangeText={(text) => setConfNote(text)}/>
                        <Input placeholder='Config Ph Min' value={confPhMin.toString()} onChangeText={(text) => setConfPhMin(text)}/>
                        <Input placeholder='Config Ph Max' value={confPhMax.toString()} onChangeText={(text) => setConfPhMax(text)}/>
                        
                        <Button title="Update" loading={isLoading} buttonStyle={styles.btnModal} onPress={() => useUpdateConfig(confId)} disabled={confId === '' ? true : false} />
                        <Button title="Cancel" type="outline" buttonStyle={styles.btnModalCancel} onPress={() => setModalUpdate(false)} />
                    </View>
                </View>
            </Modal>

            <Modal isVisible={modalDelete} animationIn="zoomIn" animationOut="slideOutDown" animationOutTiming={500}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContentContainer}>
                        <Text style={styles.modalTitle}>Delete Config "{confName}"</Text>
                        
                        <Button title="Delete" loading={isLoading} buttonStyle={styles.btnModal} onPress={() => useDeleteConfig(confId)} disabled={confId === '' ? true : false} />
                        <Button title="Cancel" type="outline" buttonStyle={styles.btnModalCancel} onPress={() => setModalDelete(false)} />
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    )
}

export default Config;