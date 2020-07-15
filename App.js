/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import RootNavigator from "@navigations";
import { AuthContext } from "@constants/context";

const App = () => {
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: async (email, password) => {
        console.log(email, password)
        setUserToken('dummy-token')
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