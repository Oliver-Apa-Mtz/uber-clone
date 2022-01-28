import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './store'

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'
import EatsScreen from './screens/EatsScreen'

export default function App() {

	const Stack = createNativeStackNavigator();

	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaProvider>
					<KeyboardAvoidingView 
						behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
						keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
						style={{ flex: 1, backgroundColor: 'white'}}>
						<Stack.Navigator>
							<Stack.Screen
								name="HomeScreen"
								component={HomeScreen}
								options={{
									headerShown: false,
								}}
							/>
							<Stack.Screen 
								name="MapScreen"
								component={MapScreen}
								options={{
									headerShown: false,
								}}
							/>
							<Stack.Screen 
								name="EatsScreen"
								component={EatsScreen}
								options={{
									headerShown: false,
								}}
							/>
						</Stack.Navigator>
					</KeyboardAvoidingView>
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
