import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight,StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },

]


const ZipItem =  ({ place, code, navigation }) => (
   
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
    
        <View>
        <View style={styles.box2}></View>
           <Text style={styles.big}>{place}</Text>
           <Text style={styles.small}>{code}</Text>
           <View style={styles.box2}></View>
        </View>
    </TouchableHighlight>
    
)


const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View> 
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );

}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    size: {
        width: '100%',
    },
    box: {
        backgroundColor: '#000',
        width: '100%',
        height: '40%',
        opacity: 0.5,
        paddingTop: 150,
        alignItems: 'center', 



    },
    big: {
        fontSize: 30,
        color: 'black',
        flexDirection: 'column',
        

    },
    small: {
        fontSize: 30,
        color: 'black',
        flexDirection: 'column',
        paddingLeft: 300,
        
    },
    box2: {
        backgroundColor: 'orange',
        width: '100%',
        height: '1%',
        opacity: 0.5,
        paddingTop: 10,
        alignItems: 'center', 



    },
    
});