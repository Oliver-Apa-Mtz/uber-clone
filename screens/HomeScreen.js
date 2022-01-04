import React from 'react'
import { StyleSheet, Text, Image, View, SafeAreaView } from 'react-native'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'

import { setDestination, setOrigin } from '../slices/navSlice'

import NavOptions from '../components/NavOptions'
import Toast from 'react-native-toast-message';

const HomeScreen = () => {

    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain'
                    }}
                    source={{
                        uri: 'https://links.papareact.com/gzs',
                    }}
                />
                <Toast/>
                <View>
                    <Text style={[tw`mt-5 mb-5 font-semibold`, {fontSize: 30}]}>
                        Buenas tardes, Oliver
                    </Text>
                </View>
                <NavOptions />
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
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))
                        dispatch(setDestination(null))
                    }}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en'
                    }}
                    placeholder="¿De donde viajas?"
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
