import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { Icon } from 'react-native-elements'

export const localRestaurants = [
    
]

const RestaurantItem = ({...props}) => {
    return (
        <TouchableOpacity activeOpacity={1}>
            {props.restaurantData.map((item, index) => (
                <View style={tw`m-4 mb-2 bg-white rounded-2xl shadow`} key={index}>
                    <RestaurantImage image={item.image_url} />
                    <RestaurantInfo name={item.name} rating={item.rating} />
                </View>
            ))}
        </TouchableOpacity>
    )
}

export default RestaurantItem

const RestaurantImage = (props) => (
    <>
        <Image 
            source={{
                uri: props.image
            }}
            style={[tw`rounded-t-2xl`, { width: "100%", height: 200}]}
        />
        <TouchableOpacity style={{position: "absolute", right: 20, top: 20}}>
            <Icon name='heart' type='font-awesome' color='white' size={20} />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = (props) => (
    <View style={tw`p-4 flex-row justify-between`}>
        <View>
            <Text style={{fontWeight: 'bold'}}>{props.name}</Text>
            <Text style={{fontSize: 10}}>30 - 40 min</Text>
        </View>
        <View style={tw`flex flex-row justify-center items-center w-8 text-center rounded-full bg-gray-100`}>
            <Text style={[tw``, {fontSize: 10}]}>{props.rating}</Text>
        </View>
    </View>
)
