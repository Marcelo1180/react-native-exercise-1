import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';


export default function Saludar({ nombre }) {
    return (
        <Text>Hola {nombre}</Text>
    );
}

Saludar.defaultProps = {
    nombre: 'Mundo'
}

Saludar.propTypes = {
    nombre: PropTypes.string.isRequired
}
