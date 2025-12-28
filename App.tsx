import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"
import { Button } from './components/ui/button';
export default function App() {
  return (
    <View style={styles.container}>
      <Text className='bg-red-500'>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button/>
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
});
