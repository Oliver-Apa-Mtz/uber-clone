import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { setDestination } from '../slices/navSlice'

const NavigateCard = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

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
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({})
