import React, { useState , useEffect} from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Form = () => {
  const [nombre, setNombre] = useState('');
  const [salario, setSalario] = useState('');
  const [isss, setIsss] = useState(0);
  const [afp, setAfp] = useState(0);
  const [renta, setRenta] = useState(0);
  const [total, setTotal] = useState(0);
  const [mostrarResultados, setMostrarResultados] = useState(false); // Estado para controlar la visibilidad de los resultados

  useEffect(() => {
    if (!isNaN(parseFloat(salario))) {
      setIsss(parseFloat(salario) * 0.03);
      setAfp(parseFloat(salario) * 0.04);
      setRenta(parseFloat(salario) * 0.05);
    } else {
      setIsss(0);
      setAfp(0);
      setRenta(0);
    }
  }, [salario]);

  const calcular = () => {
    if (nombre.trim() === '') {
      alert('Por favor, ingresa el nombre');
    } else if (!isNaN(parseFloat(salario))) {
      setTotal(parseFloat(salario) - parseFloat(isss) - parseFloat(afp) - parseFloat(renta));
      setMostrarResultados(true);
    } else {
      alert('Por favor, ingresa un salario válido.');
    }
  }

  const limpiar = () => {
    setNombre('');
    setSalario('');
    setIsss(0);
    setAfp(0);
    setRenta(0);
    setTotal(0);
    setMostrarResultados(false);
  }

  return (
    <>
      <View style={styles.container}>
      <Text style={styles.titulo}>Salario Neto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de empleado"
        onChangeText={setNombre}
        value={nombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Salario $"
        keyboardType="numeric"
        onChangeText={(text) => setSalario(text)}
        value={salario}
      />
      <Button title="Calcular" onPress={calcular} />
    </View>
    {mostrarResultados && ( // Renderizar los resultados si mostrarResultados es true
      <>
        <View style={styles.resultados}>
        <View style={styles.fila}>
            <Text>Empleado: </Text>
            <Text>{nombre}</Text>
          </View>
          <View style={styles.fila}>
            <Text>ISSS:</Text>
            <Text>${isss.toFixed(2)}</Text>
          </View>
          <View style={styles.fila}>
            <Text>AFP:</Text>
            <Text>${afp.toFixed(2)}</Text>
          </View>
          <View style={styles.fila}>
            <Text>Renta:</Text>
            <Text>${renta.toFixed(2)}</Text>
          </View>
          <View style={styles.fila}>
            <Text>El salario neto es   </Text>
            <Text>${total.toFixed(2)}</Text>
          </View>
      </View>
      <Button title="Limpiar" onPress={limpiar} />
      </>
    )}
    
    </>
    
  )
};

const styles = StyleSheet.create({
  container: {
    width:'80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  resultados: {
    width:'65%',
    marginTop: 15,
    marginBottom:10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});

export default Form;
