import React from 'react'
import { FlatList, TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'

import { Icon } from 'react-native-elements'
import Toast from 'react-native-toast-message';

const data = [
    {
        id: '123',
        title: 'Viaje',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen'
    },
    {
        id: '456',
        title: 'Comida',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen'
    },
    {
        id: '789',
        title: 'Transito',
        image: 'https://links.papareact.com/28w',
        screen: 'ViewScreen'
    }
]

const NavOptions = () => {

    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    const showToast = () => {
        Toast.show({
            type: 'error',
            text1: 'Introduce una dirección',
            position: 'top',
            topOffset: 40
        });
    }

    return (
        <View>
            <FlatList 
                data={data}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        onPress={() => {
                            !origin ? showToast() : navigation.navigate(item.screen)
                        }}
                        style={[tw`p-2 m-2 w-25`,{ backgroundColor: '#FAF9F9', borderRadius: 10,}]}>
                        <View style={{alignItems: 'center'}}>
                            <Image 
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                source={{ uri: item.image }}
                            />
                            <Text style={[tw`mt-1`, { textAlign: 'center' }]}>{item.title}</Text>
                            {/*<Icon 
                                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                                name='arrowright'
                                color='white'
                                type='antdesign'
                            />*/}
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default NavOptions
