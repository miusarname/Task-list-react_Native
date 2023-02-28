import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ToastAndroid,
} from "react-native";

export default function App() {
  const [state, setState] = useState({
    name: "",
    number: "",
    email: "",
  });

  function Aviso() {
    alert(`Ingresa el dato en una "Casilla" permitida!... `);
  }

  function addContact() {
    console.log(state);
  }

  function handleChange(name,value) {
    setState({...state,[name]:value})
  }

  return (
    <View style={styles.container}>
      <Text>An contact list app!!!</Text>
      <TextInput
        onChangeText={(value) => handleChange("name", value)}
        style={styles.input}
        placeholder="Ingresa el nombre de contacto"
        name="name"
      />
      <TextInput
        onChangeText={(value) => handleChange("number", value)}
        style={styles.input}
        placeholder="Ingresa el numero del contacto"
        keyboardType="number-pad"
        name="number"
      />
      <TextInput
        onChangeText={(value) => handleChange("email", value)}
        style={styles.input}
        placeholder="Ingresa el email del contacto"
        name="email"
      />
      <Button
        onPress={addContact}
        title="Add contact  🙎🙎‍♂️"
        color="#0d47a1"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    width: 255,
    borderWidth: 1,
    padding: 10,
  },
});
