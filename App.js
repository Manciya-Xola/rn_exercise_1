import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
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
});
