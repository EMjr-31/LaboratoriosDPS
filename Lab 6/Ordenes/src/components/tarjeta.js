import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ReservationCard = ({ id, nombre, fecha, hora, personas, seccion, onDelete }) => {
  const handleDeleteItem = () => {
    onDelete(id);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{nombre}</Text>
      <Text style={styles.date}>{fecha} - {hora}</Text>
      <Text style={styles.info}>cantidad: {personas}</Text>
      <Text style={styles.info}>Area: {seccion}</Text>
      <Button title="Eliminar" color="red" onPress={handleDeleteItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    margin: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    marginBottom: 8,
  },
  info: {
    fontSize: 14,
    color: '#555',
  },
});

export default ReservationCard;
