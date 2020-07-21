import React, { useState, useContext } from "react";
import { View, Text, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Icon from "react-native-vector-icons/Feather";
import styles from "./styles";
import { Input, Button } from 'react-native-elements';
import { AuthContext } from "@constants/context";
import { useSignIn } from "@utils";

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false);

    const { signIn } = useContext(AuthContext)
    
    const isSignIn = () => {
        setLoading(true)
        useSignIn({
            email: email,
            password: password
        }).then(async res => {
            console.log(res.request.status);
            if(res.request.status === 200){
                setLoading(false);
                await AsyncStorage.setItem("token", res.data.message);
                signIn(res.data.message);
            }else{
                setError(true);
                setLoading(false);
                console.log(res.request.status);
            }
        }).catch(err => {
            console.log(err)
        }) 
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={styles.inputBox}>
                    <Text style={styles.boxTitle}>pHq Login</Text>
                    <Input
                        placeholder='Email'
                        returnKeyType="next"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        errorMessage={isError ? "Invalid email" : ""}
                        leftIcon={
                            <Icon
                                name='mail'
                                size={20}
                                color='#555'
                            />
                        }
                    />
                    <Input
                        placeholder='Password'
                        returnKeyType="done"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        errorMessage={isError ? "Invalid password" : ""}
                        secureTextEntry={true}
                        leftIcon={
                            <Icon
                                name='lock'
                                size={20}
                                color='#555'
                            />
                        }
                    />
                    <Button
                        title="SignIn"
                        buttonStyle={styles.btnSigIn}
                        loading={isLoading}
                        onPress={() => isSignIn()}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignIn;