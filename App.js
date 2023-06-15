import React from 'react';
import { NavigationContainer }  from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerStyle: {backgroundColor: '#B65151'}, headerTitleStyle: {
            fontWeight: 'bold', color: '#fff'
          },}} name="Romeu & Julieta" component={Home} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

function App() {
  return <AppNavigator />;
};

export default App;