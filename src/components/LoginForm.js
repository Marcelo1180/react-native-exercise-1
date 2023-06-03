import React from 'react';
import { TextInput, Button } from 'react-native';


export default function LoginForm() {
    return (
        <>
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                textContentType="emailAddress"
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                textContentType="password"
            />
            <Button title="Sign In" />
        </>
    );
}
