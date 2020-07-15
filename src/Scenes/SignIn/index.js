import React, { useState, useContext } from "react";
import { View, Text, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styles from "./styles";
import { Input, Button } from 'react-native-elements';
import { AuthContext } from "@constants/context";

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(false)

    const { signIn } = useContext(AuthContext)
    
    const isSignIn = () => {
        setLoading(true)
        signIn(email, password)
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={styles.inputBox}>
                    <Text style={styles.boxTitle}>pHq Login</Text>
                    <Input
                        placeholder='Email'
                        returnKeyType="next"
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
                        onPress={() => isSignIn()}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignIn;