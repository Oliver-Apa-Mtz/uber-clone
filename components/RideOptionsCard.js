import React , { useState } from 'react'
import { FlatList, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'
import Toast from 'react-native-toast-message';

import { Icon } from 'react-native-elements'

const data = [
    {
        id: 'Uber-X-123',
        title: 'Uber X',
        multiplier: 1,
        image: 'https://links.papareact.com/3pn'
    },
    {
        id: 'Uber-XL-456',
        title: 'Uber XL',
        multiplier: 1.2,
        image: 'https://links.papareact.com/5w8'
    },
    {
        id: 'Uber-LUX-789',
        title: 'Uber LUX',
        multiplier: 1.75,
        image: 'https://links.papareact.com/7pf'
    }
]

const SURGE_CHARGE_RATE = 2.0

const RideOptionsCard = () => {

    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Tu Uber va en camino',
            position: 'top',
            topOffset: 40
        })
    }

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('NavigateCard')}
                    style={tw`absolute top-3 left-5 z-50 p-2 rounded-full bg-black`}>
                    <Icon name='chevron-left' color='white' type='fontawesome' />
                </TouchableOpacity>
                <Text style={tw`p-4 pb-0 z-0 text-center text-xl mb-4`}>Selecciona un viaje {travelTimeInformation?.distance?.text}</Text>
            </View>
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, title, multiplier, image }, item}) => (
                    <TouchableOpacity 
                        onPress={() => setSelected(item)}
                        style={tw`flex-row justify-between items-center px-5 ${id === selected?.id && 'bg-gray-100'}`}>
                        <Image 
                            style={{
                                width: 80,
                                height: 90,
                                resizeMode: 'contain'
                            }}
                            source={{ uri: image }}
                        />
                        <View style={tw}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>Tiempo estimado: {travelTimeInformation?.duration?.text}</Text>
                        </View>
                        <Text style={tw`text-lg`}>
                            ${new Intl.NumberFormat("es-MX").format(
                                travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier / 100
                            )}
                        </Text>
                    </TouchableOpacity>
                )}
            />
            <View>
                <TouchableOpacity
                    disabled={!selected}
                    onPress={() => {
                        showToast()
                    }}
                    style={tw`bg-black py-3 m-4 mt-4 rounded-full ${!selected && 'bg-gray-300'}`}>
                    <Text style={tw`text-center text-white text-xl`}>
                        Seleccionar {selected?.title}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
