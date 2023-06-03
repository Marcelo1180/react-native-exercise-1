import React from 'react';
import { Text, Button } from 'react-native';


export default function SettingsScreen({ navigation }) {
    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    }

    return (
        <>
            <Text>Bienvenido a los settings!</Text>
            <Button onPress={()=> goToPage('Home')} title="to Home" />
        </>
    );
}
