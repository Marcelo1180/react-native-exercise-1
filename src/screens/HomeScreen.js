import React from 'react';
import { Text, Button } from 'react-native';


export default function HomeScreen({ navigation }) {
    const goToSettings = () => {
        navigation.navigate('Settings');
    }

    return (
        <>
            <Text>Bienvenido al home!</Text>
            <Button onPress={goToSettings} title="Hola" />
        </>
    );
}
