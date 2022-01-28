import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'

import { setDestination } from '../slices/navSlice'

import NavFavorites from '../components/NavFavorites'

const NavigateCard = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`p-5 pb-0 text-center text-xl`}>Buenas tardes, Oliver</Text>
            <View style={tw`p-5 pt-0`}>
                <GooglePlacesAutocomplete
                    styles={{
                        container: {
                            flex: 0,
                            marginTop: 20
                        },
                        textInput: {
                            fontSize: 18,
                            backgroundColor: '#FAF9F9'
                        },
                    }}
                    onPress={(data, details = null) => {
                        dispatch(setDestination({
                            location: details.geometry.location,
                            description: data.description
                        }))
                        navigation.navigate('RideOptionsCard')
                    }}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en'
                    }}
                    placeholder="¿A donde viajas?"
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />
                <NavFavorites/>
            </View>
            <View style={tw`flex-row bg-white justify-evenly px-10`}>
                <TouchableOpacity onPress={() => navigation.navigate('RideOptionsCard')} style={tw`flex flex-row bg-black justify-center w-18 px-4 py-3 rounded-full`}>
                    <Icon name='car' type='font-awesome' color='white' size={16} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={[tw`flex flex-row justify-center w-18 px-4 py-3 rounded-full`, {backgroundColor: '#FAF9F9'}]}>
                    <Icon name='home' type='font-awesome' color='black' size={16} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('EatsScreen')} style={[tw`flex flex-row justify-center w-18 px-4 py-3 rounded-full`, {backgroundColor: '#FAF9F9'}]}>
                    <Icon name='fast-food-outline' type='ionicon' color='black' size={16} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({})
