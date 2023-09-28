import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DeleteButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.7} // Efecto de "hover" para dispositivos móviles
    >
      <Text style={styles.text}>Eliminar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e0245e', // Color de fondo rojo
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 999, // Para que el botón sea redondo
  },
  text: {
    color: '#fff', // Color del texto en blanco
    fontWeight: 'bold',
  },
});

export default DeleteButton;
