import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { Icon } from 'react-native-elements'

const TabsEats = ({cityHandler}) => {

    const dispatch = useDispatch()

    return (
        <SafeAreaView style={tw`bg-white flex-1 bg-white overflow-visible`}>
            <Text style={tw`p-1 pb-0 text-center text-xl`}>Buenas tardes, Oliver</Text>
            <View style={tw`p-5 pt-0 z-5 bg-white`}>
                <GooglePlacesAutocomplete
                    styles={{
                        container: {
                            flex: 0,
                            marginTop: 20,
                        },
                        textInput: {
                            fontSize: 18,
                            backgroundColor: '#FAF9F9'
                        },
                    }}
                    onPress={(data, details = null) => {
                        const city = data.description.split(',')[0]
                        cityHandler(city)
                    }}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en'
                    }}
                    placeholder="¿Ubicación de Restaurantes?"
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />
            </View>
            <View style={tw`flex-row bg-white justify-evenly pb-4 z-0`}>
                <TouchableOpacity style={[tw`flex flex-row justify-between w-27 px-3 py-3 rounded-full shadow`, {backgroundColor: '#000'}]}>
                    <Icon name='fast-food-outline' type='ionicon' color='white' size={16} />
                    <Text style={tw`text-center text-white`}>Paquetes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[tw`flex flex-row justify-between w-25 px-3 py-3 rounded-full shadow`, {backgroundColor: '#FFF'}]}>
                    <Icon name='beer-outline' type='ionicon' color='black' size={16} />
                    <Text style={tw`text-center`}>Bebidas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[tw`flex flex-row justify-between w-34 px-3 py-3 rounded-full shadow`, {backgroundColor: '#FFF'}]}>
                    <Icon name='pizza-outline' type='ionicon' color='black' size={16} />
                    <Text style={tw`text-center`}>Comida rapida</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default TabsEats
