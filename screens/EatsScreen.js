import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import tw from 'twrnc'
import { YELP_APIKEY } from '@env'

import TabsEats from '../components/TabsEats'
import RestaurantItem, { localRestaurants } from '../components/RestaurantItem'
import NavigateCardEats from '../components/NavigateCardEats'

const EatsScreen = () => {

    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("Guadalajara");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_APIKEY}`,
            },
        };
        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) =>
            setRestaurantData(
                json.businesses
            )
        );
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city]);
    
    return (
        <View style={[tw`h-full bg-white`]}>
            <View style={[tw`z-10 overflow-visible`,{height: 220}]}>
                <TabsEats cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={[tw`z-0`,{height: '63%'}]}>
                <RestaurantItem restaurantData={restaurantData} />
            </ScrollView>
            <View>
                <NavigateCardEats />
            </View>
        </View>
    )
}

export default EatsScreen

const styles = StyleSheet.create({})
