import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import ReservaForm from './src/components/formulario';
import ReservationCard from './src/components/tarjeta';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [reservations, setReservations] = useState([]);

  // Función para obtener las reservaciones desde AsyncStorage
  const obtenerReservaciones = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const values = await AsyncStorage.multiGet(keys);
      const reservas = values.map((value) => JSON.parse(value[1]));
      setReservations(reservas);
    } catch (error) {
      console.error('Error al obtener las reservaciones:', error);
    }
  };

  // Llama a obtenerReservaciones cuando se monta el componente
  useEffect(() => {
    obtenerReservaciones();
  }, []);

  const mostrarForm = () => {
    setMostrarFormulario(true);
  };

  const ocultarForm = () => {
    setMostrarFormulario(false);
    obtenerReservaciones(); // Actualiza la lista después de ocultar el formulario
  };

  // Función para eliminar una reserva por su ID
  const eliminarReserva = async (id) => {
    try {
      // Obtener todas las reservaciones actuales
      const reservasActuales = [...reservations];

      // Encontrar el índice de la reserva que coincida con el ID
      const indiceReserva = reservasActuales.findIndex((reserva) => reserva.id === id);

      // Si se encuentra la reserva, eliminarla
      if (indiceReserva !== -1) {
        reservasActuales.splice(indiceReserva, 1);

        // Actualizar el estado y AsyncStorage
        setReservations(reservasActuales);
        await AsyncStorage.removeItem(id);
      }
    } catch (error) {
      console.error('Error al eliminar la reserva:', error);
    }
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {!mostrarFormulario ? (
          <>
            <Text style={styles.titulo}>Agregar Reservaciones</Text>
            <Button title="Reservar" onPress={mostrarForm} />
          </>
        ) : (
          <ReservaForm onReservaGuardada={ocultarForm} />
        )}

        <Text style={styles.titulo}>Reservaciones</Text>
        {reservations.map((reservation) => (
          <ReservationCard
            key={reservation.id}
            onDelete={() => eliminarReserva(reservation.id)} // Pasar la función de eliminación
            {...reservation}
          />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    width: '90%',
    marginTop: 30,
    marginLeft: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
});
