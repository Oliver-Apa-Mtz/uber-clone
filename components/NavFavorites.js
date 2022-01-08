import React from 'react'
import { FlatList, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import tw from 'twrnc'
import { Icon } from 'react-native-elements'

const data = [
    {
        id: '123',
        icon: 'home',
        location: 'Home',
        destination: 'Mar Caribe 260, Country Club, 44610 Guadalajara, Jal.'
    },
    {
        id: '456',
        icon: 'briefcase',
        location: 'WeWork',
        destination: 'Av Adolfo López Mateos Nte 95, Italia Providencia, 44648 Guadalajara, Jal.'
    },
]

const NavFavorites = () => {
    return (
        <FlatList
            style={tw`mt-4`}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item: { location, destination, icon }}) => (
                <TouchableOpacity style={tw`flex-row items-center p-4`}>
                    <Icon
                        style={[tw`mr-4 rounded-full p-3`, {backgroundColor: '#FAF9F9'}]}
                        name={icon}
                        type='ionicon'
                        color='black'
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-500 pr-8`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavorites

const styles = StyleSheet.create({})
