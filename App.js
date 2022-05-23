import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Text>my first expo app</Text>
        <TextInput
          style={styles.textInputName}
          placeholder="Your name here"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appContainer:{
    flex: 1,
    backgroundColor: "#ff00ff",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  textInputName:{
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#fff",
    borderWidth: 2,
    color: '#fff',
    marginBottom: 10,
  },
});
