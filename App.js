/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import RootNavigator from "@navigations";
import { AuthContext } from "@constants/context";
import AsyncStorage from "@react-native-community/async-storage";

const App = () => {
  const [userToken, setUserToken] = React.useState(null);

  useEffect(() => {
    const getUserToken = async () => {
      let token = await AsyncStorage.getItem("token");
      if(token !== null){
        setUserToken(token)
      }
    }
    getUserToken();
  }, [])

  const authContext = React.useMemo(() => {
    return {
      signIn: async (token) => {
        setUserToken(token)
      },
      signOut: () => {
        setUserToken(null)
      }
    }
  })

  return (
    <AuthContext.Provider value={authContext}>
      <RootNavigator userToken={userToken} />
    </AuthContext.Provider>
  );
};

export default App;