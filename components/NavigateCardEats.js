import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'

const NavigateCardEats = () => {

    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <View style={tw`flex-row bg-white justify-evenly py-2 px-10`}>
                <TouchableOpacity onPress={() => navigation.navigate('MapScreen')} style={[tw`flex flex-row justify-center w-18 px-4 py-3 rounded-full`, {backgroundColor: '#FAF9F9'}]}>
                    <Icon name='car' type='font-awesome' color='black' size={16} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={[tw`flex flex-row justify-center w-18 px-4 py-3 rounded-full`, {backgroundColor: '#FAF9F9'}]}>
                    <Icon name='home' type='font-awesome' color='black' size={16} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('EatsScreen')} style={tw`flex flex-row bg-black justify-center w-18 px-4 py-3 rounded-full`}>
                    <Icon name='fast-food-outline' type='ionicon' color='white' size={16} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCardEats

const styles = StyleSheet.create({})
