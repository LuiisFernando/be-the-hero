import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import background from '../../assets/splash.png';

export default function Splash() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Incidents');
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={background} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    }
});