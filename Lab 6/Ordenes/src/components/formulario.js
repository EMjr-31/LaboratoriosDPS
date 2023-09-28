import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import shortid from 'shortid';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const ReservaForm = ({ onReservaGuardada }) => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [personas, setPersonas] = useState('');
  const [seccion, setSeccion] = useState('No fumadores');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const VerDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const OcultarDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    setFecha(date.toDateString());
    OcultarDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    setHora(time.toTimeString().split(' ')[0]);
    hideTimePicker();
  };

  const handleReservar = async () => {
    try {
      // Validación de campos requeridos
      if (!nombre || !fecha || !hora || !personas || !seccion) {
        console.error('Todos los campos son obligatorios');
        return;
      }

      const id = shortid.generate(); // Genera un identificador único con shortid
      const reservacion = {
        id,
        nombre,
        fecha,
        hora,
        personas,
        seccion,
      };

      // Guardar la reservación como un objeto JSON en AsyncStorage con una clave única
      await AsyncStorage.setItem(`Reservacion_${id}`, JSON.stringify(reservacion));
      console.log('Reservación guardada con éxito');

      // Llama a la función onReservaGuardada para ocultar el formulario y actualizar la lista de reservas
      onReservaGuardada();
    } catch (error) {
      console.error('Error al guardar la reservación:', error);
    }
  };

  const handleCancelar = () => {
    // Llama a la función onReservaGuardada para ocultar el formulario
    onReservaGuardada();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Datos de Reservación</Text>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />

      <Text style={styles.label}>Fecha de reserva:</Text>
      <Button title="Seleccionar fecha" onPress={VerDatePicker} />
      <Text style={styles.dateText}>{fecha}</Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={OcultarDatePicker}
      />

      <Text style={styles.label}>Hora de reserva:</Text>
      <Button title="Seleccionar hora" onPress={showTimePicker} />
      <Text style={styles.timeText}>{hora}</Text>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />

      <Text style={styles.label}>Cantidad de personas:</Text>
      <TextInput
        style={styles.input}
        value={personas}
        onChangeText={(text) => setPersonas(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Tipo de sección:</Text>
      <Picker
        selectedValue={seccion}
        style={styles.picker}
        onValueChange={(itemValue) => setSeccion(itemValue)}
      >
        <Picker.Item label="Fumadores" value="Fumadores" />
        <Picker.Item label="No fumadores" value="No fumadores" />
      </Picker>
      
      
      <Button title="Reservar" onPress={handleReservar} />
      <Button title="Cancelar" onPress={handleCancelar} color="red" style={styles.Button}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  titulo: {
    fontSize: 24, // Tamaño de fuente del título
    fontWeight: 'bold', // Negrita
    color: '#333', // Color del texto
    marginBottom: 16, // Espacio inferior para separar de otros elementos
    textAlign:'center'
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
  },
  dateText: {
    fontSize: 16,
    marginBottom: 16,
  },
  timeText: {
    fontSize: 16,
    marginBottom: 16,
  },
  Button:{
    marginTop:5,
  }
});

export default ReservaForm;