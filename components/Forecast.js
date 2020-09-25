import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View >
            <Text style={styles.big}>{props.main}</Text>
            <Text>{props.description}</Text>
            <View>
                <Text style={styles.big}>
                    {props.temp}
                    <Text style={styles. midium}> °C</Text>
                </Text>
            </View>
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
        color: 'white',
    },
    midium: {
        fontSize: 20,
        color: 'white',
    }
});
