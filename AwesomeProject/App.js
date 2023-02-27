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

  function handleChange(e) {
    const name=(e)=>{
      if (
        e.nativeEvent.target == 7 ||
        e.nativeEvent.target.placeholder === "Ingresa el nombre de contacto"
      ) {
        let name = e.nativeEvent.text;
        return name
      }
    }

    const description =(e)=>{
      if (
        e.nativeEvent.target == 9 ||
        e.nativeEvent.target.placeholder === "Ingresa el numero del contacto"
      ) {
        let description = e.nativeEvent.text;
        return description
      } 
    }

    const email =(e)=>{
      if (
        e.nativeEvent.target == 13 ||
        e.nativeEvent.target.placeholder === "Ingresa el email del contacto"
      ) {
        let email = e.nativeEvent.text;
        return email
      } 
    }

    console.log(name(e));
    console.log(description(e));
    console.log(email(e));

    /* console.log(e.nativeEvent.text)
    console.log(e.nativeEvent.target)
    console.log(e.nativeEvent.target.placeholder) */
  }

  return (
    <View style={styles.container}>
      <Text>An contact list app!!!</Text>
      <TextInput
        onChange={(e)=>{
          var name = handleChange(e)
          console.log(name);
        }}
        style={styles.input}
        placeholder="Ingresa el nombre de contacto"
        name="name"
        required
      />
      <TextInput
        onChange={handleChange}
        style={styles.input}
        placeholder="Ingresa el numero del contacto"
        keyboardType="number-pad"
        name="number"
        required
      />
      <TextInput
        onChange={handleChange}
        style={styles.input}
        placeholder="Ingresa el email del contacto"
        textContentType="emailAddress"
        name="number"
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
