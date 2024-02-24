import { useState } from "react";
import { Text, View } from "react-native";


const AddUser = () => {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const saveData = async () => {
    const url = ' https://65d402ff522627d50109bfe2.mockapi.io/user';
    let result = await fetch(url, {
      method: 'POST',
      headers: { 'Conten-Type': 'application/json' },
      body: JSON.stringify({ name, birthday }),
    });
    result = await result.json();
    if (result) {
      console.warn("Add success");
    }
  }
  return (
    <View style={styles.modelContent}>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={text => setName(text)} />
      <TextInput
        style={styles.input}
        placeholder="Enter Birthday"
        value={birthday}
        onChangeText={text => setBirthday(text)} />
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button}
          onPress={saveData}>
          <Text style={styles.buttonText}>
            Add New
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default AddUser;